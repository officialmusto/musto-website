// assets
import cssIcon from "../../assets/icons/css-icon.svg"
import gitIcon from "../../assets/icons/git-icon.svg"
import htmlIcon from "../../assets/icons/html-icon.svg"
import jsIcon from "../../assets/icons/javascript-icon.svg"
import mongoDbIcon from "../../assets/icons/mongodb-icon.svg"
import nodejsIcon from "../../assets/icons/nodejs-icon.svg"
import postgresIcon from "../../assets/icons/postgres-icon.svg"
import reactIcon from "../../assets/icons/react-icon.svg"
import sequelizeIcon from "../../assets/icons/sequelize-icon.svg"
import tsIcon from "../../assets/icons/typescript-icon.svg"
import viteIcon from "../../assets/icons/vite-icon.svg"
import bjThumbnail from "../../assets/blackjack-screenshot.png"
import sbThumbnail from "../../assets/smash-reviews-screenshot.png"
import ssThumbnail from "../../assets/styleswipe-screenshot.png"
import hhThumbnail from "../../assets/habit-hero-screenshot.png"

// components
import ProjectCard from "../ProjectCard/ProjectCard"

// css
import "../ProjectList/ProjectList.css"

function ProjectList() {
  const projects = [
    {
      title: "Habit Hero!",
      links: [
        {
          github: "https://github.com/officialmusto/habit-hero-front",
          deployedSite: "https://habit-hero-musto.netlify.app/",
        },
      ],
      thumbnail: hhThumbnail,
      desc: "Habit-Hero is a full-stack web app built with TypeScript, PostgreSQL, Express, Node.js, React, and JWT, offering a sleek interface with CSS styling and seamless error handling. It ensures maintainable code through TypeScript and dynamic UI updates via React’s useState and useEffect hooks.",
      badges: [
        jsIcon,
        htmlIcon,
        cssIcon,
        gitIcon,
        mongoDbIcon,
        nodejsIcon,
        reactIcon,
        viteIcon,
        tsIcon,
        postgresIcon,
        sequelizeIcon,
      ],
    },
    {
      title: "StyleSwipe",
      links: [
        {
          github: "https://github.com/officialmusto/styleSwipe-front-end",
          deployedSite: "https://style-swipe.netlify.app/",
        },
      ],
      thumbnail: ssThumbnail,
      desc: "StyleSwipe is a collaborative MERN stack social media app with JWT authentication, built in two days with a mobile-first design using Styled-Components and CSS. It offers full CRUD functionality and RESTful API integration, highlighting efficient teamwork and rapid development.",
      badges: [
        jsIcon,
        htmlIcon,
        cssIcon,
        gitIcon,
        mongoDbIcon,
        nodejsIcon,
        reactIcon,
        viteIcon,
      ],
    },
    {
      title: "Smash Reviews",
      links: [
        {
          github: "https://github.com/officialmusto/smash-bros-reviews",
          deployedSite: "https://smash-reviews.fly.dev/",
        },
      ],
      thumbnail: sbThumbnail,
      desc: "Smash Bros. Reviews is a web app built with Node.js, Express, and MongoDB, featuring Google OAuth for authentication and Mongoose-powered CRUD operations. It dynamically renders EJS templates for character pages, reviews, and user management.",
      badges: [jsIcon, htmlIcon, cssIcon, gitIcon, mongoDbIcon, nodejsIcon],
    },
    {
      title: "BlackJack21",
      links: [
        {
          github: "https://github.com/officialmusto/blackjack21",
          deployedSite: "https://blackjack-musto.netlify.app/",
        },
      ],
      thumbnail: bjThumbnail,
      desc: "BlackJack 21 is a captivating web application showcasing strong problem-solving and algorithmic skills, implemented with JavaScript, HTML, and CSS, featuring immersive game logic, modular classes, and effective handling of edge cases for an engaging and realistic gaming experience.",
      badges: [
        jsIcon, 
        htmlIcon,
        cssIcon, 
        gitIcon
      ],
    },
  ]

  return (
    <>
      <section id="portfolio">
        {projects.map((project, idx) => {
          return <ProjectCard key={idx} project={project} cardIdx={idx} />
        })}
      </section>
    </>
  )
}

export default ProjectList
