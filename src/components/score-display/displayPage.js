import './displayPage.css'
import playButton from './static/Play-Button.svg'

const DisplayPage = () => {
    return (
        <main>
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