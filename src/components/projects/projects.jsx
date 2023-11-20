import React from 'react';
import '../projects/projects.css';
import IMG1 from '../../assets/img/githubusercard_BT.png';

const data = [
    {
        id: 1,
        image: IMG1,
        title: "test title",
        description: "test description",
        github:'www.google.com' ,
        demo:  'www.google.com',
    },
    {
        id: 2,
        image: IMG1,
        title: "test title",
        description: "test description",
        github:'www.google.com' ,
        demo:  'www.google.com',
    },
    {
        id: 3,
        image: IMG1,
        title: "test title",
        description: "test description",
        github:'www.google.com' ,
        demo:  'www.google.com',
    },
    {
        id: 4,
        image: IMG1,
        title: "test title",
        description: "test description",
        github:'www.google.com' ,
        demo:  'www.google.com',
    },
    {
        id: 5,
        image: IMG1,
        title: "test title",
        description: "test description",
        github:'www.google.com' ,
        demo:  'www.google.com',
    },
    {
        id: 6,
        image: IMG1,
        title: "test title",
        description: "test description",
        github:'www.google.com' ,
        demo:  'www.google.com',
    },
    {
        id: 7,
        image: IMG1,
        title: "test title",
        description: "test description",
        github:'www.google.com' ,
        demo:  'www.google.com',
    },
    {
        id: 8,
        image: IMG1,
        title: "test title",
        description: "test description",
        github:'www.google.com' ,
        demo:  'www.google.com',
    },
    {
        id: 9,
        image: IMG1,
        title: "test title",
        description: "test description",
        github:'www.google.com' ,
        demo:  'www.google.com',
    },
];

const Projects = () => {
  return (
    <section id='projects'>
      <h2 className="about__h2">My Projects Portfolio</h2>
      <div className="projects_container container">
        {data.map(({ id, image, title, github, description, demo }) => (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p className="project_content">{description}</p>
            <div className="portfolio_item_ct">
              <a href={github} className="btn" target='_blank' rel='noreferrer'>
                Github
              </a>
              <a href={demo} className=" btn btn-primary" target='_blank' rel='noreferrer'>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;