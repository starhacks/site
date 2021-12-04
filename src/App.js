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
import Speakers from './speakers/Speakers';
import {
    hackathonSchedule,
    rolesDescriptions,
    socialMediaHandles,
    anecdotesList,
    teamMembers,
    faqList,
    landingPhoto,
    sponsors,
    speakers,
} from './constants';
import Roles from './roles/Roles';
import Milestones from './milestones/Milestones';

const App = () => {
    return (
        <div className="App" >
            <Landing title={'STARHACKS'} img={landingPhoto} />
            <About title={'ABOUT US'} />
            <Milestones title={'BY THE NUMBERS'}
                milestones={Constants.milestones_} />
            <Speakers title={'SPEAKERS'} speakers={speakers} />
            <Schedule title={'SCHEDULE'} schedule={hackathonSchedule} />
            <Roles title={'GET INVOLVED'} roles={rolesDescriptions} />
            <Anecdotes title={'TESTIMONIALS'} anecdotes={anecdotesList} />
            <Sponsors title={'SPONSORS'} sponsors={sponsors} />
            <Questions title={'FAQ'} faqList={faqList} />
            <Team title={'TEAM'} teamMembers={teamMembers} />
            <Contact socialMediaHandles={socialMediaHandles} />
        </div>
    );
};

export default App;
