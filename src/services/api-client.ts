import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b21820989f14433c92ddd1ff0fc69837",
  },
});
