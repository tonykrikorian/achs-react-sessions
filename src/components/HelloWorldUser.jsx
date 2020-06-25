import React, { Fragment } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import PokemonAPI from "../services/web-client";
import { useAsync } from "react-use";

const HelloWorldUser = () => {
  const response = useAsync(() => {
    return PokemonAPI.pokemon.get(2);
  });

  const { id } = useParams();
  const history = useHistory();
  return (
    <Fragment>
      <div className="form-group">
        <span>HelloWorldUser:{id}</span>
        <br />
        <button className="btn btn-primary" onClick={() => history.push("/")}>
          Home
        </button>
        <Link to="/contacto">
          <button className="btn btn-success">Home</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default HelloWorldUser;
