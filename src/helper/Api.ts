import axios from "axios";

interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}

// Config for get method based API calls
const getConfig: Params = {
  baseUrl: "http://127.0.0.1:3030/api/v1",
  headers: {
    Authorization: "",
  },
  method: "get",
};

export const getAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${url}/${data}`,
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};
