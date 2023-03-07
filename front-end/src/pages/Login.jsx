import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../api';

import MainContext from '../Context/MainContext';

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
  const [isUserValid, setIsUserValid] = useState(true);

  const { isEmailValid, setStorageData } = useContext(MainContext);

  const navigate = useNavigate();

  const resetInputs = () => {
    setEmail({ hasChanged: false, value: '' });
    setPassword({ hasChanged: false, value: '' });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        email: email.value,
        password: password.value,
      });
      setStorageData(response.data);
      const { role } = response.data;
      navigate(role === 'administrator' ? '/admin/manage' : '/customer/products');
    } catch (error) {
      console.log(error.message);
      setIsUserValid(false);
      resetInputs();
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
        !isUserValid
          && (
            <p
              data-testid="common_login__element-invalid-email"
            >
              Email ou senha inválidos
            </p>
          )
      }
    </div>
  );
}

export default Login;
