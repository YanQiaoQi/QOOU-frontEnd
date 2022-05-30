import Layout from '../../components/Layout/Layout';
import Space from '../../components/Space/Space';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { ButtonList } from '../../components/Button/Button';
import Logo from '../Logo/Logo';
import QoouAvatar from '../QoouAvatar/QoouAvatar';
import { useParams } from 'umi';
import styles from './QoouHeader.less';
let newButtonsOptions = [
  {
    content: 'Feedback',
    action: null,
    type: 'common',
  },
  {
    content: 'Changelog',
    action: null,
    type: 'text',
  },
  {
    content: 'Support',
    action: null,
    type: 'text',
  },
  {
    content: 'Docs',
    action: null,
    type: 'text',
  },
];
let dashboardButtonsOptions = [
  {
    content: 'Feedback',
    action: null,
    type: 'common',
  },
  {
    content: 'docs',
    action: null,
    type: 'text',
  },
];

function QoouHeader({ type = 'common', username, projectName }) {
  let buttonsOptions = dashboardButtonsOptions;
  let hasProjectName = false;
  if (projectName) {
    hasProjectName = true;
  }

  return (
    <Layout.Header type={type} className={styles['qoou-header']}>
      <Breadcrumb>
        <Breadcrumb.Item href={`/${username}`}>
          <Logo type="simple" info="32px" />
        </Breadcrumb.Item>
        <Breadcrumb.Item href={`/${username}`}>
          <QoouAvatar username={username} />
        </Breadcrumb.Item>
        {hasProjectName ? (
          <Breadcrumb.Item href={`/${username}/${projectName}`}>
            {projectName}
          </Breadcrumb.Item>
        ) : null}
      </Breadcrumb>

      <Space size={8}>
        <ButtonList gap={8} options={buttonsOptions} />
        <QoouAvatar />
      </Space>
    </Layout.Header>
  );
}

export default QoouHeader;
