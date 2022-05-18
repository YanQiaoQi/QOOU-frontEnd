import Space from '../../../../../../components/Space/Space';
import Text from '../../../../../../components/Text/Text';
import styles from './ProjectCard.less';

function ProjectCard({
  href,
  projectName,
  projectURL,
  projectCommit,
  projectLasttime,
}) {
  return (
    <div className={styles['projectCard-container']}>
      <a className={styles['projectCard']} href={href}>
        <Space
          direction="column"
          className={styles['projectCard-details']}
          size={16}
        >
          <div>
            <Text>{projectName}</Text>
            <Text>{projectURL}</Text>
          </div>
          <Text>{projectCommit}</Text>
          <Text>{projectLasttime}</Text>
        </Space>
      </a>
    </div>
  );
}

export default ProjectCard;
