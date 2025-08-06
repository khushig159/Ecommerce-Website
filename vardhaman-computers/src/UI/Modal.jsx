import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ open, onClose, message }) {
  const dialog = useRef(null);

  useEffect(() => {
    const dialogNode = dialog.current;

    if (open && dialogNode) {
      if (!dialogNode.open) {
        dialogNode.showModal();
      }
    } else if (!open && dialogNode?.open) {
      dialogNode.close();
    }

    const handleCloseEvent = () => {
      onClose(); // sync state
    };

    dialogNode?.addEventListener('close', handleCloseEvent);

    return () => {
      dialogNode?.removeEventListener('close', handleCloseEvent);
    };
  }, [open, onClose]);

  const handleCloseClick = () => {
    dialog.current?.close(); // this triggers the 'close' event above
  };

  const preventBackdropClose = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <dialog ref={dialog} className="modal" onClick={handleCloseClick}>
      <div className="modal-box" onClick={preventBackdropClose}>
        <p>{message}</p>
        <button onClick={handleCloseClick} className="close-btn">Close</button>
      </div>
    </dialog>,
    document.getElementById('modal')
  );
}
