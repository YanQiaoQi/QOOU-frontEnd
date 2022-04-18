import { useState } from 'react';
import { connect } from 'dva';
import Space from '../../components/Space/Space';
import Layout from '../../components/Layout/Layout';
// import Header from '../../components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import { ButtonList, MyButton } from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import PopUpWindow from '../../components/PopUpWindow/PopUpWindow';

const { Header, Content } = Layout;

function Index({ curyDispatch }) {
  const [mode, setMode] = useState({
    isActive: false,
    info: [
      { title: 'username', reqKey: 'username', type: 'text' },
      { title: 'github access token', reqKey: 'token', type: 'text' },
    ],
    type: 'index/register',
  });
  const curySetMode = (val) => () => {
    setMode(val);
  };

  // 组件设置
  // 登录，注册
  let buttonListSettings = [
    {
      title: 'Login',
      action: curySetMode({
        isActive: true,
        info: [
          { title: 'username', reqKey: 'username', type: 'text' },
          { title: 'repoName', reqKey: 'repoName', type: 'text' },
          { title: 'template', reqKey: 'template', type: 'text' },
        ],
        type: 'index/createRepo',
      }),
      type: 'common',
    },
    {
      title: 'Sign Up',
      action: curySetMode({
        isActive: true,
        info: [
          { title: 'username', reqKey: 'username', type: 'text' },
          { title: 'repoName', reqKey: 'repoName', type: 'text' },
        ],
        type: 'index/deploy',
      }),
      type: 'signUp',
    },
  ];
  let introSettings = {
    text: [
      { text: 'Develop.', startColor: '#007cf0', endColor: '#00dfd8' },
      { text: 'Preview.', startColor: '#7928CA', endColor: '#FF0080' },
      { text: 'Ship.', startColor: '#FF4D4D', endColor: '#F9CB28' },
    ],
  };
  // 主按钮
  let buttonSettings = {
    title: 'Start with Github',
    action: curySetMode({
      isActive: true,
      info: [
        { title: 'username', reqKey: 'username', type: 'text' },
        { title: 'github access token', reqKey: 'token', type: 'text' },
      ],
      type: 'index/register',
    }),
    type: 'main',
  };

  let PopUpSettings = {
    mode: mode,
    setMode: setMode,
    confirmCallback: curyDispatch,
  };

  return (
    <Layout>
      <Header type="common">
        <Logo type="SVG" />
        <ButtonList ui={buttonListSettings} />
      </Header>
      <Content>
        <Space type="spacer" size="8px" />
        <Introduction {...introSettings} />
        <Space type="spacer" size="56px" />
        <MyButton {...buttonSettings} />
      </Content>
      <PopUpWindow {...PopUpSettings} />
    </Layout>
  );
}

export default connect(
  ({ index }) => {
    if (process.env.NODE_ENV === 'development') {
      // // console.log(index);
    }
    return JSON.parse(JSON.stringify(index));
  },
  (dispatch) => {
    return {
      curyDispatch: (type, payload) => () => {
        dispatch({ type, payload });
      },
    };
  },
)(Index);
