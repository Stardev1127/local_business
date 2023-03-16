/*
Componente que renderiza cada tienda en un card
*/
import React, { useState } from "react";
import PropTypes from "prop-types";
import StarRatingComponent from "react-star-rating-component";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import dateFormat from "dateformat";
import "react-datepicker/dist/react-datepicker.css";

import "../card.css";

const customStyles = {
  content: {
    border: "10px",
    borderColor: "#000000",
    borderRadius: "35px",
    width: "600px",
    height: "700px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
//Props va a recibir las preguntas de la base de datos
//funcion que actualiza el rating de la tienda
function updateRating(id, rate) {
  fetch("/store/" + id, {
    method: "PUT", // or 'PUT'
    body: rate,
    headers: {
      "Content-Type": "application/json",
    }, // data can be `string` or {object}!
  })
    .then((res) => res.json())
    .then(
      (result) => {},
      // Nota: es importante manejar errores aquí y no en
      // un bloque catch() para que no interceptemos errores
      // de errores reales en los componentes.
      (error) => {
        console.log("fallamos");
      }
    );
}
function onStarClick(nextValue, prevValue, name) {
  let f = name.split("#");
  let id = f[0];
  let nRatings = parseInt(f[2]);
  let old = parseInt(f[1]);
  let newR = (old * nRatings + nextValue) / (nRatings + 1);
  nRatings = nRatings + 1;

  let rate = JSON.stringify({
    rating: newR,
    nRatings: nRatings,
  });
  updateRating(id, rate);
}

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  var now = new Date();
  const [startDate, setStartDate] = useState(now);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showHoras, setShowHoras] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  const [personas, setPrsonas] = useState(0);
  const [horarios, setHorarios] = useState([]);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  var subtitle;
  const dateChange = (date) => setStartDate(date);
  function selectedNum(value) {}
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function dateSelected(date) {
    const options1 = { year: "numeric", month: "numeric", day: "numeric" };

    setStartDate(date);
    const dateTimeFormat2 = new Intl.DateTimeFormat("en-GB", options1);
    let r = dateTimeFormat2.format(date);
    let f = r.split("/");
    let d = "" + f[0] + "-" + f[1] + "-" + f[2];
    console.log(d);

    fetch(
      "./available/" +
        props.item._id +
        "/" +
        d +
        "/" +
        personas +
        "/" +
        props.item.nMax
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setHorarios(result);
          setShowHoras(true);
        }
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
      );
  }

  {
    return (
      <div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
              {props.item.name}
            </h2>
            <h5>Hacer una reserva:</h5>
            <form action={"/reservation/" + props.item._id} method="post">
              <div className="form-group">
                <label for="exampleFormControlSelect1">
                  ¿Para cuantas personas?
                </label>
                <select
                  onChange={(value) => {
                    setPrsonas(parseInt(value.target.value));
                    setShowDatePicker(true);
                  }}
                  className="form-control"
                  type="number"
                  name="nPersonas"
                  id="exampleFormControlSelect1"
                >
                  <option
                    onSelect={() => {
                      setShowDatePicker(false);
                    }}
                  >
                    -
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option>
                  <option value={9}>9</option>
                  <option value={10}>10</option>
                </select>
              </div>
              {showDatePicker ? (
                <div className="form-group">
                  <label>¿Cuando?</label>

                  <DatePicker
                    dateFormat="dd-MM-yyyy"
                    selected={startDate}
                    onChange={(date) => {
                      dateSelected(date);
                    }}
                    className="form-control"
                    name="fecha"
                  />
                </div>
              ) : null}

              {showHoras ? (
                <div className="form-group">
                  <label for="exampleFormControlSelect1">¿A que hora?</label>
                  <select
                    onChange={() => {
                      setShowDatePicker(true);
                      setShowUserInfo(true);
                    }}
                    className="form-control"
                    id="exampleFormControlSelect1"
                    type="text"
                    className="form-control"
                    name="hora"
                  >
                    {horarios.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}
              {showUserInfo ? (
                <div>
                  <div className="form-group">
                    <label>Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Pablo Pérez"
                      name="nombre"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      name="correo"
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Celular</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="3103216457"
                      name="celular"
                    ></input>
                  </div>
                  <button type="submit" class="btn btn-info btn-lg">
                    Reservar
                  </button>
                </div>
              ) : null}
            </form>
          </Modal>
        </div>
        <div key={props.item._id} style={{ maxWidth: "50ww%" }}>
          <div className="card-header" id="headerCard">
            <div className="row">
              <div className="col-6">
                <div>A {props.item.dist} Km de distancia</div>
              </div>
            </div>
          </div>
          <div className="card-body text-dark">
            <div className="row">
              <div className="col-8">
                <h5 className="card-title">{props.item.name}</h5>
              </div>
              <div className="col-4">
                <div className="d-flex flex-row-reverse">
                  <div className="p-2">
                    <StarRatingComponent
                      id="stars"
                      name={
                        props.item._id +
                        "#" +
                        props.item.rating +
                        "#" +
                        props.item.nRatings
                      }
                      starCount={5}
                      value={props.item.rating}
                      emptyStarColor={"#e0e0e0"}
                      onStarClick={() => {}}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8" >
                <p className="card-text">{props.item.description}</p>

                <button
                  type="button"
                  className="botonCrearReserva"
                  onClick={() => {
                    openModal();
                  }}
                >
                  Hacer una reserva
                </button>
              </div>
              <div className="col-md-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <img
                    alt="Imagen del establecimiento"
                    className="card-img-top embed-responsive-item"
                    src={props.item.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Card.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Card;
