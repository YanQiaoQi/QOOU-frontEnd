import { connect } from 'dva';
import { Spacer } from '../../components/Space/Space';
import Layout from '../../components/Layout/Layout';
// import Header from '../../components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import { ButtonList, Button } from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import usePopupWindow from '../../components/PopupWindow/PopUpWindow';
import styles from './index.less';
import { curify, higherOrder } from '../../utils/common';

const { Header, Content } = Layout;

function IndexPage({ curyHigherDispatch }) {
  const [PopupWindow, setPopupState] = usePopupWindow({ isActive: false });
  const higherSetPopupState = higherOrder(setPopupState);
  let logInFormOption = [
    {
      reqKey: 'username',
      type: 'Input',
      props: {
        placeholder: 'username',
      },
    },
    {
      reqKey: 'token',
      type: 'Input',
      props: {
        placeholder: 'Github Access Token',
      },
    },
  ];
  let signupFormOption = [
    {
      reqKey: 'username',
      type: 'Input',
      props: {
        placeholder: 'username',
      },
    },
    {
      reqKey: 'token',
      type: 'Input',
      props: {
        placeholder: 'Github Access Token',
      },
    },
  ];
  let logInButtonProps = {
    type: 'text',
    onClick: higherSetPopupState({
      isActive: true,
      title: 'Login',
      options: logInFormOption,
      onClick: curyHigherDispatch('user/login'),
    }),
  };
  let signUpButtonProps = {
    type: 'text',
    className: styles['qoou-index-button-signup'],
    onClick: higherSetPopupState({
      isActive: true,
      title: 'sign up',
      options: signupFormOption,
      onClick: curyHigherDispatch('user/signup'),
    }),
  };
  let contentButtonProps = {
    type: 'text',
    size: 'personal',
    className: styles['qoou-index-button-startWithGithub'],
    onClick: higherSetPopupState({
      isActive: true,
      title: 'Login',
      options: logInFormOption,
      onClick: curyHigherDispatch('user/login'),
    }),
  };

  return (
    <Layout>
      <Header style={{ '--width': '1024px' }}>
        <Logo />
        <ButtonList>
          <Button {...logInButtonProps}>Login</Button>
          <Button {...signUpButtonProps}>Sign up</Button>
        </ButtonList>
      </Header>
      <Content>
        <Spacer size={8} />
        <Introduction />
        <Spacer size={56} />
        <Button {...contentButtonProps}>Start with Github</Button>
        <Spacer size={56} />
      </Content>
      <PopupWindow />
    </Layout>
  );
}

export default connect(
  ({ user }) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(user);
    }
    return JSON.parse(JSON.stringify(user));
  },
  (dispatch) => {
    return {
      curyHigherDispatch: curify((type, payload) => () => {
        dispatch({ type, payload });
      }),
    };
  },
)(IndexPage);
