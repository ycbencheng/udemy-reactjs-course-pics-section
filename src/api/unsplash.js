import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ce166e6fca53ac9752979b1d31fe76f4d9006012abefeec9f8ff595f2ba29176",
  },
});
