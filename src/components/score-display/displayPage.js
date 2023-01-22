import './displayPage.css'
import playButton from './static/Play-Button.svg'
import { useEffect } from 'react';
import services from '../../services/testService';

import testFile from './static/Baroque/Baroque_Winter_Largo_easy_arr._for_Small_Ensemble-_Flute_Violin_Cello_A.Vivaldi_.mxl'
import { appID } from './appID';

import Embed from 'flat-embed'

//Components

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
    useEffect(() => {
        document.documentElement.className = "DisplayPageBody";
        document.body.className = "DisplayPageBody";
        document.getElementById("root").className = "DisplayPageBody";
        const app = document.getElementsByClassName("App")
        app[0].setAttribute('id', 'DisplayPageBody')
        renderScore()

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


//Helper Functions

//Flat.io
const renderScore = () => {
    //Configure container
    const embed = configureEmbeddedContainer()


    // // Embed local File on Frontend
    // // Get and set piece details
    // const pieceDetails = getPieceDetails(testFile)
    // setPieceDetails(pieceDetails.genre, pieceDetails.pieceTitle, pieceDetails.composerName)
    // loadLocalFile(testFile, embed)    

    //Get file from dev backend
    const url = 'http://localhost:3001/baroque/'
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


const setPieceDetails = (genre, pieceTitle, composerName) => {
    const genreComponent = document.getElementById('genre')
    const scoreTitleComponent = document.getElementById('title')
    const scoreComposerNameComponent = document.getElementById('composer')
    genreComponent.textContent = genre
    scoreTitleComponent.textContent = pieceTitle
    scoreComposerNameComponent.textContent = composerName
}

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