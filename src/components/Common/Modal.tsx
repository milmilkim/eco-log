import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Dispatch } from 'react';

interface ModalProps extends ModalStyle {
  isShow: boolean;
  setIsShow: Dispatch<React.SetStateAction<boolean>>;
  title: string;
  buttonLabel: string;
  callback: () => void;
}

interface ModalStyle {
  width?: number;
  height?: number;
}

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ children, width, height, isShow, setIsShow, title, buttonLabel, callback }) => {
  return (
    <>
      {isShow && (
        <StyledModal width={width || 300} height={height || 300}>
          <h2 className="modal-title">{title}</h2>

          {children}

          <div className="bottom">
            <div className="left" onClick={callback}>
              {buttonLabel}
            </div>
            <div className="right" onClick={() => setIsShow(false)}>
              취소
            </div>
          </div>
        </StyledModal>
      )}
    </>
  );
};

const StyledModal = styled.div<ModalStyle>`
  width: ${(props) => props.width || 300}px;
  min-height: ${(props) => props.height || 500}px;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.color.borderColor};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-between;

  .modal-title {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }

  .bottom {
    width: 100%;
    border-top: 1px solid #000;
    display: flex;
    flex-direction: row;

    .right,
    .left {
      width: 50%;
      justify-content: center;
      align-content: center;
      text-align: center;
      padding: 10px;
      cursor: pointer;
    }
  }
`;

export default Modal;
