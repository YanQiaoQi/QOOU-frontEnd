import Space from '../../../../../../../../components/Space/Space';
import Text from '../../../../../../../../components/Text/Text';
import styles from './ProjectCard.less';

function ProjectCard({
  href,
  projectName,
  projectURL,
  projectDescription,
  projectLasttime,
}) {
  let basicClassName = 'qoou-dashboard-projectCard';
  return (
    <div className={styles[`${basicClassName}-container`]}>
      <a className={styles[`${basicClassName}`]} href={href}>
        <Space
          direction="column"
          className={styles[`${basicClassName}-details`]}
          size={16}
        >
          <div>
            <Text className={styles[`${basicClassName}-name`]}>
              {projectName}
            </Text>
            <Text className={styles[`${basicClassName}-url`]}>
              {projectURL}
            </Text>
          </div>
          
          <Text className={styles[`${basicClassName}-description`]}>
            {projectDescription}
          </Text>
          
          <Text className={styles[`${basicClassName}-lastTime`]}>
            {projectLasttime}
          </Text>
        </Space>
      </a>
    </div>
  );
}

export default ProjectCard;
