import { Col, Row } from 'react-grid-system';

import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';

import { StyleContent, StyleImage, StyleWrapper } from './style';
import CardHelpUs from '../../Molecules/CardHelpUs';

const HelpUs = (props: BaseComponent) => {
  return (
    <StyleWrapper {...props}>
      <Title
        lineHeight="3rem"
        margin="30px 0 0"
        css={{
          maxWidth: 700,
        }}
      >
        Ayuda a artesanos comprando con nosotros.
      </Title>

      <Text
        margin="20px 0 40px"
        css={{
          maxWidth: 700,
        }}
      >
        Por cada compra estas ayudanmdop al comercio real de personas de escazos
        recursos. Nuestros proveedores son 100% emprendedores los cuales llevan
        el sustento a sus hogares.
      </Text>

      <StyleContent>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <CardHelpUs
              description="“Todos los dias hago artesanías para sacar mi familia adelante MI ARTESANO, nos ayuda a poder vender nuestro producto y poder llevarlo a muchas màs personas”"
              src="https://images.pexels.com/photos/3760978/pexels-photo-3760978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <CardHelpUs
              src="https://images.pexels.com/photos/7195923/pexels-photo-7195923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              description="“Todos los dias hago artesanías para sacar mi familia adelante MI ARTESANO, nos ayuda a poder vender nuestro producto y poder llevarlo a muchas màs personas”"
            />
          </Col>
        </Row>
      </StyleContent>
    </StyleWrapper>
  );
};

export default HelpUs;
