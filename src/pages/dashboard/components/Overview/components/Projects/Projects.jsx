import ProjectCard from './components/ProjectCard/ProjectCard';
import styles from './Projects.less';

function Projects({ options = [] }) {
  let projects = options.map((element) => {
    return <ProjectCard key={element.projectName} {...element} />;
  });
  return (
    <div className={styles['qoou-dashboard-projects-containter']}>
      {projects}
    </div>
  );
}

export default Projects;
