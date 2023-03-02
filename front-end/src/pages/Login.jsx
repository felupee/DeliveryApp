import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

import MainContext from '../Context/MainContext';

// const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const minPwdLength = 6;

function Login() {
  const [email, setEmail] = React.useState({
    hasChanged: false,
    value: '',
  });
  const [password, setPassword] = React.useState({
    hasChanged: false,
    value: '',
  });
  const [loginResponse, setLoginResponse] = React.useState('initial');

  const { isEmailValid } = useContext(MainContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email: email.value,
        password: password.value,
      });
      setLoginResponse(response.data);
    } catch (error) {
      console.log(error.message);
      setLoginResponse(null);
    }
  };

  return (
    <div>
      <input
        type="email"
        data-testid="common_login__input-email"
        id="email"
        placeholder="Digite seu email"
        value={ email.value }
        onChange={
          (e) => setEmail({ ...email, hasChanged: true, value: e.target.value })
        }
      />
      {/* {
        !REGEX_EMAIL.test(email) && email.length > 10
        && <p data-testid="common_login__input-email-error">Email inválido</p>
      } */}
      {
        email.hasChanged && !email.value
        && <p>Email Obrigatório</p>
      }
      {
        email.hasChanged && !isEmailValid(email.value)
        && <p data-testid="common_login__input-email-error">Email inválido</p>
      }
      <input
        type="password"
        data-testid="common_login__input-password"
        id="password"
        placeholder="Digite sua senha"
        value={ password.value }
        onChange={
          (e) => setPassword({ ...password, hasChanged: true, value: e.target.value })
        }
      />
      {
        password.hasChanged && !password.value && <p>Senha Obrigatória</p>
      }

      <button
        type="submit"
        data-testid="common_login__button-login"
        onClick={ handleLogin }
        disabled={ !isEmailValid(email.value) || password.value.length < minPwdLength }
      >
        Entrar
      </button>
      <button
        type="submit"
        data-testid="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Registrar
      </button>
      {
        !loginResponse
          ? (
            <p
              data-testid="common_login__element-invalid-email"
            >
              Email ou senha inválidos
            </p>
          )
          : null
      }
    </div>
  );
}

export default Login;
