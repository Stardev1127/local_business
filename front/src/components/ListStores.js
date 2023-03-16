import React from "react";
import Nav from "../Nav.js";

const ListStores = (props) => {
  return (
    <div className="r">
    <Nav></Nav>
    <h1></h1>
    <div className="row">
      <div className="col-md-4"></div>

        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-iconno">
                <span className="fa fa-check"></span>
              </div>
              <div className="card-title-c align-self-center">

                <h2 className="title-c">Confirmación</h2>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="well">
            <h2 className="title-d">Código de confirmación de la reserva: {Math.floor((Math.random() * 10000) + 1)}</h2>
            <br/>
            <p>
            ¿Quiere seguir buscando establecimientos? <a href="/client">Reservar</a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListStores;