import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { USER_POST } from '../../Api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/user';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const dispatch = useDispatch();
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok)
      dispatch(
        userLogin({ username: username.value, password: password.value }),
      );
  }

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Registering...</Button>
        ) : (
          <Button>Register</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;