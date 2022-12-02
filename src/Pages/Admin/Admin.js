import React, { useContext } from 'react';
import Input from '../../Components/Form/Input/Input';
import { Form } from './style';
import Button from '../../Components/Form/Button/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../../Components/Helper/Error';

const Admin = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validade() && password.validade()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <Form onSubmit={handleSubmit}>
        <Input
          label='Usuário'
          type='text'
          name='username'
          {...username}
        ></Input>
        <Input
          label='Password'
          type='password'
          name='password'
          {...password}
        ></Input>
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error && 'Dados incorretos.'} />
      </Form>
    </div>
  );
};

export default Admin;
