import './App.css';
import logo from './static/Logo.svg';
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate
} from "react-router-dom";

import {DisplayPage} from './components/score-display/displayPage';
import { ScoreOptionPage } from './components/score-options/scoreOptionPage';
import { AboutPage } from './components/about/about';



const Header = () => {
  const navigator = useNavigate()

  const navigateHome = () => {
    navigator('/');
  }

  const navigateAbout = () => {
    navigator('/about')
  }

  //If the user decide to go to navigate without creating a score, get a random score
  const navigateCreate = () => {
    const genres = ['baroque', 'classical', 'romantic', 'impressionist', 'modern']
    const randomGenre = genres[Math.floor(Math.random()*genres.length)];
    navigator('/displaypage', {state: {genre: randomGenre}})
  }


  return (
    <header>
        <div className="logo">
            <img src={logo} alt="" srcSet=""/>
        </div>
        <nav>
            <div className="navbox">
                <button onClick={navigateHome} id="home" className='navbox-button'>Home</button>
            </div>
            <div className="navbox">
                <button onClick={navigateAbout} id="about" className='navbox-button'>About</button>
            </div>
            <div className="navbox">
                <button onClick={navigateCreate} id="create" className='navbox-button'>Create</button>
            </div>
        </nav>
    </header>
  );
}

const Footer = () => {
  return (
    <footer>
    </footer>
  )
}

const App = () => {

  return (
      <div className="App">
        <Header/>
        
        <Routes>
          <Route path="/displaypage" element={<DisplayPage/>}></Route>
          <Route path="/" element={<ScoreOptionPage/>} />
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>

        <Footer/>
      </div>

    
  );
}

export default App;
