(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(18),r=a.n(i),n=(a(26),a(27),a(2)),l=a(3),d=a(0),h=function(){return Object(d.jsx)("nav",{id:"page-top",children:Object(d.jsxs)("div",{className:"nav-items",children:[Object(d.jsx)(n.b,{to:"/",className:"fas fa-igloo home"}),Object(d.jsx)("a",{href:"#about-me",children:"About"}),Object(d.jsx)("a",{href:"#contact-me",children:"Contact Me"}),Object(d.jsx)(n.b,{to:"/gallery",children:"View Gallery"})]})})},o=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"decor"}),Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"copyright",children:[Object(d.jsx)("p",{className:"company",children:"Simone Cheah \xa9 Copyright 2020"}),Object(d.jsx)("a",{href:"#page-top",className:"page-top fas fa-chevron-up"})]})})]})},j=a.p+"static/media/portrait.245eec62.jpg",m=a(16),b=a.n(m),p=a(20),u=a(10),g=a(21),f=a.n(g),O=function(){var e=Object(s.useState)("Send"),t=Object(u.a)(e,2),a=t[0],c=t[1],i=function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c("Sending..."),f.a.sendForm("service_1p6pjh4","template_vh5iumn",document.getElementById("contact-form"),"user_0COEWeyhHdeMd90VxJkG0").then((function(){console.log("SUCCESS!"),c("Message Sent!"),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("message").value=""}),(function(e){console.log("FAILED...",e),c("Error! Please email Simone instead.")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{id:"contact-form",onSubmit:i,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{id:"name",type:"text",name:"user_name",placeholder:"John Doe",required:!0}),Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",{id:"email",type:"email",name:"user_email",placeholder:"test@example.com",required:!0}),Object(d.jsx)("label",{htmlFor:"message",children:"Message"}),Object(d.jsx)("textarea",{id:"message",name:"message",rows:"6",required:!0,placeholder:"Please enter your query here"}),Object(d.jsx)("input",{type:"submit",value:a})]})},x=function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{children:[Object(d.jsx)(h,{}),Object(d.jsxs)("ul",{className:"letter",children:[Object(d.jsx)("li",{children:"S"}),Object(d.jsx)("li",{children:"I"}),Object(d.jsx)("li",{children:"M"}),Object(d.jsx)("li",{children:"O"}),Object(d.jsx)("li",{children:"N"}),Object(d.jsx)("li",{children:"E"})]})]}),Object(d.jsxs)("main",{id:"about-me",children:[Object(d.jsx)("h1",{children:"About Me"}),Object(d.jsxs)("div",{className:"main-content",children:[Object(d.jsx)("img",{src:j,alt:"Simone Cheah portrait"}),Object(d.jsxs)("div",{className:"main-text",children:[Object(d.jsx)("p",{children:"Full stack web developer with a Computer Science background educated at Deakin University and a recently earned certificate in full stack web development at Monash University."}),Object(d.jsx)("p",{children:"Skills in JavaScript, Python, HTML5, CSS and responsive web design, and proficiency in IoT, robotics and embedded systems including the Raspberry Pi, Arduino and ROS."}),Object(d.jsx)("p",{children:"My involvement in the World Solar car challenge brought in a fresh perspective in low energy technology with the use of electronic paper and the Raspberry Pi 4 to build a modular car dash."}),Object(d.jsx)("p",{children:"I am passionate about new ideas, problem solving and project development where teamwork, creativity and meticulous work ethic are my strengths. Positioned to leverage my skills in emerging technologies as part of a dedicated team to enhance the user experience on websites and other software platforms."})]})]})]}),Object(d.jsxs)("section",{id:"contact-me",children:[Object(d.jsx)("h1",{children:"Contact Me"}),Object(d.jsx)(O,{}),Object(d.jsxs)("aside",{className:"profile-links",children:[Object(d.jsx)("a",{href:"https://github.com/smcheah",target:"_blank",className:"fab fa-github-square",children:Object(d.jsx)("p",{children:"github"})}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/simone-cheah-13607215b/",target:"_blank",className:"fab fa-linkedin",children:Object(d.jsx)("p",{children:"linkedin"})}),Object(d.jsx)("a",{href:"mailto:simone_cheah@hotmail.com",target:"_blank",className:"fas fa-envelope",children:Object(d.jsx)("p",{children:"email"})}),Object(d.jsx)("a",{href:"tel:+61405525068",target:"_blank",className:"fas fa-phone-square",children:Object(d.jsx)("p",{children:"mobile"})}),Object(d.jsx)("a",{href:"https://drive.google.com/file/d/1x5of5sr_nalQ4RfwGRQ5z2KINPeC0ngq/view?usp=sharing",target:"_blank",className:"fas fa-file",children:Object(d.jsx)("p",{children:"resume"})})]})]}),Object(d.jsx)(o,{})]})},v={"burger-restaurant":{title:"Burger Restaurant",lastUpdated:"08/11/2020",description:"Eat Da Burger! is a restaurant app that lets users input the names of burgers they would like to eat. Submit a burger name to display the burger on the left side of the page -- waiting to be devoured.",planning:"",wireframeImgs:["https://i.imgur.com/mxX1jV5.png"],prototypeImgs:["https://i.imgur.com/0OhcTbP.png"],issues:["could have more detailed side menus","site not accurate to wireframe"],siteImgs:[],siteLink:"https://thawing-cliffs-82345.herokuapp.com/"},"meal-budgeter":{title:"Meal Budgeter",lastUpdated:"22/11/2020",description:"Our application allows users to search for specific recipes and be presented with details about said recipe including ingredients, method, and an image of the finished meal.",planning:"As most people live on a budget we thought that this application could serve to aid in people\u2019s day to day lives especially during the COVID pandemic in which funds are scarce. In particular this was aimed at University students who struggle to come up with cost-effective, and creating meals when living out of home.",wireframeImgs:["https://i.imgur.com/Iw6SRkd.png","https://i.imgur.com/vqO1OkJ.png"],prototypeImgs:["https://media.giphy.com/media/2Hz1zi30Q0Q4dFef7t/giphy.gif","https://media.giphy.com/media/EVbDIZoo0nksWwPaoW/giphy.gif"],issues:["overall website styling","should be responsive","recipe editor is not user friendly","images are not compressed"],siteImgs:[],siteLink:"https://vast-crag-85624.herokuapp.com/"},"team-summary":{title:"Team Summary",lastUpdated:"11/10/2020",description:"A Node CLI that takes in information about employees and generates a HTML webpage that displays a team summary for each person.",planning:"",wireframeImgs:[],prototypeImgs:[],issues:[],siteImgs:["https://camo.githubusercontent.com/9cee8fbbffe273bf38728c9ce0428da2f29bc26af4fc1a149d334be1788dd166/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f396b636d3876527850396a6f4959684e67442f67697068792e676966","https://camo.githubusercontent.com/8eb400b78ab295b02e22d32708820726689534088e0f68b211c414449b47bca0/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f7647554d664876344262613550704943384d2f67697068792e676966"],siteLink:""},BandEaR:{title:"BandEar",lastUpdated:"20/09/2020",description:"Web application that allows users to search various artists, preview their music and see all upcoming events.",planning:"",wireframeImgs:["https://i.imgur.com/wdQ1RW8.png"],prototypeImgs:[],issues:[],siteImgs:["https://raw.githubusercontent.com/smcheah/BandEaR-Project-1/master/Assets/Images/Mockup-190920.png"],siteLink:"https://chrisjmckeown.github.io/BandEaR_Discover_live_artists/"},"code-quiz":{title:"Code Quiz",lastUpdated:"27/09/2020",description:"A timed code quiz with multiple-choice questions on JavaScript fundamentals",planning:"",wireframeImgs:[],prototypeImgs:[],issues:[],siteImgs:["https://camo.githubusercontent.com/3d853aa57f46dddcf060296b0388da9db2d3b20b469b5d5debd345d23acd1579/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f654e6467637471344673765550754f4243412f67697068792e676966"],siteLink:"smcheah.github.io/code-quiz/"},"weather-dashboard":{title:"Weather Dashboard",lastUpdated:"13/09/2020",description:"A weather dashboard that displays the current weather, a 5 day forecast and a side bar search history for convenience.",planning:"",wireframeImgs:["https://i.imgur.com/6eIuz05.png"],prototypeImgs:[],issues:[],siteImgs:["https://raw.githubusercontent.com/smcheah/Weather-Dashboard/master/demo-image.PNG"],siteLink:"https://smcheah.github.io/Weather-Dashboard/"},"bird-facts":{title:"Bird Facts",lastUpdated:"03/11/2019",description:"One page from my edition of CS50's Web Programming with Python and JavaScript: Project #0",planning:"",wireframeImgs:[],prototypeImgs:[],issues:[],siteImgs:["https://camo.githubusercontent.com/cd74d9c1ae7c302fd1444a0fd00de40dd1b2101e76c2eec3e888227155734e24/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4361417a44375672374f447652377934704b2f67697068792e676966","https://camo.githubusercontent.com/198adc084b067ba26d78ec51cdd8bed6c629665c3e9d00269cf8815ba129e12c/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f454d34626446366c665753567a6134614b652f67697068792e676966"],siteLink:"https://smcheah.github.io/project0/birds.html"},"employee-directory":{title:"Employee Directory",lastUpdated:"4/1/2021",description:"View a company's entire employee directory at once so that they have quick access to non-sensitive data about other employees",planning:"",wireframeImgs:["https://i.imgur.com/czXRZHD.png"],prototypeImgs:[],issues:["should have better search functionality where each letter counts in a search for a full name","could have a backend instead of static data"],siteImgs:["https://raw.githubusercontent.com/smcheah/employee-directory/main/public/demo.PNG","https://i.imgur.com/jMuAAf1.png"],siteLink:"https://cocky-ride-50e407.netlify.app"}},y=a(11),k=function(e){var t=e.props;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)("li",{children:e},Object(y.a)(5))}))})},w=function(e){var t=e.props;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:e})},Object(y.a)(5))}))})},N=(a(37),function(){var e=Object(l.f)().detail,t=v[e],a=t.title,s=t.lastUpdated,c=t.description,i=t.planning,r=t.wireframeImgs,h=t.prototypeImgs,o=t.issues,j=t.siteImgs,m=t.siteLink;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"modal-bg"}),Object(d.jsx)("div",{className:"modal-full",children:Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"header-links",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(n.b,{to:"/gallery",children:"gallery"})," / ",e]}),Object(d.jsx)("div",{children:Object(d.jsx)(n.b,{to:"/gallery",children:Object(d.jsx)("i",{className:"fas fa-times"})})})]}),Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsx)("h1",{children:a}),Object(d.jsxs)("p",{children:["last updated: ",s]}),Object(d.jsx)("h3",{children:"Description"}),Object(d.jsx)("p",{children:c}),i.length>0||r.length>0||h.length>0?Object(d.jsx)("h3",{children:"Design process"}):null,i.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:"Planning / Market research"}),Object(d.jsx)("p",{children:i})]}):null,r.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:"Wireframes"}),Object(d.jsx)("div",{className:"horizontal-scroll",children:Object(d.jsx)("ul",{className:"imagelist",children:Object(d.jsx)(w,{props:r})})})]}):null,h.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h4",{children:"Prototype / Mock up"}),Object(d.jsx)("div",{className:"horizontal-scroll",children:Object(d.jsx)("ul",{className:"imagelist",children:Object(d.jsx)(w,{props:h})})})]}):null,o.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Issues / Future improvements"}),Object(d.jsx)("ul",{children:Object(d.jsx)(k,{props:o})})]}):null,j.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Site images"}),Object(d.jsx)("div",{children:Object(d.jsx)("ul",{className:"imagelist",children:Object(d.jsx)(w,{props:j})})})]}):null,m.length>0?Object(d.jsx)("h3",{children:Object(d.jsx)(n.b,{to:m,children:"view site"})}):null]})]})})]})}),I=a.p+"static/media/burger-restaurant.23b3e083.png",S=a.p+"static/media/meal-budgeter.dc79e780.gif",_=a.p+"static/media/team-summary.0af3138c.gif",M=a.p+"static/media/BandEaR.6781dc83.png",q=a.p+"static/media/code-quiz.e3b45ceb.gif",B=a.p+"static/media/weather-dashboard.dcd0ae89.png",E=a.p+"static/media/bird-facts.789d7678.gif",D=function(){var e=Object(l.g)(),t=e.path,a=e.url,c=Object(s.useState)(!1),i=Object(u.a)(c,2),r=(i[0],i[1]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("nav",{id:"page-top",children:Object(d.jsx)("div",{className:"nav-items",children:Object(d.jsx)(n.b,{to:"/",className:"fas fa-igloo home"})})}),Object(d.jsxs)(n.a,{children:[Object(d.jsx)(l.c,{children:Object(d.jsx)(l.a,{exact:!0,path:"".concat(t,"/:detail"),children:Object(d.jsx)(N,{showModal:function(e){e.preventDefault(),r(!0)},closeModal:function(e){e.preventDefault(),r(!1)}})})}),Object(d.jsxs)("main",{className:"gallery-list",children:[Object(d.jsxs)("div",{className:"gallery-item",children:[Object(d.jsx)("img",{src:I,alt:"burger restaurant interface"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h2",{children:"Burger Restaurant"}),Object(d.jsx)("a",{href:"https://github.com/smcheah/burger-restaurant",className:"fab fa-github-square",target:"_blank"})]}),Object(d.jsx)("p",{children:"Last Updated: 08/11/2020"}),Object(d.jsx)(n.b,{to:"".concat(a,"/burger-restaurant"),children:"More Information"}),Object(d.jsx)("a",{href:"https://thawing-cliffs-82345.herokuapp.com/",target:"_blank",children:"Site link"})]})]}),Object(d.jsxs)("div",{className:"gallery-item",children:[Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/smcheah/employee-directory/main/public/demo.PNG",alt:"employee directory interface"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h2",{children:"Employee Directory"}),Object(d.jsx)("a",{href:"https://github.com/smcheah/employee-directory",className:"fab fa-github-square",target:"_blank"})]}),Object(d.jsx)("p",{children:"Last Updated: 4/1/2021"}),Object(d.jsx)(n.b,{to:"".concat(a,"/employee-directory"),children:"More Information"}),Object(d.jsx)("a",{href:"https://cocky-ride-50e407.netlify.app",target:"_blank",children:"Site link"})]})]}),Object(d.jsxs)("div",{className:"gallery-item",children:[Object(d.jsx)("img",{src:B,alt:"Weather dashboard"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h2",{children:"Weather Dashboard"}),Object(d.jsx)("a",{href:"https://github.com/smcheah/Weather-Dashboard",className:"fab fa-github-square",target:"_blank"})]}),Object(d.jsx)("p",{children:"Last Updated: 13/09/2020"}),Object(d.jsx)(n.b,{to:"".concat(a,"/weather-dashboard"),children:"More Information"}),Object(d.jsx)("a",{href:"https://smcheah.github.io/Weather-Dashboard/",target:"_blank",children:"Site link"})]})]}),Object(d.jsxs)("div",{className:"gallery-item",children:[Object(d.jsx)("img",{src:S,alt:"meal budgeter interface"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h2",{children:"Meal Budgeter"}),Object(d.jsx)("a",{href:"https://github.com/smcheah/Meal-Budgeter-Project-2",className:"fab fa-github-square",target:"_blank"})]}),Object(d.jsx)("p",{children:"Last Updated: 22/11/2020"}),Object(d.jsx)(n.b,{to:"".concat(a,"/meal-budgeter"),children:"More Information"}),Object(d.jsx)("a",{href:"https://vast-crag-85624.herokuapp.com/",target:"_blank",children:"Site link"})]})]}),Object(d.jsxs)("div",{className:"gallery-item",children:[Object(d.jsx)("img",{src:_,alt:"team summary interface"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h2",{children:"Team Summary"}),Object(d.jsx)("a",{href:"https://github.com/smcheah/team-summary-template-engine",className:"fab fa-github-square",target:"_blank"})]}),Object(d.jsx)("p",{children:"Last Updated: 11/10/2020"}),Object(d.jsx)(n.b,{to:"".concat(a,"/team-summary"),children:"More Information"}),Object(d.jsx)("p",{children:"This application works in the terminal"})]})]}),Object(d.jsxs)("div",{className:"gallery-item",children:[Object(d.jsx)("img",{src:M,alt:"band ear interface"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h2",{children:"BandEaR"}),Object(d.jsx)("a",{href:"https://github.com/smcheah/BandEaR-Project-1",className:"fab fa-github-square",target:"_blank"})]}),Object(d.jsx)("p",{children:"Last Updated: 20/09/2020"}),Object(d.jsx)(n.b,{to:"".concat(a,"/BandEaR"),children:"More Information"}),Object(d.jsx)("a",{href:"https://chrisjmckeown.github.io/BandEaR_Discover_live_artists/",target:"_blank",children:"Site link"})]})]}),Object(d.jsxs)("div",{className:"gallery-item",children:[Object(d.jsx)("img",{src:q,alt:"code quiz interface"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h2",{children:"Code Quiz"}),Object(d.jsx)("a",{href:"https://github.com/smcheah/Code-Quiz",className:"fab fa-github-square",target:"_blank"})]}),Object(d.jsx)("p",{children:"Last Updated: 27/09/2020"}),Object(d.jsx)(n.b,{to:"".concat(a,"/code-quiz"),children:"More Information"}),Object(d.jsx)("a",{href:"https://smcheah.github.io/Code-Quiz/",target:"_blank",children:"Site link"})]})]}),Object(d.jsxs)("div",{className:"gallery-item",children:[Object(d.jsx)("img",{src:E,alt:"Bird facts website"}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h2",{children:"Bird Facts"}),Object(d.jsx)("a",{href:"https://github.com/smcheah/project0",className:"fab fa-github-square",target:"_blank"})]}),Object(d.jsx)("p",{children:"Last Updated: 03/11/2019"}),Object(d.jsx)(n.b,{to:"".concat(a,"/bird-facts"),children:"More Information"}),Object(d.jsx)("a",{href:"https://smcheah.github.io/project0/birds.html",target:"_blank",children:"site link"})]})]})]})]}),Object(d.jsx)(o,{})]})};var L=function(){return Object(d.jsx)(n.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/",children:Object(d.jsx)(x,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/gallery",children:Object(d.jsx)(D,{})})]})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(L,{})}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.cbe690c6.chunk.js.map