import axios from "axios";

const request = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
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
  placeholder: {
    getUsers() {
      return request({
        url: "/users",
        method: "GET"
      });
    }
  }
};
