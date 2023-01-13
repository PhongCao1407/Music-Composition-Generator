import './displayPage.css'
import playButton from './static/Play-Button.svg'
import { useEffect } from 'react';
import testFile from './Dichterliebe01.musicxml'

import Embed from 'flat-embed'
import OpenSheetMusicDisplay from '../../lib/OpenSheetMusicDisplay'

//Flat.io
// const renderScore = () => {
//     const container = document.getElementById('score')
//     const appId = '63bf79cf24013e27391d7a98'
    
//     const embed = new Embed(container, {
//     embedParams: {
//         appId,
//         layout: 'track',
//         videoPosition: 'float',
//         controlsPosition: 'top',
//     }
//     });

//     fetch(testFile)
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


//OpenSheetMusicDisplay
// const renderScore = () => {
//     var osmd = new OpenSheetMusicDisplay("score");
//     osmd.setOptions({
//         backend: "svg",
//         drawTitle: true,
//         // drawingParameters: "compacttight" // don't display title, composer etc., smaller margins
//       });
//       osmd
//         .load(testFile)
//         .then(
//           function() {
//             osmd.render();
//           }
//         );
// }

const DisplayPage = () => {
    useEffect(() => {
        document.documentElement.className = "DisplayPageBody";
        document.body.className = "DisplayPageBody";
        document.getElementById("root").className = "DisplayPageBody";
        const app = document.getElementsByClassName("App")
        app[0].setAttribute('id', 'DisplayPageBody')
        // renderScore()

    }, []);

    return (
        <main id="displayPage">
            <div className="music-type">
                <h1>Music Type</h1>
            </div>

            <div className="display-window">
                
                <div className="score" id='score'>
                    <OpenSheetMusicDisplay file={testFile}></OpenSheetMusicDisplay>
                </div>
                <div className="play-bar">
                    <button></button>
                </div>
            </div>
        </main>
    )
}

  

export {DisplayPage};