import React from "react";
import "./Login.css";
import Input from "../../components/Input/Input";
import { ReactComponent as FacebookLogo } from "../../icons/facebook-round-color-2021-icon.svg";
import { ReactComponent as GoogleLogo } from "../../icons/google-color-icon.svg";

export const Login = () => {
  return (
    <form className="form__container">
      <div className="form__section">
        <header>
          <h2>
            <span>Bem vindo</span> de volta!
          </h2>
          <h3>Login</h3>
        </header>
        <section>
          <Input
            label="Email"
            className="login__input"
            inputContainer="input__container"
            placeholder="Escreva seu email aqui"
          />

          <Input
            label="Senha"
            className="login__input"
            inputContainer="input__container"
            placeholder="Digite sua senha"
          />
          <a className="recover__password" href="/resetPassword">
            {" "}
            Recuperar Senha
          </a>
        </section>
        <div className="button__container">
          <button>Login</button>
        </div>
        <div className="section__divider">Ou</div>
        <section className="socials__links">
          <a href="/">
            <GoogleLogo className="icon" />
            Continue com o Google
          </a>
          <a href="/">
            <FacebookLogo className="icon" />
            Continue com o Facebook
          </a>
        </section>
        <div className="sign_container">
          <p>Não tem uma conta ?</p>
          <a href="/signup">Crie uma</a>
        </div>
      </div>
    </form>
  );
};
