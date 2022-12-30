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
            <div class="music-type">
                <h1>Music Type</h1>
            </div>

            <div class="display-window">
                <div class="score-title">
                    Score Name
                </div>
                <div class="score">

                </div>
                <div class="play-bar">
                    <img src={playButton} alt=""/>
                </div>
            </div>
        </main>
    )
}

export {DisplayPage};