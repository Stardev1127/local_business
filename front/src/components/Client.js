/*
Este es el componente principal del cliente
*/
import React, { useState, useEffect } from "react";
import ListCards from "./ListCards.js";
import Nav from "../Nav.js";
import Maps from "./Maps.js";
import "../Client.css";

const apikey = "";

const googlemapsurl =
  "https://maps.googleapis.com/maps/api/js?key=" +
  apikey +
  "&libraries=geometry,drawing,places";
const Client = () => {
  //variables de estado
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [lat, setLat] = useState(4.7108341);
  const [lon, setLon] = useState(-74.0490092);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  navigator.geolocation.watchPosition((pos) => {
    setLat(pos.coords.latitude);
    setLon(pos.coords.longitude);
  });
  const setWS = () => {
    //var socket = new WebSocket("wss://reservamos.herokuapp.com");
    //var socket = new WebSocket("ws://localhost:3001/");
    var socket = new WebSocket(window.location.origin.replace(/^http/, "ws"));
    let dir = window.location.origin.replace(/^http/, "ws");
    socket.onopen = () => {
      socket.onmessage = (mensaje) => {
        fetch("./getRestaurants")
          .then((res) => res.json())
          .then(
            (result) => {
              setItems(result);
            },
            // Nota: es importante manejar errores aquí y no en
            // un bloque catch() para que no interceptemos errores
            // de errores reales en los componentes.
            (error) => {
              setError(error);
            }
          );
      };
    };
  };
  useEffect(() => {
    setWS();
    const geo = navigator.geolocation.getCurrentPosition(function success(pos) {
      var crd = pos.coords;
      setLat(crd.latitude);
      setLon(crd.longitude);
    });

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    sleep(4000);
    fetch("./getRestaurants")
      .then((res) => res.json())
      .then(
        (result) => {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="Client">
        <Nav></Nav>
        <div>
          <div id="storesTittleDiv">
            <h1 id="storesTitle" className="intro-title mb-4">
              Restaurantes
            </h1>
          </div>
          <br></br>

          <br></br>
          <div className="storesTittleDiv2"></div>
        </div>
        <div>
          <div className="row row-height">
            <div id="storesDiv" className="col-md-6 left ">
              <ListCards stores={items} lat={lat} lon={lon}></ListCards>
            </div>

            <div className="col-md-6 ">
              <div id="rowDiv">
                <Maps
                  isMarkerShown
                  googleMapURL={googlemapsurl}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div style={{ height: `100%`, width: `100%` }} />
                  }
                  mapElement={<div style={{ height: `80vh` }} />}
                  mar={{ lat: lat, lng: lon }}
                  tiendas={items}
                ></Maps>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Client;
