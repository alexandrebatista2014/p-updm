import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import Carousel from './../Componentes/Carousel';
import BannerServicos from './../Componentes/BannerServicos';
import BannerReserva from './../Componentes/BannerReserva';

// Import image
import Video from '../Assets/Image/acomodacao.jpg';
import Img5 from './../Assets/Image/home/un-paso-del-mar-acomodacao.jpg';
import Img6 from './../Assets/Image/home/un-paso-del-mar-praia-rede.jpg';

const Apousada = () => {
  return (
    <>
      {/* Slide */}
      <Carousel />

      {/* Descrição */}
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
                  Acomodações & Galeria
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Banner Serviços */}
      <BannerServicos />

      {/* Vídeo */}
      <section className="page-section">
        <Container>
          <Row className="justify-content-center">
            <Col sm={11} md={8}>
              <Image src={Video} fluid />
              <div className="text-center">
                <h4 className="mt-5">
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam, atque."
                </h4>
                <p className="lead mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem, porro?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Vídeo */}

      {/* Início descrição curta - Restaurante */}
      <section className="page-section py-0">
        <Container>
          <Row>
            <Col sm={6} lg={3}>
              <Card className="mb-3 mt-md-5 hover-shadow">
                <Card.Img variant="top" src={Img5} />
              </Card>
            </Col>
            <Col sm={6} lg={3}>
              <Card className="mb-3 hover-shadow">
                <Card.Img variant="top" src={Img6} />
              </Card>
            </Col>
            <Col md={12} lg={6} className="mb-3 mb-lg-0">
              <div className="titulo-body text-center text-md-left mb-4 mb-md-0">
                <h1>Restaurante / Bar</h1>
                <p>
                  Un Paso Del Mar surge do desejo de proporcionar conforto e
                  lazer respeitando a natureza. Localizada em um dos cantos mais
                  charmosos de Maracaípe – o Pontal de Maracaípe – Praia de
                  águas mornas e tranquilas, onde o rio encontra o mar.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Fim descrição curta - Restaurante */}

      {/* Início descrição curta - Ecofriendly */}
      <section className="page-section">
        <Container>
          <Row>
            <Col md={12} lg={6} className="mb-3 mb-lg-0">
              <div className="titulo-body text-center text-md-left mb-4 mb-md-0">
                <h1>Ecofriendly</h1>
                <p>
                  Un Paso Del Mar surge do desejo de proporcionar conforto e
                  lazer respeitando a natureza. Localizada em um dos cantos mais
                  charmosos de Maracaípe – o Pontal de Maracaípe – Praia de
                  águas mornas e tranquilas, onde o rio encontra o mar.
                </p>
              </div>
            </Col>
            <Col sm={6} lg={3}>
              <Card className="mb-3 mt-md-5 hover-shadow">
                <Card.Img variant="top" src={Img5} />
              </Card>
            </Col>
            <Col sm={6} lg={3}>
              <Card className="mb-3 hover-shadow">
                <Card.Img variant="top" src={Img6} />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Fim descrição curta - EcoFriendly */}

      <BannerReserva />
    </>
  );
};

export default Apousada;
