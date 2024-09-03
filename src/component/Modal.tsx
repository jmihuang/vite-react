import React, { useState } from "react";
interface Props {
  onBodyChange: (event: any) => void;
  onAuthorChange: (event: any) => void;
  onClose: (event: any) => void;
}
function Modal({ children, onClose }) {
  return (
    <>
      <div className="backdrop" onClick={onClose}></div>
      <dialog open className="modal">
        {children}
      </dialog>
    </>
  );
}

export default Modal;
