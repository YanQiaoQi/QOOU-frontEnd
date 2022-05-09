import Avatar from '../../components/Avatar/Avatar';
// import styles from './MyAvatar.less'

function MyAvatar({ username }) {
  let hasUsername = false;
  if (username !== undefined) {
    hasUsername = true;
  }
  
  if (hasUsername) {
    return (
      <Avatar
        shape="circle"
        size={32}
        username={username}
        iconStyle={{
          backgroundImage: 'linear-gradient(90deg, #007cf0, #ff0080)',
        }}
      />
    );
  } else {
    return (
      <Avatar
        shape="circle"
        size={32}
        iconStyle={{
          backgroundImage: 'linear-gradient(90deg, #007cf0, #ff0080)',
        }}
      />
    );
  }
}

export default MyAvatar;
