import Avatar from '../../components/Avatar/Avatar';
// import styles from './MyAvatar.less'

function MyAvatar({ hasUsername }) {
  if (hasUsername) {
    return (
      <Avatar
        shape="circle"
        size={32}
        username="YanQiaoQi"
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
