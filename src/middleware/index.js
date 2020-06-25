import { all } from "redux-saga/effects";
import logger from "./logger";
import pokemonSaga from "./pokemon.saga";

export default function* combineMiddleware() {
  yield all([logger(), pokemonSaga()]);
}
