/* eslint-disable max-len */
/* eslint-disable no-irregular-whitespace */
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
import celonis from './assets/logos/celonis.png';
import outschool from './assets/logos/outschool.png';

import telle from './assets/speakers/telle.png';
import vidya from './assets/speakers/vidya.png';
import ifueko from './assets/speakers/ifueko.png';
import harpreet from './assets/speakers/harpreet.png';
import tenay from './assets/speakers/tenay.png';
import gloria from './assets/speakers/gloria.png';
import fatima from './assets/speakers/fatima.png';
import deepti from './assets/speakers/deepti.png';
import caeley from './assets/speakers/caeley.png';
import benis from './assets/speakers/benis.png';
import skyler from './assets/speakers/skyler.png';
import trayln from './assets/speakers/tralyn.png';
import rachel from './assets/speakers/rachel.png';
import trishala from './assets/speakers/trishala.png';

export const sponsorDoc = prospectus;
export const milestonesDoc = report;
export const aboutPhoto = aboutAsset;
export const landingPhoto = landingAsset;
export const date = 'January 22-23, 2022 | Virtual';
export const socialMediaHandles = [
  { link: 'https://www.instagram.com/star.hacks/', icon: faInstagram },
  { link: 'https://www.linkedin.com/company/starhacks/', icon: faLinkedinIn },
  { link: 'https://starhacks.medium.com', icon: faMediumM },
  { link: 'mailto:hello@starhacks.tech', icon: faEnvelope },
  { link: 'https://discord.com/invite/sqmX6wBHTH', icon: faDiscord },
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
 of female and nonbinary coders? Be a mentor
 at StarHacks! Mentors must be
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
  {
    q: 'What is a hackathon?',
    a: 'A hackathon is an event where individuals come together to build projects, attend workshops, play fun games, network, and more!',
  },
  {
    q: 'Who can participate?',
    a: 'Those who identify as women, non-binary, or any other gender minority, that are in middle school, high school, university, or recently graduated.',
  },
  {
    q: 'What should I bring?',
    a: 'All you need is a working device, internet connection, and some yummy snacks!',
  },
  {
    q: 'Do I need a team?',
    a: 'You are welcome to solo hack, but if you’re looking for a team, StarHacks II will have many opportunities for team formation where you will be put in a team with other excited hackers!',
  },
  {
    q: 'Do I need to stay for the entire hackathon?',
    a: 'Not at all! Stay for as long as you wish',
  },
  {
    q: 'Is StarHacks II free?',
    a: 'Yup!',
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
  {
    title: 'Celonis',
    logo: celonis,
    link: 'https://www.celonis.com/',
  },
  {
    title: 'Outschool',
    logo: outschool,
    link: 'https://outschool.com/',
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
    desc: `Telle Whitney is the former CEO and President of the Anita Borg
 Institute for Women and Technology. A computer scientist by training,
 she cofounded the Grace Hopper Celebration of Women in Computing with
 Anita Borg in 1994 and joined the Anita Borg Institute in 2002.`,
    img: telle,
    type: 'keynote speaker',
  },
  {
    name: 'Vidya Srinivasan',
    desc: `Vidya is a Senior Product Manager at Facebook working on Messenger
 and Instagram Direct. She loves building products and has filed 21 patents
 for her work so far! She is also a trained Indian classical singer and the General
 Chair of the 2019, 2020 and 2021 Grace Hopper Conference.`,
    img: vidya,
    type: 'women in tech panelist',
  },
  {
    name: 'Ifueko Igbinedion',
    desc: `Ifueko is currently pursuring a PhD in EECS from MIT.
 In the past, she has worked at various organizations including IBM, Google,
 and Lincoln Laboratory. She is also the co-founder
 and CTO of Hairtelligence, where computer vision is used to size and customize lace wigs for women.`,
    img: ifueko,
    type: 'workshop host',
  },
  {
    name: 'Harpreet Kaur',
    desc: `Harpreet Kaur is a 1st generation Global Technical Program/Product
 Leader at Microsoft with ~20 yrs. of proven track record
 of leading business and digital transformation, managing
 teams, and shipping high-quality products and solutions.
 In her free time, she loves to show her life learnings through abstract art. `,
    img: harpreet,
    type: 'keynote speaker',
  },
  {
    name: 'Serena Huynh',
    desc: `Serena is a second-year student at the University of Southern California, majoring in Computer Science.
 She has previously interned at AT&T on the Chief Technology
 and Information Team to work on Mobile App Development and Test Driven Development.`,
    img: serena,
    type: 'workshop host',
  },
  {
    name: 'Gloria Chang',
    desc: `Gloria is an undergraduate at the University of Southern California
 studying Computer Science with interests in journalism and sustainability.
 She has interned at Facebook as an AI Research TPM.`,
    img: gloria,
    type: 'workshop host',
  },
  {
    name: 'Tenay Barker',
    desc: `Tenay is a Site Reliability Engineer at Microsoft. She strives
 to bring diversity to the Tech industry to show women, girls, and non-binary folx
 of all ages that no matter what background, ethnicity, gender, orientation,
 or race, they can accomplish anything they want to.`,
    img: tenay,
    type: 'women in tech panelist',
  },
  {
    name: 'Fatima Taj',
    desc: `Fatima Taj, is a Software Engineer at Yelp.
 She did her undergraduate from the University of Waterloo,
 Canada and after graduating, she worked as a Software Developer at DRW,
 a Chicago based trading firm. Currently, she\'s also doing a Masters in
 Data Science from HEC Montreal.`,
    img: fatima,
    type: 'workshop host',
  },
  {
    name: 'Deepti Gupta',
    desc: `Deepti Gupta is an Assistant Professor in the Department of Computer Science
 at Huston-Tillotson University, Austin. She is a team member of IEEE ComSoc Young
 Professionals, AnitaB.org, and also co-chair of the N2 Women fellowship.`,
    img: deepti,
    type: 'women in tech panelist',
  },
  {
    name: 'Caeley Looney',
    desc: `Caeley is a Mission Analyst at L3Harris Technologies and Founder and Editor
 in Chief of 501(c)(3) nonprofit Reinvented Magazine. Her goal is to empower and
 inspire young womxn to pursue their passions in science, technology, engineering, and mathematics.`,
    img: caeley,
    type: 'women in tech panelist',
  },
  {
    name: 'Benis Tambe',
    desc: `Benis is a Computer Science Junior at University of Maryland, College Park.
 She has worked in the tech industry for about two years as a User
 Interface developer and enjoys building fun web apps in her spare time.`,
    img: benis,
    type: 'workshop host',
  },
  {
    name: 'Skyler Basco',
    desc: `Skyler is a Computer Science student at Queens College passionate about
 AR, VR, and 3D. She is an incoming Software Engineering intern at Bitly and the
 Founder at Friends of XR, which is building a platform to empower the next generation
 of extended reality creators.`,
    img: skyler,
    type: 'workshop host',
  },
  {
    name: 'Trayln Le',
    desc: `Tralyn is a Senior Game Developer at AppLovin and computer science graduate
 student at the University of Illinois-Springfield. She enjoys programming games
 and 3D modeling. She has worked at Konami and Scientific Games.`,
    img: trayln,
    type: 'workshop host',
  },
  {
    name: 'Rachel Ombok',
    desc: `Rachel is currently in her senior year at New York University, majoring in
 Computer Science and minoring in Game Engineering. This past summer, she interned
 at Twitter as a Software Engineering Intern, and this upcoming summer she will be
 returning for a full-time Software Engineer position!`,
    img: rachel,
    type: 'workshop host',
  },
  {
    name: 'Trishala Jain',
    desc: `Trishala Jain is a freshman at UC Berkeley's MET program who's pursuing a dual degree
    in Electrical Engineering & Computer Science (EECS) and Business Administration.
    She has interned with NASA and Technovation, and is passionate about social entrepreneurship.`,
    img: trishala,
    type: 'tech intersection panelist',
  },
  {
    name: 'Lucy Hao',
    desc: 'Lucy is currently studying Computer Science and Biochemistry at the University of British Columbia. She has interned at a biotech organization working on applying NLP models and text mining to surgical reports, and built a proof of concept developer tool at Microsoft.',
    img: lucy,
    type: 'tech intersection panelist',
  },
];

