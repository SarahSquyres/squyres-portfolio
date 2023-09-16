import React from 'react';
import './projects.css';
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Projects = () => {
    return (
        <section id='projects'>
            <h2 className='projectTitle'>Projects</h2>
            <span className='projectDesc'>
            <p>Languages: HTML5, CSS, ES6 JavaScript, SQL, MySQL</p>
            <p>Server-Side Technologies: Node.js, Express.js, Sequelize, MongoDB, GraphQL, NoSQL, Web APIs, Third-Party APIs, Server-Side APIs</p>
            <p>Client-Side Technologies: Redux, React, jQuery, Bootstrap, Tailwind, Daisy UI, Handlebars.js</p>
            <p>Development Skills: Heroku Deployment, GitHub Navigation, Insomnia, Bash Shell, Project Presentation, MERN Stack</p>
            </span>
            <div className='projectImgs'>
                <img src={Portfolio1} alt="" className='projectImg' />
                <img src={Portfolio2} alt="" className='projectImg' />
                <img src={Portfolio3} alt="" className='projectImg' />
                <img src={Portfolio4} alt="" className='projectImg' />
                <img src={Portfolio5} alt="" className='projectImg' />
                <img src={Portfolio6} alt="" className='projectImg' />
            </div>


        </section>
    )
}

export default Projects