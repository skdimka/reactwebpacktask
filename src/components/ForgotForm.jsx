import React from "react";
import ButtonAuth from "./UI/button/buttonAuth";
import MyInput from "./UI/input/input";
import "../styles/style.scss";

const ForgotForm = ({ onClose }) => {
  function closeForgotModal(event) {
    event.preventDefault();
    onClose();
  }
  return (
    <div>
      <div className="inputGroup">
        <MyInput type="email" placeholder="Введите email" />
      </div>
      <div className="btnGroup">
        <ButtonAuth onClick={closeForgotModal}>Назад</ButtonAuth>
        <ButtonAuth>Отправить</ButtonAuth>
      </div>
    </div>
  );
};

export default ForgotForm;
