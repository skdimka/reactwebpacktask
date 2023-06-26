import React from "react";
import ButtonAuth from "./UI/button/buttonAuth";
import MyInput from "./UI/input/input";
import "../styles/style.scss";

const RegistrationForm = ({ onClose }) => {
  function closeModal(event) {
    event.preventDefault();
    onClose();
  }
  return (
    <div>
      <div className="inputGroup">
        <MyInput type="email" placeholder="Введите email" />
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyInput type="password" placeholder="Повторите пароль" />
      </div>
      <div className="btnGroup">
        <ButtonAuth onClick={closeModal}>Назад</ButtonAuth>
        <ButtonAuth>Регистрация</ButtonAuth>
      </div>
    </div>
  );
};

export default RegistrationForm;
