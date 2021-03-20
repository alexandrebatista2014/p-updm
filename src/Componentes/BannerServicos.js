import React from 'react';
import { Container, Row } from 'react-bootstrap';

const BannerServicos = () => {
  return (
    <section class="page-section banner banner-servicos">
      <Container>
        <Row>
          <div class="col-12 text-center">
            <h2>Serviços & Facilidades</h2>
          </div>

          <div class="col-12 col-md-6">
            <div class="row">
              <div class="col-12">
                <div class="d-flex item">
                  <div class="p-2 flex-shrink-1">
                    <span class="numerador">01</span>
                  </div>
                  <div class="p-2 w-100">
                    <h4>Restaurante</h4>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Animi quos atque dolorum magni laboriosam laudantium eum
                      id esse recusandae alias.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="d-flex item mt-md-2">
                  <div class="p-2 flex-shrink-1">
                    <span class="numerador">02</span>
                  </div>
                  <div class="p-2 w-100">
                    <h4>Café da manhã</h4>
                    <p>
                      Experimente um delicioso café da manhã regional preparado
                      na hora, além de opções váriadas como frutas, bolos e
                      pães.{' '}
                      <span className="text-bold">(Incluso na diária)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="row">
              <div class="col-12">
                <div class="d-flex item mt-md-5">
                  <div class="p-2 flex-shrink-1">
                    <span class="numerador">03</span>
                  </div>
                  <div class="p-2 w-100">
                    <h4>Lazer</h4>
                    <p>
                      Como nosso nome já diz, estamos a "um passo do mar" em um
                      lugar tranquilo, cercado pela natureza. Nossa estrutura
                      dispõe de piscina, wifi, churrasqueira, rooftop ...
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="d-flex item mt-md-2">
                  <div class="p-2 flex-shrink-1">
                    <span class="numerador">04</span>
                  </div>
                  <div class="p-2 w-100">
                    <h4>Serviço de Transfer</h4>
                    <p>
                      Para maior comodidade solicite nosso serviço de
                      “transfer”. Uma ótima opção para visitantes de primeira
                      viagem, que não conhecem a cidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 text-center pt-5">
            <a href="#1" class="btn btn-lg btn-primary wobble">
              Faça uma reserva online
            </a>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default BannerServicos;
