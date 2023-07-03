import axios from "axios";

import { tokenData, data } from "../dummyData/data";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const headers = {
  "Api-key": API_KEY,
  "Content-Type": "application/json",
};

export const fetchDataFromApi = async (url, params) => {
  // console.log("API_KEY", API_KEY);
  // console.log("url", url);
  // console.log("BASE_URL", BASE_URL);
  // console.log(BASE_URL + url);

  if (url === "generate-token") {
    return tokenData;
  } else {
    return data.data;
  }

  // console.log( "Making a call" );
  // const result = await fetch(`https://devcore02.cimet.io/v1/generate-token`, {
  //   method: "POST",
  //   headers: {
  //     "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
  //     "Content-type": "application/json; charset=UTF-8",
  //     "Access-Control-Allow-Origin": "GET, POST, OPTIONS, PUT, DELETE",
  //   },
  // });

  // const { data } = await result.json();
  // console.log(data);

  // const sessionId = response.headers['laravel_session'];
  // try {
  //   const { data } = await axios.post(BASE_URL + url, null, {
  //     headers,
  //   });
  //   return data;
  // } catch (err) {
  //   console.log("Error from API Call", err);
  //   return err;
  // }

  // /////////
  // const response = await fetch(BASE_URL + url, {
  //   method: "POST",
  //   headers: {
  //     "Api-key": Api_key,
  //   },
  // });
  // console.log(await response.json());
};
