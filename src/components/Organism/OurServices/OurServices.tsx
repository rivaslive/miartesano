import { Col, Row } from 'react-grid-system';

import Title from 'components/Atoms/Title';

import { StyleContent, StyleImage, StyleWrapper } from './style';

const OurServices = (props: BaseComponent) => {
  return (
    <StyleWrapper {...props}>
      <Title color="$text" margin="30px 0">
        Nuestros Servicios
      </Title>

      <StyleContent>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <StyleImage
              loading="lazy"
              src="https://mercandu.nyc3.digitaloceanspaces.com/discover/ce24923f-15c7-475d-a889-ad9d3c58a5c6.png"
              alt=""
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <StyleImage
              loading="lazy"
              src="https://mercandu.com/img/home/home-col-1.jpg"
              alt=""
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <StyleImage
              loading="lazy"
              src="https://mercandu.com/img/home/home-col-3.png"
              alt=""
            />
          </Col>
          <Col xs={12} md={6} lg={3}>
            <StyleImage
              loading="lazy"
              src="https://mercandu.nyc3.digitaloceanspaces.com/discover/19d8a67a-9b75-44fe-b1b9-fe4a7b2e0180.png"
              alt=""
            />
          </Col>
        </Row>
      </StyleContent>
    </StyleWrapper>
  );
};

export default OurServices;
