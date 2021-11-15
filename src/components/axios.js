import axios from "axios";

const instance = axios.create({
  baseURL: "https://dating-app-be.herokuapp.com/",
});

export default instance;
