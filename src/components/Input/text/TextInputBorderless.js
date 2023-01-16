import "./TextInputBorderless.css";

const directionType = {
  row: "flex-row",
  column: "flex-column",
};

const TextInputBorderless = (props) => {
  const {
    id = "",
    label = "",
    options = [],
    direction = "",
    inputStyle = {},
    containerStyle = {},
    labelEnable = true,
  } = props;
  return (
    <div
      className={`d-flex m-2 ${directionType[direction]} ${
        direction !== "column" && "align-items-center"
      } `}
      style={containerStyle}
    >
      {labelEnable && (
        <label for={label} className={`me-2 `}>
          {label}
        </label>
      )}
      <input
        className="login-form-control"
        type="text"
        style={inputStyle}
        {...props}
        // placeholder="Username"
      />
    </div>
  );
};

export default TextInputBorderless;
