import { all, takeLatest, call, put, delay } from "redux-saga/effects";
import PokemonVault from "../actions/pokemon.actions";
import WebClient from "../services/web-client";

function* getPokemon({ payload }) {
  try {
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
