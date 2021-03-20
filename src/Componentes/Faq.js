import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const Faq = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Qual o horário de check-in e check-out?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Iniciamos o check-in as 14 horas. O tempo limite para check-out é
              ao meio dia (12h) do dia seguinte.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Como posso agendar o serviço de transfer?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              modi!{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Quais serviços estão inclusos na diária?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              modi!{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Crianças tem entrada Free?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              modi!{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Vocês tem Day Use?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              modi!{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Posso levar meu pet?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              modi!{' '}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default Faq;
