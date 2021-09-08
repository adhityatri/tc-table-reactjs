import React from "react";
import { Backdrop, Wrapper, ModalHead, ModalContent } from "./Modal.style";

const Modal = ({ children, showModal, SetShowModal, title }) => {
  return (
    <div>
      {showModal ? (
        <Backdrop>
          <Wrapper>
            <ModalHead>{title}</ModalHead>
            <ModalContent>{children}</ModalContent>
          </Wrapper>
        </Backdrop>
      ) : null}
    </div>
  );
};

export default Modal;
