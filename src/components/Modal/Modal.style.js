import styled from "styled-components";

export const Backdrop = styled.div`
  background-color: #5b5c61;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background-color: white;
  z-index: 2;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

export const ModalHead = styled.div`
  border-bottom: 1px solid gray;
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 0 1em;
`;
export const ModalContent = styled.div`
  display: flex;
  flex: 1;
  border: 1px dashed orange;
  padding: 1em;
`;
