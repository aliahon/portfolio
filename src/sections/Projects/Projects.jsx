import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/aliahon/book-store-mern-stack"
          h3="Book Store"
          p="Mern Stack"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/aliahon/quiz-app"
          h3="Quiz App"
          p="Online Quiz Platform"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/aliahon/internship-reports-web-app"
          h3="Internship reports"
          p="Management Web App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/aliahon/portfolio"
          h3="Personal Portfolio"
          p="With React"
        />
      </div>
    </section>
  );
}

export default Projects;
