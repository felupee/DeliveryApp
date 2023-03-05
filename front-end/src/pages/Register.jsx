import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContext from '../Context/MainContext';
import api from '../api';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);

  const navigate = useNavigate();
  const { isEmailValid, setStorageData } = useContext(MainContext);

  const minFullNameLength = 12;
  const minPwdLength = 6;

  const verifyInputs = () => !isEmailValid(email)
  || fullName.length < minFullNameLength || password.length < minPwdLength;

  const isDisabled = verifyInputs();

  const resetInputs = () => {
    setFullName('');
    setEmail('');
    setPassword('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    api.post('/register', {
      name: fullName, email, password,
    }).then((response) => {
      resetInputs();
      setStorageData(response.data);
      navigate('/customer/products');
    })
      .catch((error) => {
        console.log(error);
        setUserExists(true);
      });
  };
  return (
    <section>
      <form onSubmit={ handleRegister }>
        <input
          type="text"
          data-testid="common_register__input-name"
          placeholder="Digite seu nome completo"
          value={ fullName }
          onChange={ ({ target }) => setFullName(target.value) }
        />
        <input
          type="text"
          data-testid="common_register__input-email"
          placeholder="Digite seu email"
          value={ email }
          onChange={ ({ target }) => {
            setEmail(target.value);
            setUserExists(false);
          } }
        />
        {
          (email && !isEmailValid(email)) || userExists
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
          type="text"
          data-testid="common_register__input-password"
          placeholder="Digite uma senha"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
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
