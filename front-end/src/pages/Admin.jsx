import React, { useState, useContext } from 'react';
import axios from 'axios';
import MainContext from '../Context/MainContext';

export default function Admin() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [selectedRole, setSelectedRole] = useState('customer');

  const { isEmailValid, storageData } = useContext(MainContext);

  const minFullNameLength = 12;
  const minPwdLength = 6;

  const verifyInputs = () => !isEmailValid(email)
  || fullName.length < minFullNameLength || password.length < minPwdLength;

  const isDisabled = verifyInputs();

  const config = {
    headers: {
      Authorization: storageData.token,
    },
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/admin/manage', {
      name: fullName, email, password, role: selectedRole,
    }, config).then((response) => {
      console.log(response.data);
      setFullName('');
      setEmail('');
      setPassword('');
      setSelectedRole('Customer');
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
          data-testid="admin_manage__input-name"
          placeholder="Digite seu nome completo"
          value={ fullName }
          onChange={ ({ target }) => setFullName(target.value) }
        />
        <input
          type="text"
          data-testid="admin_manage__input-email"
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
                data-testid="admin_manage__element-invalid-register"
              >
                Email inválido
              </p>
            )
            : null
        }
        <input
          type="text"
          data-testid="admin_manage__input-password"
          placeholder="Digite uma senha"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <select
          type="select"
          data-testid="admin_manage__select-role"
          value={ selectedRole }
          onChange={ ({ target }) => setSelectedRole(target.value) }
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
