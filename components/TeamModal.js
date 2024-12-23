import React from "react";
import Modal from "react-modal";

const TeamModal = ({ isOpen, closeModal }) => {
  return (
    <Modal


      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "70%",
          maxHeight: "80%",
          height: "80vh",
          overflowY: "auto",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#fff",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      }}
    >
        <button className="close-modal" onClick={closeModal}>
        &times;
        </button>
        <img src="assets/img/team/01.webp" alt="Nabeel Shaikh – FCA" style={{ height: "435px", width: "85%", objectFit: "contain", margin: "auto" }}/>
      <h2>Nabeel Shaikh – FCA</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel dui
        eget felis euismod scelerisque. Duis convallis mi vel malesuada
        volutpat.
       
      </p>

      <style jsx>{`


          .close-modal {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            background: none;
            border: none;
            color: black;
            cursor: pointer;
            z-index: 1000;
          }
        `}</style>
    </Modal>
  );
};

export default TeamModal;
