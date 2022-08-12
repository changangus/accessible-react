import React, { useState } from 'react';
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

  const modalContainer = () => {
    return createPortal(
      <aside className={ `${containerClassName} container` } role="dialog" aria-modal="true">
        <div className={ `${contentClassName} content` }>
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