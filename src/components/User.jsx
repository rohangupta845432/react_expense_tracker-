const User = (props) => {
  const styles = {
    border: "1px solid aqua",
    marginTop: "4px",
    padding: "4px",
  };
  return (
    <div style={styles}>
      {props.username} is ({props.age} years old).
    </div>
  );
};

export default User;
