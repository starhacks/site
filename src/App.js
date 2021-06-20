import './App.scss';
import ReactGA from 'react-ga';
import About from './about/About';
import Anecdotes from './anecdotes/Anecdotes';
import Contact from './contact/Contact';
import Events from './events/Events';
import * as Constants from './constants';
import Subscribe from './subscribe/Subscribe';
import Team from './team/Team';
import Questions from './questions/Questions';
import Sponsors from './sponsors/Sponsors';


function App() {
  ReactGA.initialize('G-FSN13RH97N');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <Subscribe title={Constants.subscribeToOurNewsletter} />
      <About title={Constants.about} />
      <Events title={Constants.events} />
      <Anecdotes title={Constants.anecdotes} />
      <Team title={Constants.team} />
      <Questions title={Constants.commonlyAskedQuestions} />
      <Sponsors title={Constants.sponsors} />
      <Contact title={Constants.contact} />
    </div>
  );
}

export default App;
