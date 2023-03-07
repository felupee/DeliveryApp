import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../Context/MainContext';
import api from '../api';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
    userExists: false,
  });

  const navigate = useNavigate();
  const {
    isEmailValid,
    setStorageData,
  } = useContext(MainContext);

  const minFullNameLength = 12;
  const minPwdLength = 6;

  const verifyInputs = () => !isEmailValid(user.email)
  || user.name.length < minFullNameLength || user.password.length < minPwdLength;

  const isDisabled = verifyInputs();

  const resetInputs = () => {
    setUser({
      name: '',
      email: '',
      password: '',
      role: 'customer',
      userExists: false,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    api.post('/register', user).then((response) => {
      resetInputs();
      setStorageData(response.data);
      navigate('/customer/products');
    })
      .catch((error) => {
        console.log(error);
        setUserExists(true);
      });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  return (
    <section>
      <form onSubmit={ handleRegister }>
        <input
          type="text"
          name="name"
          data-testid="common_register__input-name"
          placeholder="Digite seu nome completo"
          value={ user.name }
          onChange={ handleChange }
        />
        <input
          type="email"
          name="email"
          data-testid="common_register__input-email"
          placeholder="Digite seu email"
          value={ user.email }
          onChange={ handleChange }
        />
        {
          (user.email && !isEmailValid(user.email)) || user.userExists
            ? (
              <p
                data-testid="common_register__element-invalid_register"
              >
                Email inválido
              </p>
            )
            : null
        }
        <input
          type="password"
          name="password"
          data-testid="common_register__input-password"
          placeholder="Digite uma senha"
          value={ user.password }
          onChange={ handleChange }
        />
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ isDisabled }
        >
          Registrar
        </button>
      </form>
    </section>
  );
}
