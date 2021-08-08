import {
    faDiscord,
    faInstagram,
    faLinkedin,
    faMailchimp,
    faMedium,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const subscribeToOurNewsletter = 'Subscribe to our newsletter';
export const starhacks = 'STARHACKS';
export const about = 'ABOUT US';
export const team = 'TEAM';
export const contact = 'CONTACT US';
export const events = 'EVENTS';
export const anecdotes = 'ANECDOTES';
export const sponsors = 'SPONSORS';
export const schedule = 'SCHEDULE';
export const commonlyAskedQuestions = 'FAQ';
export const date = 'VIRTUAL | JAN 2022';
export const upcomingEvents = {};
export const previousEvents = {};
export const questionsAndAnswer = {};
export const teamMembers = {};
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
    { link: 'https://docs.google.com/forms/d/e/1FAIpQLSeot7AyQg_SA177nDt7J37wdxcZxSE8RStnHd6zWdUJYnYrnQ/viewform', icon: faMailchimp },
    { link: 'https://starhacks.medium.com', icon: faMedium },
    { link: 'mailto:avighna@starhacks.tech', icon: faEnvelope },
    { link: 'https://discord.com/invite/sqmX6wBHTH', icon: faDiscord },
    { link: 'https://discord.com/invite/sqmX6wBHTH', icon: faTwitter },
];
