import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://shopping-list-mr.herokuapp.com/api"
    : "http://localhost:5000/api";
