import React, { RefObject, useEffect, useState } from 'react';
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
      const listener = keyListenerMap.get(key);
      return listener && listener(event);
    }

    setFirstFocusElement();

    document.addEventListener("keydown", keyListener);
    return () => document.removeEventListener("keydown", keyListener);
  },)

  const modalRef: RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  const setFirstFocusElement = () => {
    if(modalRef.current) {
      const focusableModalElements = modalRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
        
      // define the first and last elements of our modal:
      focusableModalElements[0].focus();
    }
  }

  const handleTabKey = (event: KeyboardEvent) => {
    if(modalRef.current) {
        const focusableModalElements = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
        );
        
        // define the first and last elements of our modal:
        const firstElement = focusableModalElements[0];
        const lastElement = focusableModalElements[focusableModalElements.length - 1];
          
        if (!event.shiftKey && document.activeElement === lastElement) {
          firstElement.focus();
          return event.preventDefault();
        } else if (event.shiftKey && document.activeElement === firstElement) {
          lastElement.focus();
          return event.preventDefault();
        } 
      }
  };



  const keyListenerMap = new Map<string | number, (...args: any[]) => void>([
    ['Tab' || 9, handleTabKey],
    [27 || 'Escape' || 'Esc', () => setIsModalVisible(false)]
  ]);

  const modalContainer = () => {
    return createPortal(
      <aside 
        className={ `${containerClassName} modal-container` } 
        role="dialog" 
        aria-modal="true"
        >
        <div 
          className={ `${contentClassName} modal-content` }
          onClick={() => null }
          ref={modalRef}
          >
          { children }
          <Button 
            onClick={() => setIsModalVisible(false)}
          >Close</Button>
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