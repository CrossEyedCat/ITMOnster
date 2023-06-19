import axios from "axios";

const API_URL = "http://localhost:14121/";

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
