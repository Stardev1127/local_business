import React, { useState, useEffect } from "react";
import FormLogin from "./FormLogin.js";
import Profile from "./Profile.js";
import Nav from "../Nav.js";
import NavUser from "../NavUser.js";

const Login = () => {
  const [user, setUser] = useState(null);

  const onLogout = () => {
    fetch("/passport/logout").then(() => setUser(null));
  };

  useEffect(() => {
    fetch("/passport/getUser")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, []);

  return (
    <div>
      {!user ? (
        <div>
          <Nav></Nav>
          <FormLogin></FormLogin>
        </div>
      ) : (
        <div>
          <NavUser></NavUser>
          <div className="row">
            <div className="col-sm-3 col-sm-offset-3"></div>
            <div className="col-sm-3 col-sm-offset-3"></div>

            <div className="col-md-4">
              <button onClick={onLogout} className="btn btn-info btn-lg">
                Cerrar sesión
              </button>
            </div>
          </div>



          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Profile
                username={user.username}
                _id={user._id}
                phone={user.phone}
                date={user.date}
              ></Profile>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
