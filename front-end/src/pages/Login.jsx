import React from 'react';

const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPwdLength = 6;

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div>
      <input
        type="email"
        data-testid="common_login__input-email"
        id="email"
        placeholder="Digite seu email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="common_login__input-password"
        id="password"
        placeholder="Digite sua senha"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="submit"
        data-testid="common_login__button-login"
        disabled={ !REGEX_EMAIL.test(email) || password.length < minPwdLength }
      >
        Entrar
      </button>
      <button
        type="submit"
        data-testid="common_login__button-register"
      >
        Registrar
      </button>
    </div>
  );
}

export default Login;
