import React from "react";

const projects = [
    {
        id: "MazeSolver",
        name: "Maze Solver",
        description: "Create a maze and then solve it with a bunch of bouncing balls.",
        category: "Java Appliet",
        imgSrc: "maze-solver.png",
        appStarter: function MazeSolver(event) { event.preventDefault(); }
    },
    {
        id: "RegressionCalculator",
        name: "Regression Calculator",
        description: "Plot some points and watch the calculator find an equation of best fit.",
        category: "Website",
        imgSrc: "regression-calculator-icon.jpg",
        appStarter: function regressCalculator(event) { event.preventDefault(); }
    },
    {
        id: "BirdDefense",
        name: "Bird Defense",
        description: "Tower defense game written with vanilla Javascript with multiplayer mode.",
        category: "Website",
        imgSrc: "bird-defense-icon.jpg",
        appStarter: function BirdDefense(event) { event.preventDefault(); }
    },
    {
        id: "EmailFormatter",
        name: "Email Formatter",
        description: "Create email templates and write emails with a powerful formatting language.",
        category: "Website",
        imgSrc: "email-formatter-icon.png",
        appStarter: function EmailFormatter(event) { event.preventDefault(); }
    },
    {
        id: "KnowledgeBase",
        name: "Knowledge Base",
        description: "Personal knowledge repository. Record and search through your prior knowledge.",
        category: "Website",
        imgSrc: "knowledge-base-icon.jpg",
        appStarter: function KnowledgeBase(event) { event.preventDefault(); }
    },
    {
        id: "Minesweeper",
        name: "Minesweeper",
        description: "The classic minesweeper game.",
        category: "Java Applet",
        imgSrc: "minesweeper-icon.jpg",
        appStarter: function Minesweeper(event) { event.preventDefault(); }
    }
];

function ProjectCard(proj) {
    return (
      <li class="folio-list__item column">
        <a class="folio-list__item-link" href={proj.id} onClick={proj.appStarter}>
            <div class="folio-list__item-pic">
                <img src={proj.imgSrc} alt=""/>
            </div>
            <div class="folio-list__item-text">
                <div class="folio-list__item-cat">
                    {proj.category}
                </div>
                <div class="folio-list__item-title">
                    {proj.name}
                </div>
                <div class="folio-list__item-desc">
                    {proj.description}
                </div>
            </div>
        </a>
      </li>
    );
}

function CreateProject(proj) {
    return (
        <ProjectCard
                key={proj.id}
                category={proj.category}
                name={proj.name}
                imgSrc={proj.imgSrc}
                description={proj.description}
                appStarter={proj.appStarter}
        />
    );
}

function Works() {
    projects.map(proj=>console.log(proj.id));

    // data-animate-el doesn't work in <h2 />, <li />
    return (
        <div class="row works-portfolio">
            <div class="column lg-12" data-animate-block>
                <h2 class="text-pretitle">  
                    Recent Works
                </h2>
                <div id="demo"></div>
                <ul class="folio-list row block-lg-one-half block-stack-on-1000">
                    {projects.map(CreateProject)}                    
                </ul>
            </div>
        </div>
    );
}

export default Works;