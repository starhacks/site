(this["webpackJsonpstarhacks-website"]=this["webpackJsonpstarhacks-website"]||[]).push([[0],{23:function(e,t,i){"use strict";i.r(t);i(3);var c=i(2),n=i.n(c),s=i(10),l=i.n(s),r=i(9),a=i(0),j=function(e){return Object(a.jsx)("div",{className:"about",children:Object(a.jsx)("h2",{children:e.title})})},o=function(e){return Object(a.jsx)("div",{className:"anecdotes",children:Object(a.jsx)("h2",{children:e.title})})},d=i(11),u=i(4),O=i(12),b=[{id:1,title:"Saturday, Jan 22",events:[{title:"PRE-EVENT SOCIAL",time:"10:00 AM  -  10:30 AM"},{title:"OPENING CEREMONY",time:"10:30 AM  -  11:30 AM"},{title:"BUILD A DISCORD BOT",time:"11:30 AM  -  12:30 AM"},{title:"INTERNS PANEL",time:"12:30 PM  -  1:30 PM"},{title:"INTRO TO IOS DEVELOPMENT",time:"1:30 AM  -  2:30 AM"},{title:"INTRO TO GAME DEV",time:"3:00 PM  -  4:00 PM"},{title:"WOMEN IN TECH PANEL",time:"4:00 PM  -  5:00 PM"},{title:"NETWORK WITH WOMEN IN TECH",time:"5:00 PM  -  5:30 PM"},{title:"GAME HOUR",time:"5:30 PM  -  6:30 PM"}]},{id:2,title:"Sunday, Jan 23",events:[{title:"HOW TO PITCH YOUR HACK",time:"10:00 AM  -  11:00 AM"},{title:"INTRO TO AI/ML",time:"11:00 AM  -  11:30 AM"},{title:"TBA",time:"11:30 PM  -  12:00 AM"},{title:"SUBMIT PROJECTS",time:"12:00 PM  -  12:30 PM"},{title:"INTERSECTIONS OF TECH PANEL",time:"12:30 PM  -  1:30 PM"},{title:"JUDGING",time:"1:30 PM  -  3:30 PM"},{title:"GAMES",time:"3:00 PM  -  3:30 PM"},{title:"CLOSING CEREMONY",time:"4:00 PM  -  5:00 PM"}]}],h=[{link:"https://www.instagram.com/star.hacks/",icon:u.b},{link:"https://www.linkedin.com/company/starhacks/",icon:u.c},{link:"https://docs.google.com/forms/d/e/1FAIpQLSeot7AyQg_SA177nDt7J37wdxcZxSE8RStnHd6zWdUJYnYrnQ/viewform",icon:u.d},{link:"https://starhacks.medium.com",icon:u.e},{link:"mailto:avighna@starhacks.tech",icon:O.a},{link:"https://discord.com/invite/sqmX6wBHTH",icon:u.a},{link:"https://discord.com/invite/sqmX6wBHTH",icon:u.f}],m=function(e){return Object(a.jsxs)("div",{className:"contact",children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsx)("p",{children:"Reach out to us!"}),Object(a.jsx)("div",{className:"icons",children:h.map((function(e){return Object(a.jsx)("a",{href:e.link,children:Object(a.jsx)(d.a,{icon:e.icon})})}))})]})},x=i(6);var N=function(e){var t=Object(c.useState)(""),i=Object(x.a)(t,2),n=i[0],s=i[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"landing",children:[Object(a.jsx)("h1",{children:e.title}),Object(a.jsx)("p",{children:"VIRTUAL | JAN 2022"}),Object(a.jsx)("p",{children:"Subscribe for updates"}),Object(a.jsxs)("form",{className:"subscribe",onSubmit:function(e){alert("A name was submitted: "+n),e.preventDefault()},children:[Object(a.jsx)("input",{type:"text",value:n,onChange:function(e){return s(e.target.value)}}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]})]})})},v=function(e){return Object(a.jsx)("div",{className:"team",children:Object(a.jsx)("h2",{children:e.title})})},f=function(e){return Object(a.jsx)("div",{className:"questions",children:Object(a.jsx)("h2",{children:e.title})})},M=function(e){return Object(a.jsx)("div",{className:"sponsors",children:Object(a.jsx)("h2",{children:e.title})})},A=function(e){return Object(a.jsx)("a",{href:"#",className:"carousel__arrow carousel__arrow--left",onClick:e.onClick,children:Object(a.jsx)("i",{class:"arrow left"})})},p=function(e){return Object(a.jsx)("a",{href:"#",className:"carousel__arrow carousel__arrow--right",onClick:e.onClick,children:Object(a.jsx)("i",{class:"arrow right"})})},E=function(e){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:e.index===e.activeIndex?"carousel__indicator carousel__indicator--active":"carousel__indicator",onClick:e.onClick})})},T=function(e){return Object(a.jsxs)("li",{className:e.index===e.activeIndex?"carousel__slide carousel__slide--active":"carousel__slide",children:[Object(a.jsx)("h3",{children:e.slide.title}),Object(a.jsxs)("div",{className:"schedule-panel",children:[Object(a.jsxs)("div",{className:"time-event",children:[Object(a.jsx)("p",{className:"bold",children:"Time"}),Object(a.jsx)("p",{className:"bold",children:"Event"})]}),e.slide.events.map((function(e,t){return Object(a.jsxs)("div",{className:"time-event border",children:[Object(a.jsx)("div",{className:"time",children:Object(a.jsx)("p",{children:e.time})}),Object(a.jsx)("div",{className:"event",children:Object(a.jsx)("p",{children:e.title})})]})}))]})]})},S=function(e){var t=Object(c.useState)(0),i=Object(x.a)(t,2),n=i[0],s=i[1];return Object(a.jsxs)("div",{className:"schedule",children:[Object(a.jsx)("h2",{children:e.title}),Object(a.jsxs)("div",{className:"carousel",children:[Object(a.jsx)(A,{onClick:function(t){return function(t){t.preventDefault();var i=n,c=e.slides.length;n<1&&(i=c),--i,s((function(e){return i}))}(t)}}),Object(a.jsx)("ul",{className:"carousel__slides",children:e.slides.map((function(e,t){return Object(a.jsx)(T,{index:t,activeIndex:n,slide:e},t)}))}),Object(a.jsx)(p,{onClick:function(t){return function(t){t.preventDefault();var i=n,c=e.slides.length-1;i===c&&(i=-1),++i,s((function(e){return i}))}(t)}}),Object(a.jsx)("ul",{className:"carousel__indicators",children:e.slides.map((function(e,t){return Object(a.jsx)(E,{index:t,activeIndex:n,isActive:n===t,onClick:function(e){return function(e){return s((function(t){return e}))}(t)}},t)}))})]})]})};var P=function(){return r.a.initialize("G-FSN13RH97N"),r.a.pageview(window.location.pathname+window.location.search),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(N,{title:"STARHACKS"}),Object(a.jsx)(j,{title:"ABOUT US"}),Object(a.jsx)(S,{slides:b,title:"SCHEDULE"}),Object(a.jsx)(o,{title:"ANECDOTES"}),Object(a.jsx)(v,{title:"TEAM"}),Object(a.jsx)(f,{title:"FAQ"}),Object(a.jsx)(M,{title:"SPONSORS"}),Object(a.jsx)(m,{title:"CONTACT US"})]})},C=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;i(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),C()},3:function(e,t,i){}},[[23,1,2]]]);
//# sourceMappingURL=main.33b08738.chunk.js.map