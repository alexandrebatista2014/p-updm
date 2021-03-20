import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Carousel from './Componentes/Carousel';
import BannerDestaque from './Componentes/BannerDestaque';
import BannerServicos from './Componentes/BannerServicos';
import BannerChamada from './Componentes/BannerChamada';

// Imagens importadas
import Img1 from './Assets/Image/home/un-paso-del-mar-praia-rede.jpg';
import Img2 from './Assets/Image/home/un-paso-del-mar-praia-cerveja.jpg';
import Img3 from './Assets/Image/home/un-paso-del-mar-praia-mar.jpg';
import Img4 from './Assets/Image/home/un-paso-del-mar-praia-deck.jpg';
import Img5 from './Assets/Image/home/un-paso-del-mar-acomodacao.jpg';
import Img6 from './Assets/Image/home/un-paso-del-mar-piscina.jpg';

const Home = () => {
  return (
    <>
      <Carousel />

      {/* Início descrição curta - Pousada */}
      <section className="page-section">
        <Container>
          <Row>
            <Col md={12} lg={6} className="mb-3 mb-lg-0">
              <div className="titulo-body text-center text-md-left mb-4 mb-md-0">
                <h1>Un Paso Del Mar</h1>
                <p>
                  Un Paso Del Mar surge do desejo de proporcionar conforto e
                  lazer respeitando a natureza. Localizada em um dos cantos mais
                  charmosos de Maracaípe – o Pontal de Maracaípe – Praia de
                  águas mornas e tranquilas, onde o rio encontra o mar.
                </p>
                <a href="#1" class="btn btn-lg btn-primary wobble">
                  Conheça nossa Estrutura
                </a>
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
      {/* Fim descrição curta - Pousada */}

      <BannerDestaque />

      {/* Início descrição Maracaípe */}
      <section className="page-section">
        <Container>
          <Row>
            <Col sm={6} md={3}>
              <Card className="mb-3 hover-shadow ">
                <Card.Img variant="top" src={Img1} />
              </Card>
            </Col>
            <Col sm={6} md={3}>
              <Card className="mb-3 mt-md-5 hover-shadow">
                <Card.Img variant="top" src={Img2} />
              </Card>
            </Col>
            <Col md={3} className="d-none d-md-block">
              <Card className="mb-3 hover-shadow">
                <Card.Img variant="top" src={Img3} />
              </Card>
            </Col>
            <Col md={3} className="d-none d-md-block">
              <Card className="mb-3 mt-md-5 hover-shadow">
                <Card.Img variant="top" src={Img4} />
              </Card>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={12} lg={6} className="mt-5">
              <div className="titulo-body">
                <h1>Portal de Maracaípe</h1>
                <p className="font-escrita">
                  Pontal de Maracaípe, o paraíso onde escolhemos estar!
                </p>
                <a href="#a" class="btn btn-lg btn-primary wobble">
                  Conheça a Região
                </a>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="pl-4 pr-4 pt-4 pt-lg-5 mt-lg-4">
                <p>
                  Nas águas rasas e tranquilas podemos nos banhar, praticar
                  esportes náuticos e na maré baixa podemos desfrutar de suas
                  belíssimas piscinas naturais que se formam quase em frente da
                  pousada.
                </p>
                <p>
                  Além das opções de passeio de jangada nos mangues, nossos
                  visitantes podem conhecer o berço de reprodução dos
                  cavalos-marinhos. Essas são algumas das atrações que não podem
                  ficar de fora.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Fim descrição Maracaípe */}

      <BannerServicos />

      {/* Início Localização */}
      <section className="page-section localizacao">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <div className="titulo-body">
                <h2>Localização</h2>
                <p>
                  Saindo do aeroporto internacional de Guarapares em Recife,
                  pegue a estrada com destino a Porto de Galinhas. Ao passar por
                  Porto continue na rodovia. Maracaípe fica na terceira
                  rotatória. Siga por mais 2km para encontrar nossa pousada.
                </p>
                <a
                  href="http://encurtador.com.br/mEIW7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Acesse o Google Maps
                </a>
                <br />
                <a href="contato" target="_blank" rel="noreferrer">
                  <span className="destaque">
                    Entre em contato e solicite nosso serviço de transfer!
                  </span>
                </a>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      {/* Fim localização */}

      <BannerChamada />
    </>
  );
};

export default Home;
