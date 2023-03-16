/*
Componente que renderiza la lista de las tiendas
*/
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card.js";

//Funcion que calcula la distancia entre dos coordenadas
function calc(lat1, lat2, lon1, lon2) {
  var R = 6371e3; // metres
  var φ1 = (lat1 * Math.PI) / 180;
  var φ2 = (lat2 * Math.PI) / 180;
  var Δφ = ((lat2 - lat1) * Math.PI) / 180;
  var Δλ = ((lon2 - lon1) * Math.PI) / 180;

  var a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  var d = R * c;

  d = d / 1000;
  d = d * 10;
  d = d | 0;
  return d / 10;
}

const ListCards = (props) => {
  let objetos = [];
  props.stores.map((item) => {
    let dist = calc(props.lat, item.position.lat, props.lon, item.position.lng);
    item.dist = dist;
    objetos.push(item);
  });
  //ordena las tiendas por la distancia al usuario

  objetos.sort(function (a, b) {
    return a.dist - b.dist;
  });
  return (
    <div>
      <ul>
        {objetos.map((item) => (
          <div key={item._id}>
            <Card item={item} lat={props.lat} lon={props.lon}></Card>
          </div>
        ))}
      </ul>
    </div>
  );
};

ListCards.propTypes = {
  stores: PropTypes.array.isRequired,
};

export default ListCards;
