import './App.css';
import logo from './static/Logo.svg';
import {DisplayPage} from './components/score-display/displayPage';
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

function App() {
  return (
    <div className="App">
      <Header/>
      <DisplayPage/>
      {/* <ScoreOptionPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
