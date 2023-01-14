import './displayPage.css'
import playButton from './static/Play-Button.svg'
import { useEffect } from 'react';
import testFile from './DebuMandSample.musicxml'

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
        branding: false,
    }
    });

    fetch(testFile)
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
                <h1>Music Type</h1>
            </div>

            <div className="display-window">
                
                <div className="score" id='score'>
                    {/* <OpenSheetMusicDisplay file={testFile}></OpenSheetMusicDisplay> */}
                </div>
                
            </div>
        </main>
    )
}

  

export {DisplayPage};