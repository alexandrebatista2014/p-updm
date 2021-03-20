import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BannerDestaque = () => {
  return (
    <section className="banner banner-destaque">
      <Container>
        <Row className="justify-content-md-center">
          <Col sm="11" md="8">
            <div className="titulo-body text-center">
              <h2 className="text-shadown">Nossas Acomodação</h2>
              <p className="text-shadown text-white">
                Um espaço planejado para oferecer o máximo de conforto e bem
                estar aos nossos hóspedes. Equipados com ar-condicionado, wifi,
                cama super confortável, toalhas macias, amenities, e muito
                mais...
              </p>
              <a href="#1" class="btn btn-lg btn-primary wobble">
                Conheça cada Detalhe
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerDestaque;
