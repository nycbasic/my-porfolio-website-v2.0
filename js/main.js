// select DOM items
const menuButton = document.querySelector(".menu-btn"),
  menu = document.querySelector(".menu"),
  menuNav = document.querySelector(".menu-nav"),
  menuBranding = document.querySelector(".menu-branding"),
  navItems = document.querySelectorAll(".nav-item"),
  navLink = document.querySelectorAll(".nav-link"),
  body = document.getElementById("bg-img"),
  main = document.querySelector(".main");

// functions
function browserBehavior(value, callback) {
  if (value === undefined) {
    dynamicContent.change("home", callback);
  } else {
    dynamicContent.change(value, callback);
  }
}

// Checking IE Version and browser
function getIEVersion() {
  const sAgent = window.navigator.userAgent;
  const Idx = sAgent.indexOf("MSIE");

  // If IE, return version number.
  if (Idx > 0) {
    return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
  }
  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./)) {
    return 11;
  } else {
    return false; //It is not IE
  }
}

// Browser behavior
window.onload = function () {
  let hash = location.hash.split("#")[1];
  if (getIEVersion() > 0) {
    body.innerHTML =
      '<div class="container"><p>Please use the latest version of Chrome/Opera/Firefox/Safari/Edge to view this website. This website no longer supports Internet Explorer.</p></div>';
  } else {
    browserBehavior(hash, () => false);

    window.onpopstate = function () {
      let hash = location.hash.split("#")[1];
      browserBehavior(hash, () => false);
    };

    // Set initial state of menu
    menuButton.addEventListener("click", () => toggleMenu.change());

    // Menu click action
    navLink.forEach((val) => {
      val.onclick = () => {
        navLink.forEach((val) => {
          val.parentElement.className = "nav-item show";
        });
        val.parentElement.className = "nav-item show current";
        dynamicContent.change(val.id, toggleMenu.change());
      };
    });
  }
};

// Dynamic Content Object
const dynamicContent = {
  home: {
    content_id: "home",
    html: `<h1 class="lg-heading">
        Sam
        <span class="text-secondary">Poon</span>
        </h1>
        <h2 class="sm-heading">
          Full Stack Web Developer
        </h2>
        <div class="icons">
          <a href="https://www.linkedin.com/in/sam-p-3642a627" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/nycbasic" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>`,
  },
  about: {
    content_id: "about",
    html: `<h1 class="lg-heading">
        About <span class="text-secondary">Me</span>
      </h1> 
      <div class="about-info">
        <div class="bio-image"></div>ßßßß
          <div class="bio">
            <h1 class="text-secondary">So, what's my story?</h1>ß
            <p>I currently work as a eLearning & web developer for mid-size financial tech company and aspiring to make a career switch to sofware engineering.</p>
            <p>In my current role, I was lucky enough to incorporate my love for coding and provide a value add to my team and the company. I was able to create, build and manage a web application from start to finish. I helped improve the user experience for the company's e-learning environment, while updating and creating new features along the way using the front-end library React.</p> 
            
            <p>I'm also working on a project with a non-profit organization to help create a social network that allows them to manage their tournament registstration process, tournament results, and scoring using React/Redux, Node.js, Redis and SQL for the database.</p>
            
            <p>I'm very passionate helping businesses solve problems and creating innovative product solutions with tech. I'm looking for an opportunity to immerse myself in the field of software engineering. </p>
           
        </div>
      </div>`,
  },

  portfolio: {
    content_id: "portfolio",
    html: `<h1 class="lg-heading">
        My <span class="text-secondary">Portfolio</span>
      </h1>
      <h2 class="sm-heading">
        Take a look at what I've worked on...
      </h2>
      <div class="projects">

        <div class="item">
          <a href="https://obscure-cove-76455.herokuapp.com/" target="_blank">
            <img src="img/project/post-it.png" alt="project">
          </a>
          <h2 class="text-secondary">Post-It: Mini Node.js/Express.js API Project</h2>
          <p>This was a project was built using Express.js and Node.js. It was a project that I built to get a good foundation on how to build a simple API, how the API connects with a database and how the back-end works. I learned how the front end connects with the back-end using the jQuery library.</p>
        </div>

        <div class="item">
          <a href="https://secret-cove-36133.herokuapp.com/index.html" target="_blank">
            <img src="img/project/financial-calculator.png" alt="project">
          </a>
          <h2 class="text-secondary">Financial Calculator: Javascript Mini-Project</h2>
          <p>This project was built utilizing just vanilla Javascript. My friend was using an excel spreadsheet to have this done, so I thought it would be a good idea to use this opportunity to build a simple app with vanilla Javascript to see how much I understood how to manipulate the DOM in the browser.</p>
        </div>

        <div class="item">
          <a href="https://vast-reaches-98077.herokuapp.com/" target="_blank">
            <img src="img/project/simple-counter.png" alt="project">
          </a>
          <h2 class="text-secondary">Simple Counter: React Mini-Project</h2>
          <p>This project was built utilizing just React alone. It was a project to help me get started on learning how to use React to change the DOM using state, components, and how the flow of data flows to diffent sections.</p>
        </div>

        <div class="item">
          <a href="https://nycbasic.github.io/react-todo-app/" target="_blank">
            <img src="img/project/to-do.png" alt="project">
          </a>
          <h2 class="text-secondary">To-do List: React Mini-Project</h2>
          <p>This project was built using React. This project helped me get a better understanding on the structual hierarchy of components, how to pass state and functions, how to manage state, and how to use props as well as a foundation on best practices.</p>
        </div>

        <div class="item">
          <a href="https://boiling-plains-18857.herokuapp.com/" target="_blank">
            <img src="img/project/yelp-camp.png" alt="project">
          </a>
          <h2 class="text-secondary">Yelp Camp: Full Express.js/Node.js Project</h2>
          <p>This project was built following a tutorial using Express.js, Node.js and passport.js for authentication. This app helped me build a solid understanding on how the front-end and back-end communicates and all the moving parts involved with communicating to an API and also how to build a robust API.</p>
        </div>

        <div class="item">
          <a href="https://nycbasic.github.io/mini-auth/" target="_blank">
            <img src="img/project/auth.png" alt="project">
          </a>
          <h2 class="text-secondary">Auth Connector: Full Stack Mini App with MERN</h2>
          <p>This project was built using the MERN stack, and for state management Redux. It was a custom project from start to finish. It really tested me on my front-end skills with React/Redux, and my back-end skills with NODE.JS/MongoDB. I learned alot about the complexities of authentication and the other features in authentication beyond just signing in and out.
        </div>

        <div class="item">
          <a href="" target="_blank">ß
            <img src="img/project/project-management.png" alt="project">
          </a>
          <h2 class="text-secondary">Full Stack Application - Mini Project Management</h2>
          <p>I also built this project using the MERN stack, and managing state with Redux. It's a full stack application with full authentication using Auth Connector as the template. I also built a full robust custom API to handle the data for this project. This projeßct really pushed me to the limits. I learned alot from this project, especially the complexities of all the pieces required for a full robust application. I also learned alot about React life cycles and how important they are in managing state</p>ß
        </div>

      </div>`,
  },

  contact: {
    content_id: "contact",
    html: `<h1 class="lg-heading">
        Contact <span class="text-secondary">Me</span>
      </h1>
      <h2 class="sm-heading">
        You can email me at...
      </h2>
      <div class="boxes">
        <div>
          <span class="text-secondary">
            <i class="fas fa-envelope"></i>
          </span>
          <a href="mailto:samuel.poon@baruchmail.cuny.edu?subject=Nice to meet you!">samuel.poon@baruchmail.cuny.edu</a>
        </div>
      </div>`,
  },

  change: function (value, callback) {
    const { content_id, html } = this[value];
    if (value === "home") {
      body.setAttribute("id", "bg-img");
      main.setAttribute("id", content_id);
      main.innerHTML = html;
      callback;
    } else {
      body.removeAttribute("id");
      main.setAttribute("id", content_id);
      main.innerHTML = html;
      callback;
    }
  },
};

// Toggle Menu Object
const toggleMenu = {
  boolean: false,
  change: function () {
    if (!this.boolean) {
      menuButton.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      setTimeout(() => {
        navItems.forEach((item) => {
          item.classList.add("show");
        });
      }, 450);

      this.boolean = true;
    } else {
      setTimeout(() => {
        menuButton.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        this.boolean = false;
      }, 200);
    }
  },
};

//<h4>My current stack:</h4>
// <ul>
//   <li>Front End:
//     <ul>
//       <li>HTML/CSS</li>
//       <li>jQuery</li>
//       <li>React/Redux</li>
//     </ul>
//   </li>
//   <li>Back-End:
//     <ul>
//       <li>Node.js</li>
//       <li>Express.js</li>
//     </ul>
//   </li>
//   <li>Databases:</li>
//   <ul>
//     <li>MongoDB</li>
//   </ul>
// </ul>
