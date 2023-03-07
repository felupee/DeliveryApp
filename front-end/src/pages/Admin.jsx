import React, { useState, useContext } from 'react';
import MainContext from '../Context/MainContext';
import api from '../api';

export default function Admin() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
    userExists: false,
  });

  const { isEmailValid, storageData } = useContext(MainContext);

  const minFullNameLength = 12;
  const minPwdLength = 6;

  const verifyInputs = () => !isEmailValid(user.email)
  || user.name.length < minFullNameLength || user.password.length < minPwdLength;

  const isDisabled = verifyInputs();

  const config = {
    headers: {
      Authorization: storageData.token,
    },
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    api.post('/admin/manage', user, config)
      .then(() => {
        setUser({
          name: '',
          email: '',
          password: '',
          role: 'customer',
          userExists: false,
        });
      })
      .catch((error) => {
        console.log(error);
        setUser({ ...user, userExists: true });
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
          data-testid="admin_manage__input-name"
          placeholder="Digite seu nome completo"
          value={ user.name }
          onChange={ handleChange }
        />
        <input
          type="email"
          name="email"
          data-testid="admin_manage__input-email"
          placeholder="Digite seu email"
          value={ user.email }
          onChange={ handleChange }
        />
        {
          (user.email && !isEmailValid(user.email)) || user.userExists
            ? (
              <p
                data-testid="admin_manage__element-invalid-register"
              >
                Email inválido
              </p>
            )
            : null
        }
        <input
          type="password"
          name="password"
          data-testid="admin_manage__input-password"
          placeholder="Digite uma senha"
          value={ user.password }
          onChange={ handleChange }
        />
        <select
          type="select"
          name="role"
          data-testid="admin_manage__select-role"
          value={ user.selectedRole }
          onChange={ handleChange }
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="admin">Administrador</option>
        </select>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ isDisabled }
        >
          Registrar
        </button>
      </form>
    </section>
  );
}
