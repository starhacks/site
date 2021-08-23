import ReactGA from 'react-ga';
import React from 'react';
import About from './about/About';
import Anecdotes from './anecdotes/Anecdotes';
import Contact from './contact/Contact';
import * as Constants from './constants';
import Landing from './landing/Landing';
import Team from './team/Team';
import Questions from './questions/Questions';
import Sponsors from './sponsors/Sponsors';
import Schedule from './schedule/Schedule';
import {
    hackathonSchedule,
    rolesDescriptions,
    socialMediaHandles,
    anecdotesList,
    teamMembers,
    faqList,
    landingPhoto,
} from './constants';
import Roles from './roles/Roles';

const App = () => {
    ReactGA.initialize('G-FSN13RH97N');
    ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <div className="App" >
            <Landing title={Constants.starhacks} img={landingPhoto} />
            <About title={Constants.about} />
            <Schedule schedule={hackathonSchedule} title={Constants.schedule} />
            <Roles title={Constants.roles} roles={rolesDescriptions} />
            <Anecdotes title={Constants.anecdotes} anecdotes={anecdotesList} />
            <Sponsors title={Constants.sponsor} />
            <Questions title={Constants.commonlyAskedQuestions} faq={faqList} />
            <Team title={Constants.team} teamMembers={teamMembers} />
            <Contact socialMediaHandles={socialMediaHandles} />
        </div>
    );
};

export default App;
