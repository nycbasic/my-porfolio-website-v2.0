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
	  <div class="bio">
        <h1 class="text-secondary">So, what's my story?</h1>
        <p>I previously worked in the Learning & Development space as a eLearning/web developer for a mid-size financial tech company.</p>
        <p>In my previous role, I maintained and redesigned the company's eLearning web application. Improved the overall user experience and learning experience. Generated additional revenue with custom eLearning webpages for company clients.</p> 
            
        <p>Currently working on a project with a non-profit organization to help create a tournament registstration process with tournament results, and scoring using React/Redux, Node, and SQL.</p>
            
        <p>I enjoy helping businesses solve problems with tech and looking for an opportunity to continue to grow as a web developer/software engineering. </p>
        <p>To see what I worked or currently working on please visit my <a href="#portfolio">"Portfolio"</a> section.</p>
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
          <a href="https://post-it-mini-app.onrender.com/" target="_blank">
            <img src="img/project/post-it.png" alt="Post It Project">
          </a>
          <h2 class="text-secondary">Post-It: Mini Node.js/Express.js API Project</h2>
          <p>This was a project was built using Express.js and Node.js. It was a project that I built to get a good foundation on how to build a simple API, how the API connects with a database and how the back-end works. I learned how the front end connects with the back-end using the jQuery library.</p>
        </div>

        <div class="item">
          <a href="https://nycbasic.github.io/financial-calculator/" target="_blank">
            <img src="img/project/financial-calculator.png" alt="Financial Calculator Project">
          </a>
          <h2 class="text-secondary">Financial Calculator: Javascript Mini-Project</h2>
          <p>This project was built utilizing just vanilla Javascript. My friend was using an excel spreadsheet to have this done, so I thought it would be a good idea to use this opportunity to build a simple app with vanilla Javascript to see how much I understood how to manipulate the DOM in the browser.</p>
        </div>

        <div class="item">
          <a href="https://nycbasic.github.io/react-todo-app/" target="_blank">
            <img src="img/project/to-do.png" alt="React To Do List Project">
          </a>
          <h2 class="text-secondary">To-do List: React Mini-Project</h2>
          <p>This project was built using React. This project helped me get a better understanding on the structual hierarchy of components, how to pass state and functions, how to manage state, and how to use props as well as a foundation on best practices.</p>
        </div>

        <div class="item">
          <a href="https://nycbasic.github.io/mini-auth/" target="_blank">
            <img src="img/project/auth.png" alt="Mini User Authentication Project">
          </a>
          <h2 class="text-secondary">Auth Connector: Full Stack Mini App with MERN</h2>
          <p>This project was built using the MERN stack, and for state management Redux. A full custom user authentication project.
        </div>

        <div class="item">
          <a href="https://nycbasic.github.io/project-management-mini-app/" target="_blank">
            <img src="img/project/project-management.png" alt="Project Management Tool Project">
          </a>
          <h2 class="text-secondary">Full Stack Application - Mini Project Management</h2>
          <p>Built this project using the MERN stack, and managing state with Redux. It's a full stack application with full authentication using Auth Connector as the template with a full robust custom API to handle the data for this project.</p>
        </div>

		<div class="item">
          <a href="https://ilearn.intralinks.com" target="_blank">
            <img src="img/project/ilearn.png" alt="project">
          </a>
          <h2 class="text-secondary">Intralinks eLearning Web Application</h2>
          <p>This is the web application I created for the company I previously worked for. I upgraded the website from a basic web application to a SPA and recreated the user experience. The site is also mobile friendly.</p>
        </div>

		<div class="item">
          <a href="https://ilearn.intralinks.com/archives" target="_blank">
            <img src="img/project/faq.png" alt="project">
          </a>
          <h2 class="text-secondary">Intralinks FAQ Webpage</h2>
          <p>This was a company project that required a simple FAQ site, where the clients are able to get the information they need. The site is also mobile friendly.</p>
        </div>

		<div class="item">
          <a href="https://ilearn.intralinks.com/frs" target="_blank">
            <img src="img/project/frs.png" alt="project">
          </a>
          <h2 class="text-secondary">Intralinks Custom eLearning Web Page</h2>
          <p>This was a company project to generate additional revenue by creating a custom eLearning webpage for the Federal Reserve Bank. I created the same eLearning webpage for Bank of America as well. The site is also mobile friendly.</p>
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
