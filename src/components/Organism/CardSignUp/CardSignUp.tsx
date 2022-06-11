import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'rc-field-form';
import { useRouter } from 'next/router';

import { ROUTES } from 'config';
import Text from 'components/Atoms/Text';
import Form from 'components/Atoms/Form';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import { Col, Row } from 'components/Atoms/Grid';
import GoogleButton from 'components/Atoms/GoogleButton';
import { StyleCardLogin, StyleDivider } from './style';

const CardSignUp = (props: BaseComponent) => {
  const [form] = useForm();
  const { query, ...router } = useRouter();
  const [validForm, setValidForm] = useState(false);

  const onSignup = (values: any) => {
    console.log(values);
    const redirect = query?.redirect as string | undefined;
    if (redirect) {
      const url = redirect.replace(window.location.origin, '');
      router.push(url || '/').then();
    }
  };

  const onFormChange = () => {
    let isValidForm = true;
    const errorArray = form.getFieldsError();

    for (let i = 0; i < errorArray.length; i += 1) {
      const { errors } = errorArray[i];
      if (errors.length !== 0) {
        isValidForm = false;
        break;
      }
    }

    setValidForm(isValidForm);
  };

  return (
    <StyleCardLogin {...props}>
      <Title align="center">Crear una cuenta</Title>
      <Text align="center">
        Únete a nosotros o{' '}
        <Link href={ROUTES.AUTH_LOGIN.path} passHref>
          <a>Inicia sesión</a>
        </Link>
      </Text>

      <Form form={form} onFinish={onSignup} onValuesChange={onFormChange}>
        <Row gutter={[{ xs: 0, sm: 0, md: 10 }, 0]}>
          <Col xs={24} md={12}>
            <Form.Item name="firstName" label="Nombres" isRequired>
              <Input placeholder="Nombres" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="lastName" label="Apellidos" isRequired>
              <Input placeholder="Apellidos" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          name="email"
          label="Email"
          isRequired
          rules={[{ type: 'email' }]}
        >
          <Input placeholder="text" />
        </Form.Item>
        <Form.Item name="password" label="Contraseña" isRequired>
          <Input type="password" placeholder="Contraseña" />
        </Form.Item>
        <Form.Item name="repeat_password" label="Repetir contraseña" isRequired>
          <Input type="password" placeholder="Repetir contraseña" />
        </Form.Item>

        <Text fontSize="14px" lineHeight="16px" align="center">
          Al crear una cuenta, aceptas nuestras{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={ROUTES.TERMS_OF_USE.path}
          >
            Condiciones de uso
          </a>{' '}
          y admites haber leído nuestro{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={ROUTES.NOTICE_OF_PRIVACY.path}
          >
            Aviso de privacidad.
          </a>
        </Text>

        <Form.Item>
          <Button
            type="submit"
            bgColor="$indigo"
            disabled={!validForm}
            css={{ width: '100%', marginTop: 15 }}
          >
            Crear cuenta
          </Button>
        </Form.Item>
      </Form>

      <StyleDivider />

      <GoogleButton />
    </StyleCardLogin>
  );
};

export default CardSignUp;
