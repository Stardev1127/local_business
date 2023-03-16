import React from "react";
import NavUser from "../NavUser.js";

const FormAddStore = () => {
  return (
    <div>
      <NavUser></NavUser>
      <div className="container">
      <h1></h1>
      <div className="row">
      <div className="col-sm-4 col-sm-offset-3"></div>

        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-iconno">
                <span className="fa fa-shopping-cart"></span>
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Agregar un Establecimiento</h2>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="row">
          <div className="col-sm-4 col-sm-offset-3"></div>

          <div className="col-sm-4 col-sm-offset-3">
            <form action="/addStore" method="post">
              <div className="form-group">
                <label htmlFor="nameInput">Nombre</label>
                <input
                  id="nameInput"
                  placeholder="Tienda de Don Luis"
                  type="text"
                  className="form-control"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="addInput">Dirección</label>
                <input
                  id="addInput"
                  placeholder="calle 127d 1983"
                  type="text"
                  className="form-control"
                  name="address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneInput">Teléfono</label>
                <input
                  id="phoneInput"
                  placeholder="3193970054"
                  type="text"
                  className="form-control"
                  name="phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="imageInput">URL de la imagen</label>
                <input
                  id="imageInput"
                  placeholder="https://blog.rappi.com/masa.jpg"
                  type="text"
                  className="form-control"
                  name="image"
                />
              </div>
              <div className="form-group">
                <label htmlFor="typeInput">Tipo de comida/establecimiento</label>
                <input
                  id="typeInput"
                  placeholder="Comida Asiatica, sushi"
                  type="text"
                  className="form-control"
                  name="foodType"
                />
              </div>
              <div className="form-group">
                <label htmlFor="sizeInput">Capacidad del establecimiento</label>
                <input
                  id="sizeInput"
                  placeholder="30"
                  type="text"
                  className="form-control"
                  name="nMax"
                />
              </div>
              <div className="form-group">
                <label htmlFor="descInput">Descripción</label>
                <textarea
                  id="descInput"
                  placeholder="Minimercado de frutas y verduras"
                  className="form-control"
                  name="description"
                  rows="4"
                  cols="40"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-info btn-lg">
                Agregar
              </button>
              <hr />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddStore;
