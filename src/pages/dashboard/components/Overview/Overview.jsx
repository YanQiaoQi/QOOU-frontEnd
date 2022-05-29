import { Wrapper, Spacer, Space } from '../../../../components/Space/Space';
import Button from '../../../../components/Button/Button';
import Projects from './components/Projects/Projects';
import Input from '../../../../components/Input/Input';
import styles from './Overview.less';
import { useParams } from 'umi';

function Overview({ options = [] }) {
  const { username } = useParams();
  let projectsOptions = [
    {
      projectName: 'go1',
      projectURL: 'qoou.vercel.app',
      projectDescription: 'initial Description created from qoou.vercel.app',
      projectLasttime: '14d ago',
      href: `/${username}/go1`,
    },
    {
      projectName: 'go2',
      projectURL: 'qoou.vercel.app',
      projectDescription: 'initial Description created from qoou.vercel.app',
      projectLasttime: '14d ago',
      href: `/${username}/go2`,
    },
    {
      projectName: 'go3',
      projectURL: 'qoou.vercel.app',
      projectDescription: 'initial Description created from qoou.vercel.app',
      projectLasttime: '14d ago',
      href: `/${username}/go3`,
    },
  ];
  return (
    <Wrapper full className={styles['dashboard-wrapper']}>
      <Wrapper>
        <Spacer size={24} />
        <Space>
          <Input className={styles['dashboard-input']} />
          <Button
            type="primary"
            href="/new"
            size="large"
            className={styles['dashboard-newProjectButton']}
          >
            + New Project
          </Button>
        </Space>
        <Spacer size={24} />
        <Projects options={projectsOptions}></Projects>
      </Wrapper>
    </Wrapper>
  );
}

export default Overview;
