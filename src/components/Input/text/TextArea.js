import "./TextArea.css";

const directionType = {
  row: "flex-row",
  column: "flex-column",
};

const TextArea = (props) => {
  const {
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
      <textarea
        className="textarea-input-control"
        style={inputStyle}
        {...props}
      />
    </div>
  );
};

export default TextArea;
