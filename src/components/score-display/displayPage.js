import './displayPage.css'
import playButton from './static/Play-Button.svg'
import { useEffect } from 'react';

const DisplayPage = () => {
    useEffect(() => {
        document.documentElement.className = "DisplayPageBody";
        document.body.className = "DisplayPageBody";
        document.getElementById("root").className = "DisplayPageBody";
        const app = document.getElementsByClassName("App")
        app[0].setAttribute('id', 'DisplayPageBody')
    }, []);

    return (
        <main id="displayPage">
            <div className="music-type">
                <h1>Music Type</h1>
            </div>

            <div className="display-window">
                <div className="score-title">
                    Score Name
                </div>
                <div className="score">

                </div>
                <div className="play-bar">
                    <button></button>
                </div>
            </div>
        </main>
    )
}

export {DisplayPage};