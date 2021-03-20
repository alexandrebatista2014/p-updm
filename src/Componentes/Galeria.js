import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import ModalGaleria from './ModalGaleria';

// Import image - thumb
import ImgT0 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb0.jpg';
import ImgT1 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb1.jpg';
import ImgT2 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb2.jpg';
import ImgT3 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb3.jpg';
import ImgT4 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb4.jpg';
import ImgT5 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb5.jpg';
import ImgT6 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb6.jpg';
import ImgT7 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb7.jpg';
import ImgT8 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb8.jpg';
import ImgT9 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb9.jpg';
import ImgT10 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb10.jpg';
import ImgT11 from '../Assets/Image/galeria/thumb/un-paso-del-mar-thumb11.jpg';

const Galeria = () => {
  return (
    <>
      <Row data-toggle="modal" data-target="#galeriaModal">
        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT0}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="0"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT1}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="1"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT2}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="2"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT3}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="3"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT4}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="4"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT5}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="5"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT6}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="6"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT7}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="7"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT8}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="8"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT9}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="9"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT10}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="10"
            />
          </Card>
        </Col>

        <Col sm={6} lg={3} className="pb-4">
          <Card>
            <img
              src={ImgT11}
              fluid
              alt="teste"
              data-target="#carouselGaleria"
              data-slide-to="11"
            />
          </Card>
        </Col>
      </Row>

      <ModalGaleria />
    </>
  );
};

export default Galeria;
