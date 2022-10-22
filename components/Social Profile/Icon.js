const Icon = (props) => {
  const { faIcon, url } = props;
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer">
        <i className={faIcon}></i>
      </a>
    </div>
  );
};

export default Icon;
