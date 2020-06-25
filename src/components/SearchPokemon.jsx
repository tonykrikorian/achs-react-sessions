import React, { Fragment, useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
//import WebClient from "../services/web-client";
import { useDispatch } from "react-redux";
import { usePartition } from "../Hooks/redux";
import PokemonVault from "../actions/pokemon.actions";

const SearchPokemon = () => {
  const dispatch = useDispatch();
  const pokemones = usePartition(PokemonVault);
  const [filtro, setFiltro] = useState(null);
  const [setDebounceFilter] = useDebouncedCallback(setFiltro, 1000);

  // const obtenerPokemon = async id => {
  //   try {
  //     const { data } = await WebClient.pokemon.get(id);
  //     dispatch(PokemonVault.GetPokemon(data));
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  useEffect(() => {
    if (filtro) {
      //obtenerPokemon(filtro);
      dispatch(PokemonVault.GetPokemon(filtro));
    }
  }, [filtro]);

  useEffect(() => {
    if (pokemones) console.log({ pokemones });
  }, [pokemones]);

  return (
    <Fragment>
      <div className="form-group mt-5">
        <label htmlFor="">Search</label>
        <input
          type="text"
          onChange={e => setDebounceFilter(e.currentTarget.value)}
          className="form-control"
        />
      </div>
    </Fragment>
  );
};
export default SearchPokemon;
