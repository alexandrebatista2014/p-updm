import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import Logo from '../Assets/Image/logo-un-paso-del-mar.png';

const Footer2 = () => {
  return (
    <footer className="page-section pb-0">
      <Container>
        <Row>
          <Col>
            <br />
            <img
              className="logo-footer"
              src={Logo}
              alt="Logo Un Paso Del Mar"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={6} lg={3}>
            <h5>A Pousada</h5>
            <p>
              Un Paso Del Mar surge do desejo de proporcionar conforto e lazer
              respeitando a natureza.
            </p>
            <a
              href="https://www.instagram.com/unpasodelmar/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="destaque">Siga nosso Instagram</span>
            </a>
          </Col>

          <Col sm={6} lg={3}>
            <h5>Navegação</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a href="#1">A Pousada</a>
              </li>
              <li>
                <a href="#2">Acomodações</a>
              </li>
              <li>
                <a href="#3">Lazer</a>
              </li>
              <li>
                <a href="#4">Contato</a>
              </li>
            </ul>
          </Col>

          <Col sm={6} lg={3}>
            <h5 className="pt-5 pt-md-0">Proximidades</h5>
            <ul className="list-unstyled text-small locais">
              <li>
                Cabo Santo Agustinho <Badge>37km</Badge>
              </li>
              <li>
                Praia do Muro Alto <Badge variant="secondary">14,8km</Badge>
              </li>
              <li>
                Porto de Galinhas <Badge variant="secondary">4,7km</Badge>
              </li>
              <li>
                Praia dos Carneiros <Badge variant="secondary">54,9km</Badge>
              </li>
              <li>
                Aeroporto de Recife <Badge variant="secondary">56km</Badge>
              </li>
            </ul>
          </Col>

          <Col sm={6} lg={3}>
            <h5 className="pt-5 pt-md-0">Contato</h5>
            <ul className="list-unstyled contato-footer">
              <li>
                <span>(81)</span> 3333-3333
              </li>
              <li>
                <span>(81)</span> 9.9147-1174
              </li>
              <li>reservas@unpasodelmarcom.br</li>
            </ul>
            <p>
              Av. Beira Mar, S/N
              <br />
              Ipojuca-PE, 55590-000
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="pt-3">
            <p>&copy; 2020 Todos os direitos reservados by Un Paso Del Mar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer2;
