import './scoreOptionPage.css'
import upArrow from './static/UpArrow.svg';
import downArrow from './static/DownArrow.svg';
import checkmark from './static/Checkmark.svg';
import bach from './static/bach.png';
import mozart from './static/mozart.png';
import chopin from './static/chopin.png';

import {testCreatePostButton} from '../../services/testService';

import { useEffect } from 'react';

const ScoreOptionPage = () => {
    useEffect(() => {
        document.documentElement.className = "ScoreOptionPageBody";
        document.body.className = "ScoreOptionPageBody";
        document.getElementById("root").className = "ScoreOptionPageBody";
        const app = document.getElementsByClassName("App")
        app[0].setAttribute('id', 'ScoreOptionPageBody')
    }, []);

    return (
        <main id="scoreOptionPage">
            <div className="speed-duration-options">
                <div className="duration-options">
                    <h2>Choose the Duration</h2>
                    <div className="duration">
                        <p>0:00</p>
                        <div className="arrows">
                            <button className="up-arrow"></button>
                            <button className="down-arrow"></button>
                            {/* <img src={upArrow} alt=""/>
                            <img src={downArrow}/> */}
                        </div>
                    </div>
                </div>

                <div className="speed-options">
                    <h2>Choose the Tempo</h2>
                    <div className="speeds">
                        <div className="speed">
                            <button>Slow</button>
                            <img src={checkmark} alt="" srcSet=""/>
                        </div>
                        <div className="speed">
                            <button>Medium</button>
                            <img src={checkmark} alt="" srcSet=""/>
                        </div>
                        <div className="speed">
                            <button>Fast</button>
                            <img src={checkmark} alt="" srcSet=""/>
                        </div>
                    </div>
                </div>

            </div>

                <div className="genre-options">

                    <div className="genre-option-prompt">
                        <h3>Start Creating</h3>
                        <h1>Select the Genre</h1>
                    </div>

                    <div className="genre-option-wrapper">
                        <div className="genre-option">
                            <button className="bach-image" onClick={() => testCreatePostButton()}></button>
                            <div className="genre-option-description">
                                <h2>Baroque</h2>
                                <p>Bach, Handel, ..</p>
                            </div>
                        </div>
                        <div className="genre-option">
                            <button className="mozart-image"></button>
                            <div className="genre-option-description">
                                <h2>Classical</h2>
                                <p>Mozart, Haydn, ..</p>
                            </div>
                        </div>
                        <div className="genre-option">
                            <button className="chopin-image"></button>
                            <div className="genre-option-description">
                                <h2>Romantic</h2>
                                <p>Chopin, Schumann, ..</p>
                            </div>
                        </div>
                    </div>
                </div>

        </main>
    );
}

export {ScoreOptionPage};