import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface Props {
  onBodyChange: (event: any) => void;
  ontitleChange: (event: any) => void;
}
function Modal({ children }) {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate("..");
  };
  return (
    <>
      <div className="backdrop" onClick={closeHandler}></div>
      <dialog open className="modal">
        {children}
      </dialog>
    </>
  );
}

export default Modal;
