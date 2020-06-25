import { CreateAction } from "./shared";

const KEY = "POKEMON";

const PokemonVault = {
  Key: KEY,
  Type: {
    GET: "GET",
    GET_EXITO: "GET_EXITO",
    GET_ERROR: "GET_ERROR"
  },

  Action: (type, payload) => CreateAction(PokemonVault.Key, type, payload),

  GetPokemon: pokemon => PokemonVault.Action(PokemonVault.Type.GET, pokemon)
};

export default Object.freeze(PokemonVault);
