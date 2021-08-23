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

            {hackathonSchedule.length > 0 &&
                <Schedule
                    schedule={hackathonSchedule}
                    title={Constants.schedule} />}

            {rolesDescriptions.length > 0 &&
                <Roles
                    title={Constants.roles}
                    roles={rolesDescriptions} />}

            {anecdotesList.length > 0 &&
                <Anecdotes title={Constants.anecdotes} />}

            {teamMembers.length > 0 &&
                <Team title={Constants.team}
                    teamMembers={teamMembers} />}

            {faqList.length > 0 &&
                <Questions title={Constants.commonlyAskedQuestions} />}

            <Sponsors title={Constants.sponsors} />

            {socialMediaHandles.length > 0 &&
                <Contact socialMediaHandles={socialMediaHandles} />}
        </div>
    );
};

export default App;
