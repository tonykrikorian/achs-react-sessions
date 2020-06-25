import { combineReducers } from "redux";
import pokemonVault from "../actions/pokemon.actions";
import pokemonReducer from "../reducers/pokemon.reducer";

export default combineReducers({
  [pokemonVault.Key]: pokemonReducer
});
