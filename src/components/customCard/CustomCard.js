import "./CustomCard.css";

const CustomCard = ({ onClick = {}, containerStyle = {}, children }) => {
  return (
    <div className="custom-card-container" style={{ ...containerStyle }}>
      <a className="close-button" onClick={onClick}>
        X
      </a>
      {children}
    </div>
  );
};

export default CustomCard;
