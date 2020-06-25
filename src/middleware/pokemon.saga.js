import { all, takeLatest, call, put, delay, select } from "redux-saga/effects";
import PokemonVault from "../actions/pokemon.actions";
import WebClient from "../services/web-client";

function* getPokemon({ payload }) {
  try {
    /**
     * Obtiene el store actual, esto sirve para aplicar logica de negocio en
     * en el middleware en lugar de los actions
     */
    //const state = yield select();

    // const { data, status } = yield WebClient.Pokemon.Get(payload);
    const { data, status } = yield call(WebClient.pokemon.get, payload);

    yield delay(2000);

    if (status === 200) {
      yield put(PokemonVault.Action(PokemonVault.Type.GET_EXITO, data));
    } else {
      yield put(PokemonVault.Action(PokemonVault.Type.GET_ERROR, status));
    }
  } catch (err) {
    yield put(PokemonVault.Action(PokemonVault.Type.GET_ERROR, err));
  }
}

export default function* run() {
  yield all([takeLatest(PokemonVault.Type.GET, getPokemon)]);
}
