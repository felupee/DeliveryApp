import React from 'react';

function Login() {
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');

  return (
    <div>
      <input
        type="email"
        data-testid="common_login__input-email"
      />
      <input
        type="password"
        data-testid="common_login__input-password"
      />

      <button
        type="submit"
        data-testid="common_login__button-login"
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
