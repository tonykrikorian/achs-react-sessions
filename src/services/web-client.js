import axios from "axios";

const request = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    // 'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
  },
  responseType: "application/json",
  responseEncoding: "utf8"
});

export default {
  pokemon: {
    get(id) {
      return request({
        url: `/pokemon/${id}`,
        method: "GET"
      });
    }
  },
  placeholder: {
    getUsers() {
      return request({
        url: "",
        method: "GET"
      });
    }
  }
};
