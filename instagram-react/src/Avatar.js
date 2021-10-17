function Avatar(props) {
  return (
    <div>
      <span style={{ fontSize: 16, fontStyle: "bold", marginRight: 15 }}>
        {props.name}
      </span>

      <small>13 oct 2021 - 19:27</small>
      <br />
    </div>
  );
}
export default Avatar;
