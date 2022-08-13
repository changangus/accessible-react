import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button';
import './Modal.css';

export interface ModalProps {
  title: string,
  containerClassName?: string,
  contentClassName?: string,
}

const Modal: React.FC<ModalProps> = ({ children, title, containerClassName, contentClassName }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    function keyListener(event: KeyboardEvent) {
      const key = event.key || event.keyCode;
      if(key === 'Escape' || key === 'Esc' || key === 27) {
        setIsModalVisible(false);
      }
    }

    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  })

  const modalContainer = () => {
    return createPortal(
      <aside 
        className={ `${containerClassName} container` } 
        role="dialog" 
        aria-modal="true"
        >
        <div 
          className={ `${contentClassName} content` }
          onClick={() => null }>
          { children }
          <Button onClick={() => setIsModalVisible(false)}>Close</Button>
        </div>
      </aside>,
      document.body
    )
  }

  return (
    <React.Fragment>
      <Button onClick={() => setIsModalVisible(true)}>{ title }</Button>
      {isModalVisible && modalContainer()}
    </React.Fragment>
  )
}

export default Modal;