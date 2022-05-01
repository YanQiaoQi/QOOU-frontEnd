import { useState } from 'react';
import { connect } from 'dva';
import Space from '../../components/Space/Space';
import Layout from '../../components/Layout/Layout';
// import Header from '../../components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import { ButtonList, Button } from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import PopUpWindow from '../../components/PopUpWindow/PopUpWindow';

const { Header, Content } = Layout;

function IndexPage({ curyDispatch }) {
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

  let buttonListSettings = [
    {
      title: 'Login',
      onClick: curySetMode({
        isActive: true,
        title: '请输入以下信息',
        info: [
          {
            title: 'username',
            reqKey: 'username',
            type: 'text',
            isFocus: true,
          },
          {
            title: 'github access token',
            reqKey: 'token',
            type: 'text',
            isFocus: false,
          },
        ],
        type: 'index/register',
      }),
      type: 'text',
    },
    {
      title: 'Sign Up',
      onClick: curySetMode({
        isActive: true,
        title: '请输入以下信息',
        info: [
          {
            title: 'username',
            reqKey: 'username',
            type: 'text',
            isFocus: true,
          },
          {
            title: 'github access token',
            reqKey: 'token',
            type: 'text',
            isFocus: false,
          },
        ],
        type: 'index/register',
      }),
      type: 'text',
      style: {
        backgroundColor: 'black',
        color: 'white',
        padding: '0 12px',
        borderRadius: '5px',
      },
    },
  ];
  let buttonSettings = {
    onClick: curySetMode({
      isActive: true,
      title: '请输入以下信息',
      info: [
        {
          title: 'username',
          reqKey: 'username',
          type: 'text',
          isFocus: true,
        },
        {
          title: 'github access token',
          reqKey: 'token',
          type: 'text',
          isFocus: false,
        },
      ],
      type: 'index/register',
    }),
    type: 'text',
    size: 'personal',
    style: {
      backgroundColor: 'black',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '500',
      padding: '10px 25px',
      border: '1px solid #eaeaea',
      borderRadius: '5px',
    },
  };

  return (
    <Layout>
      <Header type="sticky">
        <Logo type="SVG" />
        <ButtonList ui={buttonListSettings} />
      </Header>
      <Content>
        <Space type="spacer" size={8} />
        <Introduction />
        <Space type="spacer" size={56} />

        <Button {...buttonSettings}>Start with Github</Button>
        <Space type="spacer" size={56} />
      </Content>

      <PopUpWindow
        mode={mode}
        setMode={setMode}
        confirmCallback={curyDispatch}
      />
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
)(IndexPage);
