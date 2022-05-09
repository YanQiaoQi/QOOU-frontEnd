// import styles from './ImportCard.less'
let importCardSetting = {
  type: 'import',
  title: 'Import Git Repository',
};

let importButtonSettings = {
  title: 'Import Third-Party Git Repository →',
  style: {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.6',
  },
};
function ImportCard({}) {
  return (
    <Card {...importCardSetting}>
      <Spacer size={424} />
      <MyButton {...importButtonSettings} />
    </Card>
  );
}

export default ImportCard;
