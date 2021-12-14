/* eslint-disable max-len */
import {
    faDiscord,
    faInstagram,
    faLinkedinIn,
    faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import lucy from './assets/team/lucy.png';
import serena from './assets/team/serena.png';
import camilla from './assets/team/camilla.png';
import sammi from './assets/team/sammi.png';
import elisa from './assets/team/elisa.png';
import avighna from './assets/team/avighna.png';
import hannah from './assets/team/hannah.png';

import aboutAsset from './assets/about-us-asset.png';
import landingAsset from './assets/landing.svg';
import prospectus from './assets/prospectus.pdf';
import report from './assets/StarHacks I Event Report.pdf';

import balsamiq from './assets/logos/balsamiq.png';
import github from './assets/logos/github-logo.svg';
import stickermule from './assets/logos/stickermule.svg';
import mlh from './assets/logos/mlh.svg';

import telle from './assets/speakers/telle.png';
import vidya from './assets/speakers/vidya.png';
import ifueko from './assets/speakers/ifueko.png';
import vivian from './assets/speakers/vivian.png';
import harpreet from './assets/speakers/harpreet.png';
import tenay from './assets/speakers/tenay.png';
import gloria from './assets/speakers/gloria.png';
import fatima from './assets/speakers/fatima.png';
import deepti from './assets/speakers/deepti.png';
import caeley from './assets/speakers/caeley.png';
import benis from './assets/speakers/benis.png';

export const sponsorDoc = prospectus;
export const milestonesDoc = report;
export const aboutPhoto = aboutAsset;
export const landingPhoto = landingAsset;
export const date = 'January 22-23, 2022 | Virtual';
export const hackathonSchedule = [
    {
        id: 0,
        dow: 'Saturday',
        date: '1/8',
        events: [
            {
                title: 'Intro to Web Development',
            },
        ],
    },
    {
        id: 1,
        dow: 'Sunday',
        date: '1/9',
        events: [
            {
                title: 'Basics of Git and GitHub',
                presenter: 'Ifueko Igbinedion',
                start: '11:00',
                end: '12:00',
            },
        ],
    },
    {
        id: 2,
        dow: 'Saturday',
        date: '1/15',
        events: [
            {
                title: 'Intro to Graphic Design and Figma',
            },
        ],
    },
    {
        id: 3,
        dow: 'Sunday',
        date: '1/16',
        events: [
            {
                title: 'Hackathon 101 and Icebreakers',
            },
        ],
    },
    {
        id: 4,
        dow: 'Saturday',
        date: '1/22',
        events: [
            {
                title: 'Pre-event Social',
                start: '10:00',
                end: '10:30',
            },
            {
                title: 'Opening Ceremony',
                start: '10:30',
                end: '11:30',
                presenter: 'Telle Whitney',
            },
            {
                title: 'Build a Discord Bot',
                start: '11:30',
                end: '12:30',
            },
            {
                title: 'Preparing for SWE Interviews',
                start: '12:30',
                end: '13:30',
            },
            {
                title: 'Intro to iOS Development',
                start: '13:30',
                end: '14:30',
            },
            {
                title: 'Intro to Game Development',
                start: '15:00',
                end: '16:00',
            },
            {
                title: 'Women in Tech Panel',
                start: '16:00',
                end: '17:00',
                presenter: 'Vidya Srinivavasan, Tenay Barker',
            },
            {
                title: 'Network with Women in Technology',
                start: '17:00',
                end: '17:30',
            },
            {
                title: 'Game Hour',
                start: '17:30',
                end: '18:30',
            },

        ],
    },
    {
        id: 5,
        dow: 'Sunday',
        date: '1/23',
        events: [
            {
                title: 'How to Pitch your Hack',
                start: '10:00',
                end: '11:00',
                presenter: 'Serena Huynh',
            },
            {
                title: 'Intro to AI/ML',
                start: '11:00',
                end: '11:30',
                presenter: 'Gloria Chang',
            },
            {
                title: 'Standing Out in College Admissions as a Woman in STEM',
                start: '11:30',
                end: '12:00',
                presenter: 'Vivian Wang',
            },
            {
                title: 'Submit Projects',
                start: '12:00',
                end: '12:30',
            },
            {
                title: 'Intersections of Technology Panel',
                start: '12:30',
                end: '13:30',
            },
            {
                title: 'Judging',
                start: '13:30',
                end: '15:30',
            },
            {
                title: 'Games',
                start: '15:00',
                end: '15:30',
            },
            {
                title: 'Closing Ceremony',
                start: '16:00',
                end: '17:00',
                presenter: 'Harpreet Kaur',
            },
        ],
    },
];
export const socialMediaHandles = [
    { link: 'https://www.instagram.com/star.hacks/', icon: faInstagram },
    { link: 'https://www.linkedin.com/company/starhacks/', icon: faLinkedinIn },
    // { link: 'https://docs.google.com/forms/d/e/1FAIpQLSeot7AyQg_SA177nDt7J37wdxcZxSE8RStnHd6zWdUJYnYrnQ/viewform', icon: faMailchimp },
    { link: 'https://starhacks.medium.com', icon: faMediumM },
    { link: 'mailto:hello@starhacks.tech', icon: faEnvelope },
    { link: 'https://discord.com/invite/sqmX6wBHTH', icon: faDiscord },
    // { link: 'https://discord.com/invite/sqmX6wBHTH', icon: faTwitter },
];
export const teamMembers = [
    {
        name: 'Avighna Suresh',
        img: avighna,
        role: 'Lead Director',
    },
    {
        name: 'Camilla Djamalov',
        img: camilla,
        role: 'Director of Operations',
    },
    {
        name: 'Lucy Hao',
        img: lucy,
        role: 'Director of Outreach and Technology',
    },
    {
        name: 'Serena Huynh',
        img: serena,
        role: 'Operations and Technology Officer',
    },
    {
        name: 'Sammi Chen',
        img: sammi,
        role: 'Director of Finance',
    },
    {
        name: 'Hannah Kim',
        img: hannah,
        role: 'Finance and Outreach Officer',
    },
    {
        name: 'Elisa Cruz',
        img: elisa,
        role: 'Finance and Operations Officer',
    },
];

export const registerLink = `https://www.eventbrite.com/e/starhacks-ii-all-female-and-nonbinary-virtual-and-global-hackathon-tickets-167198468119`;

export const rolesDescriptions = [
    {
        role: 'Speaker',
        desc: `Interested in speaking at StarHacks II?
         Apply to present a 1 hour workshop at StarHacks II here!
          You can apply to present a workshop chosen by StarHacks II
           or create one of your own design. Speakers must be over 18
            years old, may be of any gender identity, and must be
             experienced in their workshop topic.`,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSeFNY5PwlRbBKsR1LmBvgnO6T8yDpngvAQJKYZAogzvykB49w/viewform',
    },
    {
        role: 'Hacker',
        desc: `Whether you've never attended a hackathon
         or attend one weekly, StarHacks is the place for you!
          Join us for a beginner-friendly, excitement-packed weekend
           of community and exploration. Hackers must identify
            as female or nonbinary and must be in middle school,
             high school, or college.`,
        link: registerLink,
    },
    {
        role: 'Mentor',
        desc:
      `Want to help and inspire the next generation
             of female and nonbinary coders? Be a mentor or
              judge at StarHacks! Mentors and judges must be
               over 18 years of age, proficient in at least
                1 programming language, of any gender identity,
                 and passionate about spreading their love for coding.`,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSfFM1ts61enbhwBbMS0sF9Hb_QwQyacA0j4VGmkxhC6oI_vvw/viewform',
    },
];

export const anecdotesList = [];

export const faqList = [
    {
        q: 'Who can attend StarHacks II?',
        a: 'Anyone who identifies as female or non-binary and is of high school or college/university age can register for the prehackathon and hackathon.',
    },
    {
        q: 'Do you need to know how to code?',
        a: 'Nope! In fact, over 30% of our hackers in StarHacks I never coded before! Attend our pre-hackathon to learn some basic coding skills!',
    },
    {
        q: 'Do I need to submit a project?',
        a: 'Nope! You can just come for the workshops.',
    },
    {
        q: 'My question is not listed',
        a: 'Email us at hello@starhacks.tech',
    },
];

export const sponsors = [
    {
        title: 'Balsamiq',
        logo: balsamiq,
        link: 'https://balsamiq.com/',
    },
    {
        title: 'GitHub',
        logo: github,
        link: 'https://github.com/',
    },
    {
        title: 'Stickermule',
        logo: stickermule,
        link: 'https://www.stickermule.com/',
    },
    {
        title: 'Major League Hacking',
        logo: mlh,
        link: 'https://mlh.io/',
    },
];

export const milestones_ = [
    {
        name: 'REGISTRANTS',
        stat: 873,
    },
    {
        name: 'FIRST TIME HACKERS',
        stat: '74%',
    },
    {
        name: 'PROJECTS',
        stat: 44,
    },
    {
        name: 'COUNTRIES',
        stat: 23,
    },
];

export const speakers = [
    {
        name: 'Telle Whitney',
        desc: 'Telle Whitney is the former CEO and President of the Anita Borg Institute for Women and Technology. A computer scientist by training, she cofounded the Grace Hopper Celebration of Women in Computing with Anita Borg in 1994 and joined the Anita Borg Institute in 2002.',
        img: telle,
        type: 'keynote speaker',
    },
    {
        name: 'Vidya Srinivasan',
        desc: 'Vidya is a Senior Product Manager at Facebook working on Messenger and Instagram Direct. She loves building products and has filed 21 patents for her work so far! She is also a trained Indian classical singer and the General Chair of the 2019, 2020 and 2021 Grace Hopper Conference.',
        img: vidya,
        type: 'panelist',
    },
    {
        name: 'Ifueko Igbinedion',
        desc: 'Ifueko is currently pursuring a PhD in EECS from MIT. In the past, she has worked at various organizations including IBM, Google, and Lincoln Laboratory. She is also the co-founder and CTO of Hairtelligence, where computer vision is used to size and customize lace wigs for women.',
        img: ifueko,
        type: 'workshop host',
    },
    {
        name: 'Harpreet Kaur',
        desc: 'Harpreet is a Global Product/Technical Engineering Program Leader of Cloud & AI at Microsoft.',
        img: harpreet,
        type: 'keynote speaker',
    },
    {
        name: 'Vivian Wang',
        desc: 'Vivian is an avid journalist, social entrepreneur, and computer scientist studying at Stanford University. She is also the Founder and President of Linens N Love. She enjoys exploring interdisciplinary areas of study to catalyze change through technology and storytelling.        ',
        img: vivian,
        type: 'workshop host',
    },
    {
        name: 'Serena Huynh',
        desc: 'Serena is a second-year student at the University of Southern California, majoring in Computer Science. She has previously interned at AT&T on the Chief Technology and Information Team to work on Mobile App Development and Test Driven Development.',
        img: serena,
        type: 'workshop host',
    },
    {
        name: 'Gloria Chang',
        desc: 'Gloria is an undergraduate at the University of Southern California studying Computer Science with interests in journalism and sustainability. She has interned at Facebook as an AI Research TPM.',
        img: gloria,
        type: 'workshop host',
    },
    {
        name: 'Tenay Barker',
        desc: 'Tenay is a Site Reliability Engineer at Microsoft. She strives to bring diversity to the Tech industry to show women, girls, and non-binary folx of all ages that no matter what background, ethnicity, gender, orientation, or race, they can accomplish anything they want to.',
        img: tenay,
        type: 'panelist',
    },
    {
        name: 'Fatima Taj',
        desc: 'Fatima Taj, is a Software Engineer at Yelp. She did her undergraduate from the University of Waterloo, Canada and after graduating, she worked as a Software Developer at DRW, a Chicago based trading firm. Currently, she\'s also doing a Masters in Data Science from HEC Montreal. ',
        img: fatima,
        type: 'workshop host',
    },
    {
        name: 'Deepti Gupta',
        desc: 'Deepti Gupta is an Assistant Professor in the Department of Computer Science at Huston-Tillotson University, Austin. She is a team member of IEEE ComSoc Young Professionals, AnitaB.org, and also co-chair of the N2 Women fellowship. ',
        img: deepti,
        type: 'panelist',
    },
    {
        name: 'Caeley Looney',
        desc: 'Caeley Mission Analyst at L3Harris Technologies and Founder and Editor in Chief of 501(c)(3) nonprofit Reinvented Magazine. Her goal is to empower and inspire young womxn to pursue their passions in science, technology, engineering, and mathematics.',
        img: caeley,
        type: 'panelist',
    },
    {
        name: 'Benis Tambe',
        desc: 'Bio to come!',
        img: benis,
        type: 'workshop host',
    },
];
