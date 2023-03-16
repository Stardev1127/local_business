import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Profile = (props) => {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./getUserRestaurants")
      .then((res) =>{
        console.log("respuesta get getUserRestaurants", res);
        return res.json()})
      .then(
        (result) => {
          console.log("resultado items en profile", result);
          setItems(result);
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setError(error);
        }
      )
      .then(() => setIsLoaded(true));
  }, []);




  return (
    <div className="container">
      <h1></h1>
      <div className="row">
        <div className="col-md-4"></div>

        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-iconno">
                <span className="fa fa-user"></span>
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Perfil</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <div className="divee">
            <h2 className="title-v">ID: {props._id}</h2>
            <br />
            <h2 className="title-v">Usuario: {props.username}</h2>
            <br />
            <h2 className="title-v">Fecha de Nacimiento: {props.date}</h2>
            <br />
            <h2 className="title-v">Celular: {props.phone}</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4"></div>

        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-iconno">
                <span className="fa fa-home"></span>
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Establecimientos</h2>

              </div>
            </div>
          </div>
        </div>
      </div>



    <div className="row">
    <div className="col-md-3"></div>
      <div className="col-md-8">
      <ul>
        {items.map((item) => (
          <div key={item._id}>
            <br />
            <h2 className="title-v">{item.name}</h2>
            <h2 className="title-v">Tipo de Comida: {item.foodType}</h2>
            <h2 className="title-v">Descripción: {item.description}</h2>
            <br />
          </div>

        ))}
      </ul>
    </div>
    </div>






    </div>
  );
};

Profile.propTypes = {
  _id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
export default Profile;
