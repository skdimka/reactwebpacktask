import React, { useState } from "react";
import ForgotForm from "./ForgotForm";
import RegistrationForm from "./RegistrationForm";
import ButtonAuth from "./UI/button/buttonAuth";
import MyInput from "./UI/input/input";
import MyModal from "./UI/modal/modal";
import "../styles/style.scss";

const AuthForm = ({ onClose }) => {
  const [forgotModalVisible, setForgotModalVisible] = useState(false);
  const [registrationModalVisible, setRegistrationModalVisible] =
    useState(false);

  function openForgotModal(event) {
    event.preventDefault();
    setForgotModalVisible(true);
  }
  function openRegistrationModal(event) {
    event.preventDefault();
    setRegistrationModalVisible(true);
  }

  return (
    <form>
      <div className="inputGroup">
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
      </div>
      <MyModal
        visible={forgotModalVisible}
        setVisible={setForgotModalVisible}
        title="Восстановление пароля"
      >
        <ForgotForm onClose={() => setForgotModalVisible(false)} />
      </MyModal>
      <MyModal
        visible={registrationModalVisible}
        setVisible={setRegistrationModalVisible}
        title="Регистрация"
      >
        <RegistrationForm onClose={() => setRegistrationModalVisible(false)} />
      </MyModal>
      <div className="btnGroup">
        <a href="" onClick={(e) => openRegistrationModal(e)}>
          Регистрация
        </a>
        <a href="" onClick={(e) => openForgotModal(e)}>
          Забыли пароль?
        </a>
      </div>
      <div className="btnGroup">
        <ButtonAuth className="btnLogin">Войти</ButtonAuth>
      </div>
    </form>
  );
};

export default AuthForm;
