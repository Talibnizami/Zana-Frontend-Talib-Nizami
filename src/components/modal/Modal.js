import { Modal } from "react-bootstrap";

import "./Modal.css";

const CustomModal = ({
  children,
  title = "",
  onOpenClose = {},
  show,
  bodyStyle = {},
  className = "",
}) => {
  return (
    <Modal
      show={show}
      onBackdropClick={()=>console.log("back")}
      onHide={onOpenClose}
      centered
      style={{ borderRadius: "10px", color: "white" }}
      size="lg"
      dialogClassName={className}
    >
      <Modal.Body
        style={{
          backgroundColor: "#2A2E43",
          borderRadius: "10px",
          ...bodyStyle,
          // padding: "50px",
        }}
        className="d-flex flex-column align-items-center"
      >
        <a className="modal-close-button" onClick={onOpenClose}>
          X
        </a>
        <h3>{title}</h3>
        {children}
      </Modal.Body>
    </Modal>
  );
};

export default CustomModal;
