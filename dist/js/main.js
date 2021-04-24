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
        <div class="bio-image"></div>
          <div class="bio">
            <h1 class="text-secondary">So, what's my story?</h1>
            <p>I currently work as a eLearning & web developer for mid-size financial tech company and aspiring to make a career switch to sofware engineering.</p>
            <p>In my current role, I was lucky enough to incorporate my love for coding and provide a value add to my team and the company. I was able to create, build and manage a web application from start to finish. I helped improve the user experience for the companies e-learning environment, while updating and creating new features along the way using the front-end library React.</p> 
            
            <p>I'm also working on a project with a non-profit organization to help create a social network that allows them to manage their tournament registstration process, tournament results, and scoring using React/Redux, Node.js, Redis and SQL for the database.</p>
            
            <p>I'm very passionate about helping businesses solve problems and creating innovative product solutions with tech and eager to immerse myself in the field of software engineering. </p>
           
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
          <p>This was a project was built using Express.js and Node.js. It was a project to get a good foundation of buidling
            an API and understanding how the back-end works. The front end code used was jQuery.</p>
        </div>

        <div class="item">
          <a href="https://secret-cove-36133.herokuapp.com/index.html" target="_blank">
            <img src="img/project/financial-calculator.png" alt="project">
          </a>
          <h2 class="text-secondary">Financial Calculator: Javascript Mini-Project</h2>
          <p>This project was built utilizing just javascript. My friend was using an excel spreadsheet to have this done, so I thought it would be a good idea to use this opportunity to build a simple app with plain javascript.</p>
        </div>

        <div class="item">
          <a href="https://vast-reaches-98077.herokuapp.com/" target="_blank">
            <img src="img/project/simple-counter.png" alt="project">
          </a>
          <h2 class="text-secondary">Simple Counter: React Mini-Project</h2>
          <p>This project was built utilizing just React alone. It was a project to get started on learning how to utilize
            states to change the DOM.</p>
        </div>

        <div class="item">
          <a href="https://nycbasic.github.io/react-todo-app/" target="_blank">
            <img src="img/project/to-do.png" alt="project">
          </a>
          <h2 class="text-secondary">To-do List: React Mini-Project</h2>
          <p>This project was built using React alone. This project was made to get a better understand on using a parent component to pass state and functions via props.</p>
        </div>

        <div class="item">
          <a href="https://boiling-plains-18857.herokuapp.com/" target="_blank">
            <img src="img/project/yelp-camp.png" alt="project">
          </a>
          <h2 class="text-secondary">Yelp Camp: Full Express.js/Node.js Project</h2>
          <p>This project was built following a tutorial using Express.js, Node.js and passport.js for authentication. This app helped build a solid understanding on how the front-end and back-end communicates and all the moving parts involved with routing.</p>
        </div>

        <div class="item">
          <a href="https://nycbasic.github.io/mini-auth/" target="_blank">
            <img src="img/project/auth.png" alt="project">
          </a>
          <h2 class="text-secondary">Auth Connector: Full Stack Mini App with MERN</h2>
          <p>This project was built using the MERN stack, and helped build a solid foundation for authentication and connecting the back-end with a front end framework. This project also helped template the authentication process to be used in future apps.</p>
        </div>

        <div class="item">
          <a href="" target="_blank">
            <img src="img/project/project-management.png" alt="project">
          </a>
          <h2 class="text-secondary">Full Stack Application - Mini Project Management</h2>
          <p>This project was built using the MERN stack using the previous auth connector application for authentication and building out an API for the other needed data to persist.</p>
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
