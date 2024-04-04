import { liveProjects } from '../constants';
import LiveProjectContainer from './LiveProjectContainer';

export default function LiveProjects() { return (
  <section id="live-projects" className="paddingX paddingY">
    <header><h1 className="emphasize main-header">My live projects</h1></header>
    <h3>Take a look at my live projects:</h3>
    <p>
      <b>Note:</b> These boxes below are my current online projects. If you want to know 
      all that I did, I strongly recommend you to access my GitHub Profile (josiasbudaydeveloper):
    </p>
    <section className="items-area">
      { liveProjects.map((project) => (
        <LiveProjectContainer 
          id={project.id}
          header={project.header}
          description={project.description}
          link={project.link}
          img={project.img}
          alt={project.alt}
        />
      )) }
    </section>
  </section>
)}