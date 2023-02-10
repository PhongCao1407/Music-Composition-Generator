import './displayPage.css'
import playButton from './static/Play-Button.svg'
import { useEffect } from 'react';

import testFile from './static/Modern/Modern_In_A_Landscape_J.Cage_.mxl'
import { appID } from './appID';

import Embed from 'flat-embed'
import { useLocation } from 'react-router-dom';

import layoutHelper from '../../helpers/layoutHelper'

//Components/////////////////////////////////////////////////////////////

const Genre = (props) => {
    return (
        <div className="music-type">
            <h1 id="genre"></h1>
        </div>
    )
}

const PieceTitle = (props) => {
    return (
        <div className="piece-title">
            <h2 id="title"></h2>
            <h3 id="composer"></h3>
        </div>
    )
}


const DisplayPage = () => {
    //Getting the genre that is passed in from the previous page
    const {state} = useLocation()
    const {genre} = state
    
    //This function runs everytime the page load
    //Purposes:
    //To manipulate the CSS to display the layout correctly
    //To load the score for the given genre
    useEffect(() => {
        //Add styles to overall layout specifically for this page
        document.documentElement.className = "DisplayPageBody";
        document.body.className = "DisplayPageBody";
        document.getElementById("root").className = "DisplayPageBody";
        const app = document.getElementsByClassName("App")
        app[0].setAttribute('id', 'DisplayPageBody')

        //The About Page hide the footer, this code is needed to make it show again 
        const footer = document.getElementsByTagName("Footer")[0]
        footer.style.display = 'flex'

        // Change color of navbar to highlight current tab
        layoutHelper.resetNavboxButtonColor()
        const createButton = document.getElementById("create")
        createButton.style.backgroundColor = "#696969";
        createButton.style.color = "#FFFFFF"
        
        //Load score for the given genre
        renderScore(genre)
    }, []);

    return (
        <main id="displayPage">
            <Genre/>

            <div className="display-window">
                <PieceTitle/>
                <div className="score" id='score'>
                </div>
            </div>
        </main>
    )
}


//Helper Functions/////////////////////////////////////////////////////////////

//Render the score
//In production, the deafult method is to load the nonlocal score, 
//the local load part should only be use in case the page fails to fetch a score. 
const renderScore = (genre) => {
    //Configure container
    const embed = configureEmbeddedContainer()


    // // Embed local File on Frontend
    // // Get and set piece details
    // const pieceDetails = getPieceDetails(testFile)
    // setPieceDetails(pieceDetails.genre, pieceDetails.pieceTitle, pieceDetails.composerName)
    // loadLocalFile(testFile, embed)    

    //Get file from dev backend
    const url = `https://music-composition-generator.fly.dev/${genre}/`
    loadNonlocalFile(embed, url)
   
}

const configureEmbeddedContainer = () => {
    const container = document.getElementById('score')
    const appId = appID
    
    //Configuring embedded container
    const embed = new Embed(container, {
    embedParams: {
        appId,
        layout: 'responsive',
        videoPosition: 'float',
        controlsPosition: 'bottom',
        themePrimary: '#353535',
        hideTempo: true
    }
    });
    
    return embed
}

//Get genre, title, composer name from file
const getPieceDetails = (file) => {
    const fileSplit = file.split('_')

    fileSplit[0] = fileSplit[0].split('/').pop()
    
    const genre = fileSplit[0]
    // console.log(fileSplit)
    const pieceTitle = fileSplit.splice(1, fileSplit.length - 3).join(" ")
    // console.log(pieceTitle)
    const composerName = fileSplit[fileSplit.length - 2]

    return {genre, pieceTitle, composerName}
}

//Set the piece details in the page
const setPieceDetails = (genre, pieceTitle, composerName) => {
    const genreComponent = document.getElementById('genre')
    const scoreTitleComponent = document.getElementById('title')
    const scoreComposerNameComponent = document.getElementById('composer')
    genreComponent.textContent = genre
    scoreTitleComponent.textContent = pieceTitle
    scoreComposerNameComponent.textContent = composerName
}

//Load a local test file
const loadLocalFile = (file, embed) => {
    
    const fileExtension = file.split('.').pop();
    
    console.log(file)
    if (fileExtension === "mxl") {
        fetch(file)
        .then(function (response) {
            console.log(response)
            return response.arrayBuffer();
        })
        .then(function (mxl) {
        // Got the compressed score as an `ArrayBuffer`, load it in the embed
            embed.loadMusicXML(mxl);
            
        })
        .then(function () {
        // Score loaded in the embed
            embed.getParts().then(function (parts) {
                console.log('parts')
            });
        
        })
        .catch(function (error) {
        // Unable to load the score
    });
    }
    else {
        fetch(file)
        .then(response => {
            console.log(response)
            return response.text()
        }).then(xml => {
            console.log()
            embed.loadMusicXML(xml)
        })
        .then(() => console.log('Embed loaded'))
        .catch(error => console.error(error));
    }  
}

// Get file from backend
// Because getting the file extension is rather difficult, default to mxl file for now
const loadNonlocalFile = (embed, url) => {
    //Example url: http://localhost:3001/romantic
    fetch(url)
    .then(response => {
        console.log(response.headers.get('genre'))
        console.log(response.headers.get('piecetitle'))
        console.log(response.headers.get('composername'))

        const genre = response.headers.get('genre')
        const pieceTitle = response.headers.get('piecetitle')
        const composerName = response.headers.get('composername')
        setPieceDetails(genre, pieceTitle, composerName)

        return response.arrayBuffer()
    })
    .then(xml => {
        embed.loadMusicXML(xml)
    })
    .then(() => console.log('Embed loaded'))
    .catch(error => console.error(error))
}



  

export {DisplayPage};