// select DOM items
const menuButton = document.querySelector(".menu-btn"),
  menu = document.querySelector(".menu"),
  menuNav = document.querySelector(".menu-nav"),
  menuBranding = document.querySelector(".menu-branding"),
  navItems = document.querySelectorAll(".nav-item"),
  navLink = document.querySelectorAll(".nav-link"),
  body = document.getElementById("bg-img"),
  main = document.querySelector(".main");

// Set initial state of menu
menuButton.addEventListener("click", () => toggleMenu.change());

// Menu click action
navLink.forEach((val, i) => {
  val.onclick = () => {
    navLink.forEach(val => {
      val.parentElement.className = "nav-item show";
    });
    val.parentElement.className = "nav-item show current";
    dynamicContent.change(val.id, toggleMenu.change());
  };
});

// Dynamic Content Object
const dynamicContent = {
  home: {
    content_id: "home",
    html: `<h1 class="lg-heading">
        Sam
        <span class="text-secondary">Poon</span>
        </h1>
        <h2 class="sm-heading">
          Jr. Full Stack Web Developer & eLearning Developer
        </h2>
        <div class="icons">
          <a href="https://www.linkedin.com/in/sam-p-3642a627" target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/nycbasic" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>`
  },
  about: {
    content_id: "about",
    html: `<h1 class="lg-heading">
        About <span class="text-secondary">Me</span>
      </h1>
      <h2 class="sm-heading">
        Let me introduce myself....
      </h2>
      <div class="about-info">
        <div class="bio-image"></div>
          <div class="bio">
            <h1 class="text-secondary">ASPIRING SOFTWARE DEVELOPER IN THE MAKING...</h1>
            <h3>So...what's my story?</h3>
            <p>Hi, I'm Sam!</p>
            <p>I’m a New York native who has lived in NYC all my life. I cannot see myself anywhere else but the greatest
            city in the world! You know what they say, once you live somewhere long enough it becomes you!</p>
            <p>I’ve always had a passion for technology and found my love for coding during my high school years. I loved
            it so much that I would play hooky from school just so that I could stay home and build programs using
            Visual Basic and C++.</p>
            <p>Eventually all those days and nights coding came to an end. I wanted a life as a regular teen to just hang
            with friends and meet people. So, I did the unthinkable and broke up with the world of coding and technology.</p>
            <p>After exploring many different career paths I was not passionate about, I realized I never should've hung
            up my coding shoes. There was always a place in my heart for technology and coding. I never should’ve
            left in the first place.</p>
            <p>Fast forward to today, I am currently a Junior Full Stack Developer and aspiring to make it as a Software
            Developer.</p>
            <h4>My current stack:</h4>
            <ul>
              <li>Front End:
                <ul>
                  <li>HTML/CSS</li>
                  <li>jQuery</li>
                  <li>React/Redux</li>
                </ul>
              </li>
              <li>Back-End:
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </li>
              <li>Databases:</li>
              <ul>
                <li>MongoDB</li>
              </ul>
            </ul>
            <p>It was a long journey coming back to coding/programming and I now cannot see myself doing anything else in
            the world but this for the rest of my life. Ok maybe I'm over exaggerating, but I really can see myself
            doing this until I'm old and wrinkly.</p>
            <br />
        </div>
      </div>`
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

      </div>`
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
      </div>`
  },

  change: function(value, callback) {
    if (value === "home") {
      body.setAttribute("id", "bg-img");
      main.setAttribute("id", this.home.content_id);
      main.innerHTML = this.home.html;
      callback;
    } else {
      body.removeAttribute("id");
      main.setAttribute("id", this[value].content_id);
      main.innerHTML = this[value].html;
      callback;
    }
  }
};

// Toggle Menu Object
const toggleMenu = {
  boolean: false,
  change: function() {
    if (!this.boolean) {
      menuButton.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      setTimeout(() => {
        navItems.forEach(item => {
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
        navItems.forEach(item => item.classList.remove("show"));

        this.boolean = false;
      }, 200);
    }
  }
};

// Browser behavior
window.onload = function() {
  let hash = location.hash.split("#")[1];
  if (getIEVersion() > 0) {
    body.innerHTML =
      '<div class="container"><p>Please use the latest version of Chrome/Opera/Firefox/Safari/Edge to view this website. This website no longer supports Internet Explorer.</p></div>';
  } else {
    browserBehavior(hash, () => false);
  }
};

window.onpopstate = function() {
  let hash = location.hash.split("#")[1];
  browserBehavior(hash, () => false);
};

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
