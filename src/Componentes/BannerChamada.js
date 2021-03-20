import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BannerChamada = () => {
  return (
    <section className="page-section banner-chamada">
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={'12'} md={'10'} lg="8">
            <div className="titulo-body text-center">
              <h2 className="text-shadown">
                "Descanse, curta, aproveite cada momento"
              </h2>
              <p className="pb-0 mb-0">
                <span className="destaque">
                  Ideal para quem procura um destino com opções de lazer e
                  descanso.
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerChamada;
