import React from "react";

const FormSignup = () => {
  return (
    <div className="container">
      <h1></h1>
      <div className="row">
        <div className="col-sm-4 col-sm-offset-3"> </div>

        <div className="col-sm-4 col-sm-offset-3">
          <div className="col-md-4">
            <div className="card-box-c foo">
              <div className="card-header-c d-flex">
                <div className="card-box-iconn">
                  <span className="fa fa-sign-in"></span>
                </div>
                <div className="card-title-c align-self-center">
                  <h2 className="title-c">Registro</h2>
                </div>
              </div>
            </div>
          </div>

          <form action="/passport/signup" method="post">
            <div className="form-group">
              <label htmlFor="userInput">Usuario</label>
              <input
                id="userInput"
                placeholder="JuanPerez30"
                type="text"
                className="form-control"
                name="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateInput">Fecha de Nacimiento</label>
              <input
                id="dateInput"
                placeholder="30-05-1990"
                type="date"
                className="form-control"
                name="date"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneInput">Celular</label>
              <input
                id="phoneInput"
                placeholder="3194294588"
                type="text"
                className="form-control"
                name="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="passInput">Contraseña</label>
              <input
                id="passInput"
                placeholder="contraseña"
                type="password"
                className="form-control"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-entrar btn-lg">
              Registrarse
            </button>
          </form>
          <hr />

          <p>
            Ya tiene una cuenta? <a href="/login">Ingresar</a>
          </p>
          <p>
            Ir a<a href="/"> Inicio</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormSignup;
