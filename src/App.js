import './App.scss';
import ReactGA from 'react-ga';
import About from './about/About';
import Anecdotes from './anecdotes/Anecdotes';
import Contact from './contact/Contact';
import * as Constants from './constants';
import Subscribe from './landing/Landing';
import Team from './team/Team';
import Questions from './questions/Questions';
import Sponsors from './sponsors/Sponsors';
import Schedule from './schedule/Schedule';

function App() {
  ReactGA.initialize('G-FSN13RH97N');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App" >
      <Subscribe title={Constants.starhacks} />
      <About title={Constants.about} />
      <Schedule title={Constants.schedule} />
      <Anecdotes title={Constants.anecdotes} />
      <Team title={Constants.team} />
      <Questions title={Constants.commonlyAskedQuestions} />
      <Sponsors title={Constants.sponsors} />
      <Contact title={Constants.contact} />
    </div>
  );
}

export default App;
