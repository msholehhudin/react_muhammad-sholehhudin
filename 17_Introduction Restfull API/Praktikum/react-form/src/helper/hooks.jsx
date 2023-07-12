import axios from "axios";

export async function fetchAPI() {
  try {
    const { data } = await axios({
      method: "get",
      baseURL: "https://64ae9770c85640541d4d56fc.mockapi.io/", //`${process.env.REACT_APP_ENDPOINT}`,
      //   url: url,
    });

    if (data) {
      return data.result;
    }
    return [];
  } catch (error) {
    console.log(error);
  }
}
