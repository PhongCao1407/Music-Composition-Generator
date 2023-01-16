import './displayPage.css'
import playButton from './static/Play-Button.svg'
import { useEffect } from 'react';
import services from '../../services/testService';

import testFile from './static/chopin2810.mxl'
// import testFile from './static/Dichterliebe01.musicxml'

import Embed from 'flat-embed'


//Flat.io
const renderScore = () => {
    const container = document.getElementById('score')
    const appId = '63bf79cf24013e27391d7a98'
    
    const embed = new Embed(container, {
    embedParams: {
        appId,
        layout: 'responsive',
        videoPosition: 'float',
        controlsPosition: 'bottom',
        themePrimary: '#353535',
    }
    });


    

    // // Test Local File on Frontend
    // const fileExtension = testFile.split('.').pop();
    // console.log(testFile)
    // if (fileExtension === "mxl") {
    //     fetch(score)
    //     .then(function (response) {
    //         console.log(response)
    //         return response.arrayBuffer();
    //     })
    //     .then(function (mxl) {
    //     // Got the compressed score as an `ArrayBuffer`, load it in the embed
    //         return embed.loadMusicXML(mxl);
    //     })
    //     .then(function () {
    //     // Score loaded in the embed
    //     })
    //     .catch(function (error) {
    //     // Unable to load the score
    // });
    // }
    // else {
    //     fetch(score)
    //     .then(response => {
    //         console.log(response)
    //         return response.text()
    //     }).then(xml => {
    //         console.log()
    //         embed.loadMusicXML(xml)
    //     })
    //     .then(() => console.log('Embed loaded'))
    //     .catch(error => console.error(error));
    // }    



    // Get file from backend
    // Because getting the file extension is rather difficult, default to mxl file for now

    
    fetch('http://localhost:3001/romantic')
    .then(response => {
        console.log(response)
        return response.arrayBuffer()
    })
    .then(xml => {
        embed.loadMusicXML(xml)
    })
    .then(() => console.log('Embed loaded'))
    .catch(error => console.error(error))

        
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
            <div className="music-type">
                <h1>Romantic</h1>
            </div>

            <div className="display-window">
                <div className="piece-title">
                    <h2>Prelude, Op. 28, No. 10</h2>
                </div>
                <div className="score" id='score'>
                </div>
                
            </div>
        </main>
    )
}

  

export {DisplayPage};