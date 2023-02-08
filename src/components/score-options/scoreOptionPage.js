import './scoreOptionPage.css'
import upArrow from './static/UpArrow.svg';
import downArrow from './static/DownArrow.svg';
import checkmark from './static/Checkmark.svg';
import bach from './static/bach.png';
import mozart from './static/mozart.png';
import chopin from './static/chopin.png';

import layoutHelper from '../../helpers/layoutHelper'

// import {testCreatePostButton} from '../../services/testService';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ScoreOptionPage = () => {
    const navigator = useNavigate()
  
    //Routing
    const displayBaroque = () => {
        // console.log('baroque')
        navigator('/displaypage', {state: {genre: 'baroque'}})
    }
    
    const displayClassical = () => {
        console.log('classical')
        navigator('/displaypage', {state: {genre: 'classical'}})
    } 

    const displayRomantic = () => {
        console.log('romantic')
        navigator('/displaypage', {state: {genre: 'romantic'}})
    } 

    const displayImpressionist = () => {
        console.log('impressionist')
        navigator('/displaypage', {state: {genre: 'impressionist'}})
    } 

    const displayModern = () => {
        console.log('modern')
        navigator('/displaypage', {state: {genre: 'modern'}})
    } 

    //This exist to manipulate the CSS to display the layout correctly
    useEffect(() => {
        //Change CSS to be correct for this specific page
        document.documentElement.className = "ScoreOptionPageBody";
        document.body.className = "ScoreOptionPageBody";
        document.getElementById("root").className = "ScoreOptionPageBody";
        const app = document.getElementsByClassName("App")
        app[0].setAttribute('id', 'ScoreOptionPageBody')

        //The About Page hide the footer, this code is needed to make it show again
        const footer = document.getElementsByTagName("Footer")[0]
        footer.style.display = 'flex'

        // Change color of navbar to highlight current tab
        layoutHelper.resetNavboxButtonColor()
        const createButton = document.getElementById("home")
        createButton.style.backgroundColor = "#696969";
        createButton.style.color = "#FFFFFF"
    }, []);

    return (
        <main id="scoreOptionPage">

                <div className="genre-options">

                    <div className="genre-option-prompt">
                        <h3>Start Creating</h3>
                        <h1>Select the Genre</h1>
                    </div>

                    <div className="genre-option-wrapper">
                        <div className="genre-option">
                            <button className="bach-image" onClick={displayBaroque}></button>
                            <div className="genre-option-description">
                                <h2>Baroque</h2>
                                <p>Bach, Handel, ..</p>
                            </div>
                        </div>
                        <div className="genre-option">
                            <button className="mozart-image" onClick={displayClassical}></button>
                            <div className="genre-option-description">
                                <h2>Classical</h2>
                                <p>Mozart, Haydn, ..</p>
                            </div>
                        </div>
                        <div className="genre-option">
                            <button className="chopin-image" onClick={displayRomantic}></button>
                            <div className="genre-option-description">
                                <h2>Romantic</h2>
                                <p>Chopin, Schumann, ..</p>
                            </div>
                        </div>
                        <div className="genre-option">
                            <button className="debussy-image" onClick={displayImpressionist}></button>
                            <div className="genre-option-description">
                                <h2>Impressionist</h2>
                                <p>Debussy, Ravel, ..</p>
                            </div>
                        </div>
                        <div className="genre-option">
                            <button className="schoenberg-image" onClick={displayModern}></button>
                            <div className="genre-option-description">
                                <h2>Modern</h2>
                                <p>Schoenberg, Boulez, ..</p>
                            </div>
                        </div>
                    </div>
                </div>

        </main>
    );
}

export {ScoreOptionPage};