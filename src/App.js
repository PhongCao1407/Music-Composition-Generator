import './App.css';
import logo from './static/Logo.svg';
import {DisplayPage} from './components/score-display/displayPage';
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate
} from "react-router-dom";
import { ScoreOptionPage } from './components/score-options/scoreOptionPage';


const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="" srcSet=""/>
        </div>
        <nav>
            <div className="navbox" id="home">
                <button>Home</button>
            </div>
            <div className="navbox" id="about">
                <button>About</button>
            </div>
            <div className="navbox">
                <button id="create">Create</button>
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
  const navigator = useNavigate()
  
  const moveToScoreDisplay = (genre) => {
    navigator('/displaypage')
  } 

  return (
      <div className="App">
        <Header/>
        
        <Routes>
          <Route path='/displaypage' element={<DisplayPage/>}></Route>
          <Route path="/" element={<ScoreOptionPage handleClick={moveToScoreDisplay}/>} />
        </Routes>

        <Footer/>
      </div>

    
  );
}

export default App;
