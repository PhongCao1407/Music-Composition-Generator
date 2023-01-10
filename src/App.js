import './App.css';
import logo from './static/Logo.svg';
import {DisplayPage} from './components/score-display/displayPage';
import { ScoreOptionPage } from './components/score-options/scoreOptionPage';

const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="" srcset=""/>
        </div>
        <nav>
            <div className="navbox" id="home">
                <h3>Home</h3>
            </div>
            <div className="navbox" id="about">
                <h3>About</h3>
            </div>
            <div className="navbox" id="create">
                <h3>Create</h3>
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
      {/* <DisplayPage/> */}
      <ScoreOptionPage/>
      <Footer/>
    </div>
  );
}

export default App;
