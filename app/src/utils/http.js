import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.99.100:4000/chess"
});
