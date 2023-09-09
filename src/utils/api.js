import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '3c0760f66amsh2f2d267423a73c8p1c660ejsnff4bc7d1648e',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
