import React from 'react';
import BannerChamada from '../Componentes/BannerChamada';
import { Container, Row, Col } from 'react-bootstrap';
import Faq from '../Componentes/Faq';
import Formulario2 from '../Componentes/Formulario2';

const Contato = () => {
  return (
    <>
      {/* Início banner fixo */}
      <section>
        <div className="banner-fixo">
          <h2>Contato</h2>
        </div>
      </section>
      {/* Fim banner fixo */}

      <section className="page-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={12} lg={8}>
              <div className="titulo-body text-center">
                <h1>
                  Un Paso Del Mar surge do desejo de proporcionar conforto e
                  lazer respeitando a natureza.
                </h1>
                <p>
                  Localizada em um dos cantos mais charmosos de Maracaípe – o
                  Pontal de Maracaípe – a pousada foi projetada para ir de
                  encontro às causas ambientais, seja em reduzir os resíduos que
                  possam agredir o meio ambiente ou em promover a
                  conscientização ambiental entre a comunidade local,
                  colaboradores, hóspedes e visitantes.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <Formulario2 />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={12} md={5}>
              <h2 className="pb-4">Perguntas Frequêntes</h2>
              <Faq />
            </Col>
            <Col sm={12} md={3}>
              <h4>Endereço</h4>
              <p>Av. Beira Mar, S/N Ipojuca-PE, 55590-000</p>
              <a href="#1">Acesse o Google Maps</a>
            </Col>
          </Row>
        </Container>
      </section>
      <BannerChamada />
    </>
  );
};

export default Contato;
