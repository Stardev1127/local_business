import React, { useState, useEffect } from "react";
import FormSignup from "./FormSignup.js";
import Profile from "./Profile.js";
import Nav from "../Nav.js";
import NavUser from "../NavUser.js";

const Signup = () => {
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
          <FormSignup></FormSignup>
        </div>
      ) : (
        <div>
          <NavUser></NavUser>
          <div className="row">
            <div className="col-sm-3 col-sm-offset-3"></div>
            <div className="col-sm-3 col-sm-offset-3">
              <Profile
                username={user.username}
                _id={user._id}
                password={user.password}
              ></Profile>
            </div>
            <div className="col-sm-3 col-sm-offset-3">
              <button onClick={onLogout} className="btn btn-info btn-lg">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
