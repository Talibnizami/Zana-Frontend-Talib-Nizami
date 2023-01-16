import "./TextInput.css";

const directionType = {
  row: "flex-row",
  column: "flex-column",
};

const TextInput = (props) => {
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
        id={id}
        className="text-input-control"
        type={"textarea"}
        style={inputStyle}
        {...props}
        // placeholder="Username"
      />
    </div>
  );
};

export default TextInput;
