import {
    faDiscord,
    faInstagram,
    faLinkedin,
    // faMailchimp,
    faMedium,
    // faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import lucy from './assets/lucy_.png';
import serena from './assets/serena.png';
import camilla from './assets/camilla.png';
import sammi from './assets/sammi.png';
import avighna from './assets/avighna.png';
import planet from './assets/planet.png';

export const aboutPhoto = planet;
export const subscribeToOurNewsletter = 'Subscribe to our newsletter';
export const starhacks = 'STARHACKS';
export const about = 'ABOUT US';
export const team = 'TEAM';
export const contact = 'CONTACT US';
export const roles = 'ROLES';
export const events = 'EVENTS';
export const anecdotes = 'ANECDOTES';
export const sponsors = 'SPONSORS';
export const schedule = 'SCHEDULE';
export const commonlyAskedQuestions = 'FAQ';
export const date = 'VIRTUAL | JAN 2022';
export const hackathonSchedule = [
    {
        id: 1,
        title: 'Saturday, Jan 22',
        events: [
            { title: 'PRE-EVENT SOCIAL', time: '10:00 AM  -  10:30 AM' },
            { title: 'OPENING CEREMONY', time: '10:30 AM  -  11:30 AM' },
            { title: 'BUILD A DISCORD BOT', time: '11:30 AM  -  12:30 AM' },
            { title: 'INTERNS PANEL', time: '12:30 PM  -  1:30 PM' },
            { title: 'INTRO TO IOS DEVELOPMENT', time: '1:30 AM  -  2:30 AM' },
            { title: 'INTRO TO GAME DEV', time: '3:00 PM  -  4:00 PM' },
            { title: 'WOMEN IN TECH PANEL', time: '4:00 PM  -  5:00 PM' },
            {
                title: 'NETWORK WITH WOMEN IN TECH',
                time: '5:00 PM  -  5:30 PM',
            },
            { title: 'GAME HOUR', time: '5:30 PM  -  6:30 PM' },

        ],
    },
    {
        id: 2,
        title: 'Sunday, Jan 23',
        events: [
            { title: 'HOW TO PITCH YOUR HACK', time: '10:00 AM  -  11:00 AM' },
            { title: 'INTRO TO AI/ML', time: '11:00 AM  -  11:30 AM' },
            { title: 'TBA', time: '11:30 PM  -  12:00 AM' },
            { title: 'SUBMIT PROJECTS', time: '12:00 PM  -  12:30 PM' },
            {
                title: 'INTERSECTIONS OF TECH PANEL',
                time: '12:30 PM  -  1:30 PM',
            },
            { title: 'JUDGING', time: '1:30 PM  -  3:30 PM' },
            { title: 'GAMES', time: '3:00 PM  -  3:30 PM' },
            { title: 'CLOSING CEREMONY', time: '4:00 PM  -  5:00 PM' },
        ],
    },
];
export const socialMediaHandles = [
    { link: 'https://www.instagram.com/star.hacks/', icon: faInstagram },
    { link: 'https://www.linkedin.com/company/starhacks/', icon: faLinkedin },
    // { link: 'https://docs.google.com/forms/d/e/1FAIpQLSeot7AyQg_SA177nDt7J37wdxcZxSE8RStnHd6zWdUJYnYrnQ/viewform', icon: faMailchimp },
    { link: 'https://starhacks.medium.com', icon: faMedium },
    { link: 'mailto:hello@starhacks.tech', icon: faEnvelope },
    { link: 'https://discord.com/invite/sqmX6wBHTH', icon: faDiscord },
    // { link: 'https://discord.com/invite/sqmX6wBHTH', icon: faTwitter },
];
export const teamMembers = [
    {
        name: 'Avighna',
        img: avighna,
        role: 'Lead Director',
    },
    {
        name: 'Camilla',
        img: camilla,
        role: 'Director of Operations',
    },
    {
        name: 'Lucy',
        img: lucy,
        role: 'Director of Outreach and Technology',
    },
    {
        name: 'Serena Huynh',
        img: serena,
        role: 'Operations Officier',
    },
    {
        name: 'Clarise Liu',
        role: 'Outreach Officier',
    },
    {
        name: 'Sammi Chen',
        img: sammi,
        role: 'Director of Finance',
    },
    {
        name: 'Deanna Wood',
        role: 'Operations Officier',
    },
    {
        name: 'Hannah Kim',
        role: 'Finance Officier',
    },
];

export const rolesDescriptions = [
    {
        role: 'Speaker',
        desc: `StarHacks is looking for speakers 
        to present workshops at StarHacks II!
         Each workshop will be 1 hour long.
         If you are interested in being a speaker, 
         you may choose a workshop from our list or propose a workshop of your
          own design.
          Speakers can be of any gender 
          identity and must be of high school age.`,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSeFNY5PwlRbBKsR1LmBvgnO6T8yDpngvAQJKYZAogzvykB49w/viewform',
    },
    {
        role: 'Hacker',
        desc: `Hackers of any experience level
         are welcome to participate at StarHacks.
        No prior coding experience is needed
         and you don\'t even need to submit a project!
         Come attend some workshops, meet new 
         friends and network with industry professionals.`,
        link: 'https://www.eventbrite.com/e/starhacks-ii-all-female-and-nonbinary-virtual-and-global-hackathon-tickets-167198468119',
    },
    {
        role: 'Mentor or Judge',
        desc: [
            `As a mentor, you will have the opportunity to 
    connect with and inspire beginner coders. 
    Mentors will be able to help hackers with 
    their projects through Discord.`,

            `As a judge, 
    you will have the opportunity
     to judge hackers' projects. Each judge will score 5 - 10 projects
      and be debriefed on the judging process before 
      the hackathon. Judges can be of any gender identity.
    Both mentors and judges will receive exclusive swag
     as well as a certificate.`],
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSfFM1ts61enbhwBbMS0sF9Hb_QwQyacA0j4VGmkxhC6oI_vvw/viewform',
    },
];
