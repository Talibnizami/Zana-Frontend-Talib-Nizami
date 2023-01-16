import "./ContentContainer.css";

const contentContainer = ({ containerStyle, children }) => {
  return (
    <div className="content-container" style={{ ...containerStyle }}>
      {children}
    </div>
  );
};

export default contentContainer;
