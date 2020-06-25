import { CreateAction } from "./shared";

const KEY = "PLACEHOLDER";

const placeholderVault = {
  key: KEY,
  types: {
    GET_USERS_INIT: "GET_USERS_ERROR",
    GET_USERS_SUCCESS: "GET_USERS_ERROR",
    GET_USERS_ERROR: "GET_USERS_ERROR"
  },
  Action: (type, payload) => CreateAction(placeholderVault.key, type, payload),
  GetUsersInit: () =>
    CreateAction(placeholderVault.key, placeholderVault.types.GET_USERS_INIT),
  GetUsersSuccess: payload =>
    CreateAction(
      placeholderVault.types,
      placeholderVault.types.GET_USERS_SUCCESS,
      payload
    )
};
export default Object.freeze(placeholderVault);
