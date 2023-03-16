import React from "react";
import Nav from "../Nav.js";
import "../Home.css";


const Home = () =>{

  return(<div className="Home">
    <Nav></Nav>



  <div className="intro intro-carousel">
    <div id="carousel" className="owl-carousel owl-theme">
      <div className="carousel-item-a intro-item bg-image" style={{ backgroundImage: `url(${require("../images/prueba2.jpg")})` }}>
        <div className="overlay overlay-a"></div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="intro-body">
                    <p className="intro-title-top">#ContralElCovidTodos</p>
                    <h1 className="intro-title mb-4">
                      <span className="color-b">Apoya</span> a tus establecimientos
                    </h1>
                    <p className="intro-subtitle intro-price">
                      <a href="/client"><span className="price-a">Reserva Ahora</span></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<section className="section-services section-t8">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title-wrap d-flex justify-content-between">
            <div className="title-box">
              <h2 className="title-a">Nuestros Servicios</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
                <span className="fa fa-list"></span>
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Publica</h2>
              </div>
            </div>
            <div className="card-body-c">
              <p className="content-c">
                Inicia sesión o crea una cuenta para poder facilmente publicar
                tu establecimiento y que las personas puedan reservar un lugar.
              </p>
            </div>
            <div className="card-footer-c">
              <a href="/signup" className="link-c link-icon">Crea una cuenta
                <span className="ion-ios-arrow-forward"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
                <span className="fa fa-home"></span>
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Reserva</h2>
              </div>
            </div>
            <div className="card-body-c">
              <p className="content-c">
                Visita tu establecimiento favorito. Revisa la disponibilidad del sitio donde quieres ir
                y haz tu reserva.
              </p>
            </div>
            <div className="card-footer-c">
              <a href="/client" className="link-c link-icon">Ver Establecimientos
                <span className="ion-ios-arrow-forward"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
                <span className="fa fa-usd"></span>
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Apoya</h2>
              </div>
            </div>
            <div className="card-body-c">
              <p className="content-c">
                Usando reserVAMOS apoyas a que mas establecimientos puedan seguir generando empleo y
                promueves a los pequeños empresarios.
              </p>
            </div>
            <div className="card-footer-c">
              <a href="https://digitalpolicylaw.com/uber-eats-ofrece-opcion-para-donaciones-a-restaurantes/" className="link-c link-icon">Conoce más
                <span className="ion-ios-arrow-forward"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

















  <footer>
    <div className="container">
      <div className="row">
          <div className="copyright-footer">
            <p className="copyright color-text-a">
              &copy;
              <span className="color-a"> Valentina Chacon - Juan Diego Arango</span> .
            </p>
          </div>
        </div>
      </div>
  </footer>








    </div>);
}

export default Home;