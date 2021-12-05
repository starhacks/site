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

import telle from './assets/speakers/telle.png';
import vidya from './assets/speakers/vidya.png';

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
            }, {
                title: 'Basics of Git and GitHub',
            },
        ],
    },
    {
        id: 1,
        dow: 'Saturday',
        date: '1/15',
        events: [
            {
                title: 'Intro to Graphic Design and Figma',
            }, {
                title: 'Hackathon 101 and Icebreakers',
            },
        ],
    },
    {
        id: 2,
        dow: 'Saturday',
        date: '1/22',
        events: [
            {
                title: 'Pre-event Social',
                start: '10:00 AM',
                end: '10:30 AM',
            },
            {
                title: 'Opening Ceremony',
                start: '10:30 AM',
                end: '11:30 AM',
            },
            {
                title: 'Build a Discord Bot',
                start: '11:30 AM',
                end: '12:30 AM',
            },
            {
                title: 'Interns Panel',
                start: '12:30 PM',
                end: '1:30 PM',
            },
            {
                title: 'Intro to iOS Development',
                start: '1:30 PM',
                end: '2:30 PM',
            },
            {
                title: 'Intro to Game Development',
                start: '3:00 PM',
                end: '4:00 PM',
            },
            {
                title: 'Women in Tech Panel',
                start: '4:00 PM',
                end: '5:00 PM',
            },
            {
                title: 'Network with Women in Technology',
                start: '5:00 PM',
                end: '5:30 PM',
            },
            {
                title: 'Game Hour',
                start: '5:30 PM',
                end: '6:30 PM',
            },

        ],
    },
    {
        id: 3,
        dow: 'Sunday',
        date: '1/23',
        events: [
            {
                title: 'How to Pitch your Hack',
                start: '10:00 AM',
                end: '11:00 AM',
            },
            {
                title: 'Intro to AI/ML',
                start: '11:00 AM',
                end: '11:30 AM',
            },
            {
                title: 'TBD',
                start: '11:30 PM',
                end: '12:00 AM',
            },
            {
                title: 'Submit Projects',
                start: '12:00 PM',
                end: '12:30 PM',
            },
            {
                title: 'Intersections of Technology Panel',
                start: '12:30 PM',
                end: '1:30 PM',
            },
            {
                title: 'Judging',
                start: '1:30 PM',
                end: '3:30 PM',
            },
            {
                title: 'Games',
                start: '3:00 PM',
                end: '3:30 PM',
            },
            {
                title: 'Closing Ceremony',
                start: '4:00 PM',
                end: '5:00 PM',
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
        a: 'Anyone who identifies as female or non-binary and is of high school or college/university age.',
    },
    {
        q: 'Do you need to know how to code?',
        a: 'Nope! In fact, over 30% of our hackers in StarHacks I never coded before! If you want to prepare for the hackathon, you can attend our pre-hackathon!',
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
    },
    {
        name: 'VIDYA SRINIVASAN',
        desc: 'Product Manager at Facebook & Instagram, General Chair of #vGHC21, Speaker and Singer. Vidya Srinivasan has faced the challenges of excelling in tech head-on while having children. Now she\'s helping other women do the same.',
        img: vidya,
    },
];
