import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import BannerReserva from '../Componentes/BannerReserva';

import Lazer1 from '../Assets/Image/lazer1.jpg';
import Lazer2 from '../Assets/Image/lazer2.jpg';
import Bussola from '../Assets/Image/bussola.png';

const Lazer = () => {
  return (
    <>
      {/* Banner topo */}
      <section className="banner-lazer">
        <Container>
          <Row className="justify-content-center text-center">
            <Col sm={11} lg={8}>
              <h1 className="titulo-lg">Un Paso Del Mar</h1>
              <span className="destaque-lg">
                Como o nome sugere, estamos a um passo do mar
              </span>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Destaque Icons */}
      <section className="destaque-lazer">
        <Container>
          <Row className="justify-content-center">
            <Col sm={11} lg={8}>
              <div className="titulo-body text-center mb-4 mb-md-0">
                <h1>Uma Localização privilegiada</h1>
                <p>
                  Un Paso Del Mar surge do desejo de proporcionar conforto e
                  lazer respeitando a natureza. Localizada em um dos cantos mais
                  charmosos de Maracaípe – o Pontal de Maracaípe – Praia de
                  águas mornas e tranquilas, onde o rio encontra o mar.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={4}>
              <Card>
                <span>Icon</span>
                <h4>Passeios</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  voluptates.
                </p>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card>
                <span>Icon</span>
                <h4>Trilhas</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  voluptates.
                </p>
              </Card>
            </Col>
            <Col sm={12} lg={4}>
              <Card>
                <span>Icon</span>
                <h4>Mergulho</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                  voluptates.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Bússola */}
      <section className="bussola">
        <Image src={Bussola} alt="Bússola" />
      </section>

      {/* Descrição Litoral Sul */}
      <section>
        <Container className="p-0" fluid>
          <Row noGutters={true} className="align-items-center">
            <Col lg={{ span: 5, offset: 1 }}>
              <div className="titulo-body text-center text-md-left mb-4 mb-md-0">
                <h2>Litoral Sul</h2>
                <p>
                  O litoral sul de Pernambuco é uma das regiões mais visitadas
                  do nordeste brasileiro e sem dúvida uma das mais bonitas
                  também. A variedade de suas praias, os coqueirais e as
                  piscinas naturais são suas marcas registradas, somado ao clima
                  que permite desfrutá-las o ano inteiro.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <Image src={Lazer2} alt="Litoral Sul" fluid />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Passeios & Lazer */}
      <section>
        <Container className="p-0" fluid>
          <Row noGutters={true} className="align-items-center">
            <Col lg={6}>
              <Image src={Lazer1} alt="Litoral Sul" fluid />
            </Col>
            <Col lg={5}>
              <div className="titulo-body text-center text-md-right mb-4 mb-md-0">
                <h2>Porto de Galinhas</h2>
                <p>
                  Porto de Galinhas é nossa praia mais conhecida! O motivo são
                  suas lindas piscinas naturais com águas mornas e cristalinas o
                  ano todo. Além disso, o passeio pelo seu centrinho é outro
                  ponto imperdível, sempre bem movimentado, conta com uma grande
                  variedade de lojas de artesanato local, bares e restaurantes,
                  onde você pode saborear os mais diversos pratos típicos da
                  região.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Frase final */}
      <section className="page-section">
        <Container>
          <Row>
            <Col className="text-center">
              <h4>
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Natus, ipsum."
              </h4>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
                adipisci?
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <BannerReserva />
    </>
  );
};

export default Lazer;
