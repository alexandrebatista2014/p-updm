import { React } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import BannerReserva from '../Componentes/BannerReserva';
import Galeria from '../Componentes/Galeria';

// Import image
import Img from '../Assets/Image/acomodacao.jpg';

const Acomodacao = () => {
  return (
    <>
      {/* Início banner fixo */}
      <section>
        <div className="banner-fixo">
          <h2>Acomodações</h2>
        </div>
      </section>
      {/* Fim banner fixo */}

      {/* Início descrição curta - Pousada */}
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
                <a href="#1" class="btn btn-lg btn-primary wobble">
                  Reserva Online
                </a>
              </div>
            </Col>
          </Row>

          {/* Início Ícones */}
          <Row className="text-center">
            <Col>
              <Card>
                <h4>Ar-condicionado</h4>
                <p>Equipamentos novos do modelo Split com alta potência.</p>
              </Card>
            </Col>
            <Col>
              <Card>
                <h4>Televisor</h4>
                <p>TV de 30 polegadas comprogramação digital</p>
              </Card>
            </Col>
            <Col>
              <Card>
                <h4>Wifi</h4>
                <p>Internet com fibra ótica com alta velocidade</p>
              </Card>
            </Col>
            <Col>
              <Card>
                <h4>Facilidades</h4>
                <p>Roupa de cama e banho, amenities, e limpeza diária.</p>
              </Card>
            </Col>
          </Row>
          {/* Fim Ícones */}
        </Container>
      </section>
      {/* Fim descrição curta - Pousada */}

      <section>
        <Container>
          <Row className="justify-content-center">
            <Col sm={11} md={8}>
              <Image src={Img} fluid />
              <p className="lead mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, porro?
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <!-- Início galeria --> */}
      <section className="page-section">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="titulo-body text-center">
                <h2>Nossas Acomodação</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quis, magni.
                </p>
              </div>
            </Col>
          </Row>
          {/* Componente galeria */}
          <Galeria />
        </Container>
      </section>

      {/* <!-- Fim galeria --> */}

      <BannerReserva />
    </>
  );
};

export default Acomodacao;
