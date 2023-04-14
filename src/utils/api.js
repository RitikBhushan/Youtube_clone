import axios from "axios";

const BASE_URL ="https://youtube138.p.rapidapi.com";

const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': 'a05803d3d4msh35b2f86ef8c1755p1f11e3jsnb0b3ef6df42e',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};