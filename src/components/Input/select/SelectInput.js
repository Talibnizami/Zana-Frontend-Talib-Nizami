import "./SelectInput.css";

const directionType = {
  row: "flex-row",
  column: "flex-column",
};

const SelectInput = (props) => {
  const {
    id = "",
    label = "",
    options = [],
    direction = "",
    selectStyle = {},
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
        <label style={{marginLeft:2}}>
          {label}
        </label>
      )}
      <select
        className="select-input-container"
        style={selectStyle}
        {...props}
      >
        <option value="">select</option>
        {options.map((item) => {
          return <option value={item.value}>{item.title}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectInput;
