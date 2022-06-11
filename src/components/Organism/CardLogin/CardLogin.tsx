import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { ChangeEvent, useState } from 'react';

import { ROUTES } from 'config';
import { AUTH_LOGIN } from 'graphql/auth';
import Text from 'components/Atoms/Text';
import Form from 'components/Atoms/Form';
import Title from 'components/Atoms/Title';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import GoogleButton from 'components/Atoms/GoogleButton';
import {
  StyleCardLogin,
  StyleCheckbox,
  StyleDivider,
  StyleFooter,
} from './style';

const CardLogin = (props: BaseComponent) => {
  const { query, ...router } = useRouter();
  const [remember, setRemember] = useState(true);
  const [insertEmail, setInsertEmail] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const [onLoginUser, { loading }] = useMutation(AUTH_LOGIN);

  const handleEmail = () => {
    setInsertEmail(true);
  };

  const onLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const { data, errors } = await onLoginUser({
        variables: {
          email,
          password,
        },
      });

      // @ts-ignore
      if (errors) return setError(errors?.message as string);

      if (data.jwt) {
        console.log(data.jwt);

        const redirect = query?.redirect as string | undefined;
        if (redirect) {
          const url = redirect.replace(window.location.origin, '');
          router.push(url || '/').then();
        }
      }
      return data.jwt as string;
    } catch (e) {
      // @ts-ignore
      return setError(e.message as string);
    }
  };

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setRemember(e.target.checked);
  };

  const changeValues = (values: any) => {
    values?.email && setEmail(values.email as string);
    values?.password && setPassword(values.password as string);
  };

  return (
    <StyleCardLogin {...props}>
      <Title align="center">Hola</Title>
      <Text align="center">
        Inicia sesión en <b>Mi Artesano</b> o{' '}
        <Link href={ROUTES.AUTH_SING_UP.path} passHref>
          <a>crea una cuenta</a>
        </Link>
      </Text>

      <Form
        onValuesChange={changeValues}
        onFinish={!insertEmail ? handleEmail : onLogin}
      >
        <Form.Item
          name="email"
          label="Email"
          isRequired
          rules={[{ type: 'email' }]}
        >
          <Input placeholder="text" />
        </Form.Item>
        {insertEmail && (
          <Form.Item name="password" label="Password" isRequired>
            <Input placeholder="password" type="password" />
          </Form.Item>
        )}
        <Form.Item>
          <Button
            type="submit"
            bgColor="$indigo"
            loading={loading}
            css={{ width: '100%', marginTop: 15 }}
            disabled={!insertEmail ? !email : !password}
          >
            {insertEmail ? 'Iniciar sesión' : 'Continuar'}
          </Button>
        </Form.Item>
        {error && (
          <Text fontWeight="600" align="right" fontSize="14px" color="$error">
            {error}
          </Text>
        )}
      </Form>

      <StyleDivider />

      <GoogleButton />

      {/* No cerrar sesión */}
      <StyleCheckbox onChange={onChangeChecked} value={remember}>
        No cerrar sesión
      </StyleCheckbox>
      <StyleFooter>
        <Text fontSize="14px" lineHeight="16px" align="center">
          ¿Estás usando un dispositivo público o compartido? Quita la marca de
          la casilla para proteger tu cuenta.{' '}
          <Link href="/">
            <a>Más información</a>
          </Link>
        </Text>
      </StyleFooter>
    </StyleCardLogin>
  );
};

export default CardLogin;
