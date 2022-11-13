const Modal = ({ setVisible, signup, login }) => {
  return (
    <div
      className="modal-root"
      onClick={(event) => {
        setVisible(false); //un clic sur cette modal parent (ie en dehors de la modal enfant modal avec form) ferme la modal
      }}
    >
      <div
        className="modal signup-login-modal-container"
        onClick={(event) => {
          event.stopPropagation(); //pour arrêter la propagation à la modal parent qui est modal-root, je peux ainsi cliquer et valider mon formulaire
        }}
      >
        {signup}
        {login}
      </div>
      {/* <div className="modal">
        // button pour fermer la modal 
        <button
          onClick={(event) => {
            setVisible(false);
            //event.stopPropagation();
          }}
        >
          Close
        </button>
      </div> */}
    </div>
  );
};

export default Modal;
