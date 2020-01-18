import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://apis.data.go.kr/B553077/api/open/sdsc"
});

const instance = {
  get: (url: string, params: object) =>
    axios
      .get(url, params)
      .then(data => data.data)
      .catch(error => console.log(error))
};
type baseParamType = {
  serviceKey: string | undefined;
  type: string;
};
const baseParam: baseParamType = {
  serviceKey: decodeURIComponent(
    "TztU36F%2FW%2FmBHdEf7%2BC2ztZDLtWtwik8brppbN8YzKLytXwT2jodh2hCR%2FSjIPBTOX9f3H%2BQynKwQWnEEjsCKQ%3D%3D"
  ),
  type: "json"
};

export const api = {
  largeUpjong: () => instance.get("/largeUpjongList", { params: baseParam })
};
