import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const Footer = () => {
  return (
    <Footer className="page-section">
      <Container>
        <Row>
          <Col>
            <h5>Navegação</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              perspiciatis?
            </p>
            <a href="#5">
              <span>Siga nosso Instagram</span>
            </a>
          </Col>

          <Col>
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

          <Col>
            <h5>Proximidades</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a href="#1">
                  Cabo Santo Agustinho <Badge variant="secondary">37km</Badge>
                </a>
              </li>
              <li>
                <a href="#2">
                  Praia do Muro Alto <Badge variant="secondary">37km</Badge>
                </a>
              </li>
              <li>
                <a href="#3">
                  Porto de Galinhas <Badge variant="secondary">37km</Badge>
                </a>
              </li>
              <li>
                <a href="#4">
                  Praia dos Carneiros <Badge variant="secondary">37km</Badge>
                </a>
              </li>
            </ul>
          </Col>

          <Col>
            <h5>Contato</h5>
            <ul>
              <li>
                <span>(81)</span>3333-3333
              </li>
              <li>
                <span>(81)</span>99999-9999
              </li>
              <li>reservas@unpasodelmarcom.br</li>
            </ul>
            <p>Av. Beira Mar, S/N Ipojuca - PE 55590-000</p>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default Footer;
