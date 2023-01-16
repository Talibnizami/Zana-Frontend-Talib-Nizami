import "./TextInputBorderless.css";

const TextInputBorderless2 = (props) => {
  const { id, inputStyle = {} } = props;
  return (
    <input
      className="input-borderless"
      type="text"
      style={inputStyle}
      id={id}
      {...props}
    />
  );
};

export default TextInputBorderless2;
