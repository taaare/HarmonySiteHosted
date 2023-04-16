import React, { useState, useEffect } from 'react';
import styles from '../styles/popup.module.css'

const Popup = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    props.onClose()
  };

  useEffect(() => {

    setIsOpen(props.isOpen);
    console.log("yessir");

  }, [props.isOpen]);

  return (
    <>
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.close} onClick={handleClose}>
            <div>&times;</div>
          </div>
          <div className={styles.message}>
            <div>{props.message}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;