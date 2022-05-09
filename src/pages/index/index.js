import { useState } from 'react';
import { connect } from 'dva';
import { Space, Spacer } from '../../components/Space/Space';
import Layout from '../../components/Layout/Layout';
// import Header from '../../components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import { ButtonList, Button } from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import usePopupWindow from '../../components/PopupWindow/PopUpWindow';
import styles from './index.less';

const { Header, Content } = Layout;

function IndexPage({ curyDispatch }) {
  let buttonListSettings = [
    {
      title: 'Login',
      type: 'text',
    },
    {
      title: 'Sign Up',
      type: 'text',
      className: styles['qoou-index-button-signup'],
    },
  ];
  let buttonSettings = {
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
      <Header type="common" style={{ '--width': '1024px' }}>
        <Logo type="SVG" />
        <ButtonList options={buttonListSettings} />
      </Header>
      <Content>
        <Spacer size={8} />
        <Introduction />
        <Spacer size={56} />
        <Button {...buttonSettings}>Start with Github</Button>
        <Spacer size={56} />
      </Content>
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
