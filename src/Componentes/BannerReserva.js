import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BannerReserva = () => {
  return (
    <section className="page-section banner-reserva">
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={'12'} md={'10'} lg="8">
            <div className="titulo-body text-center">
              <h2 className="text-shadown mb-5">
                "Garanta Nossa Menor Tarifa"
              </h2>
              <a href="#1" class="btn btn-lg btn-primary wobble">
                Faça uma reserva online
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerReserva;
