import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="container">
      <h1>Modal Application</h1>
      <button onClick={()=>setOpen(true)}>Open</button>
      {open && (
        <div className="overlay" onClick={()=>setOpen(false)}>
          <div className="modal" onClick={(e)=>e.stopPropagation()}>
            <h2>My Modal</h2>
            <p>This is modal component</p>
            <button onClick={()=>setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
