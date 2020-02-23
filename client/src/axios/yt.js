import axios from "axios";

const yt = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search"
});

export default yt;
