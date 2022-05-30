import Avatar from '../Avatar/Avatar';
// import styles from './QoouAvatar.less'

function QoouAvatar({ username }) {
  let hasUsername = false;
  if (username) {
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

export default QoouAvatar;
