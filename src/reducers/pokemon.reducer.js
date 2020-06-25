import pokemonVault from "../actions/pokemon.actions";

export default function pokemonReducer(store = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case pokemonVault.Type.GET: {
      return { ...store, loading: true };
    }
    case pokemonVault.Type.GET_EXITO: {
      const { id, name } = payload;
      return { ...store, [`"${id}"`]: name, loading: false };
    }
    case pokemonVault.Type.GET_ERROR: {
      const error = payload;
      return { ...store, loading: false, error };
    }
    default:
      return { ...store };
  }
}
