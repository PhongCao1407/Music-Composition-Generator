import './about.css'

import bachImage from './static/bach.png'
import mozartImage from './static/mozart.png'
import chopinImage from './static/chopin.png'
import debussyImage from './static/debussy.png'
import schoenbergImage from './static/schoenberg.png'

import { useEffect } from "react"

import layoutHelper from '../../helpers/layoutHelper'

const AboutPage = () => {

    const Section = (props) => {
        const Era = () => {
            const eras = 
            {'baroque': 'The Baroque Era',
            'classical': 'The Classical Era',
            'romantic': 'The Romantic Era',
            'impressionist': 'The Impressionist Era',
            'modern': 'The Modernist Era'}
            return (
                <h1 className='era'>
                    {eras[props.id]}
                </h1>
            )
        }

        const EraDescription = () => {
            const descriptions =
            {'baroque': 'Baroque music refers to the period or dominant style of Western classical music composed from about 1600 to 1750. The Baroque saw the creation of common-practice tonality, an approach to writing music in which a song or piece is written in a particular key. Notable composers from this period includes Johann Sebastian Bach, George Frideric Handel, ... ',
            'classical': 'The Classical period was an era of Western classical music between roughly 1750 and 1820. Classical music has a lighter, clearer texture than Baroque music, but a more sophisticated use of form. It is mainly homophonic, using a clear melody line over a subordinate chordal accompaniment. Notable composers from this period includes Wolfgang Amadeus Mozart, Ludwig van Beethoven, ...',
            'romantic': 'Romantic music is a stylistic movement in Western Classical music associated with the period of the 19th century. Romantic composers sought to create music that was individualistic, emotional, dramatic and often programmatic; reflecting broader trends within the movements of Romantic literature, poetry, art, and philosophy. Notable composers from this period includes Frederic Chopin, Robert Schumann, ...',
            'impressionist': 'Impressionism in music was a movement among various composers in Western classical music (mainly during the late 19th and early 20th centuries) whose music focuses on mood and atmosphere, "conveying the moods and emotions aroused by the subject rather than a detailed tone‐picture". Notable composers from this period includes Claude Debussy, Maurice Ravel, ...',
            'modern': 'In music, modernism is an aesthetic stance underlying the period of change and development in musical language that occurred around the turn of the 20th century, a period of diverse reactions in challenging and reinterpreting older categories of music, innovations that led to new ways of organizing and approaching harmonic, melodic, sonic, and rhythmic aspects of music, and changes in aesthetic worldviews in close relation to the larger identifiable period of modernism in the arts of the time.'}

            console.log(descriptions[props.id])
            return (
                <p>
                    {descriptions[props.id]}
                </p>
            )
        }

        const ComposerImage = () => {
            const composerImages =
            {'baroque': bachImage,
            'classical': mozartImage,
            'romantic': chopinImage,
            'impressionist': debussyImage,
            'modern': schoenbergImage}

            return (
                <img src={composerImages[props.id]}></img>
            )
        }

        return (
            <div id={props.id} className="section">
                <div className='text-info'>
                    <Era/>
                    <EraDescription/>
                </div>
                <div className='composer-image'>
                    <ComposerImage/>
                </div>
            </div>
        )
    }

    useEffect(() => {
        //Change CSS to be correct for this specific page
        document.documentElement.className = "AboutPage";
        document.body.className = "AboutPage";
        document.getElementById("root").className = "AboutPage";
        const app = document.getElementsByClassName("App")
        app[0].setAttribute('id', 'AboutPage')

        // Hide footer
        const footer = document.getElementsByTagName("Footer")[0]
        footer.style.display = 'none'

        // Change color of navbar to highlight current tab
        layoutHelper.resetNavboxButtonColor()
        const createButton = document.getElementById("about")
        createButton.style.backgroundColor = "#696969";
        createButton.style.color = "#FFFFFF"
    })

    return(
        <main >
            <div className="title-page section">
                <h1>The Eras Of Classical Music</h1>
            </div>
            <Section id="baroque"></Section>
            <Section id="classical"></Section>
            <Section id="romantic"></Section>
            <Section id="impressionist"></Section>
            <Section id="modern"></Section>
        </main>
        
    )
}

export {AboutPage}