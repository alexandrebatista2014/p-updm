import React from 'react';

// Import image - modal
import Modal0 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal0.jpg';
import Modal1 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal1.jpg';
import Modal2 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal2.jpg';
import Modal3 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal3.jpg';
import Modal4 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal4.jpg';
import Modal5 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal5.jpg';
import Modal6 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal6.jpg';
import Modal7 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal7.jpg';
import Modal8 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal8.jpg';
import Modal9 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal9.jpg';
import Modal10 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal10.jpg';
import Modal11 from '../Assets/Image/galeria/modal/un-paso-del-mar-modal11.jpg';

const ModalGaleria = () => {
  return (
    <>
      {/* <!-- Modal  --> */}
      <div
        id="galeriaModal"
        className="modal fade custom"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {/* <!-- Carousel markup goes here --> */}
              <div
                id="carouselGaleria"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselGaleria"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#carouselGaleria" data-slide-to="1"></li>
                  <li data-target="#carouselGaleria" data-slide-to="2"></li>
                  <li data-target="#carouselGaleria" data-slide-to="3"></li>
                  <li data-target="#carouselGaleria" data-slide-to="4"></li>
                  <li data-target="#carouselGaleria" data-slide-to="5"></li>
                  <li data-target="#carouselGaleria" data-slide-to="6"></li>
                  <li data-target="#carouselGaleria" data-slide-to="7"></li>
                  <li data-target="#carouselGaleria" data-slide-to="8"></li>
                  <li data-target="#carouselGaleria" data-slide-to="9"></li>
                  <li data-target="#carouselGaleria" data-slide-to="10"></li>
                  <li data-target="#carouselGaleria" data-slide-to="11"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={Modal0} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal1} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal2} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal3} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal4} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal5} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal6} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal7} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal8} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal9} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal10} alt="teste2" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={Modal11} alt="teste2" />
                  </div>
                </div>

                <a
                  className="carousel-control-prev"
                  href="#carouselGaleria"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselGaleria"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGaleria;
