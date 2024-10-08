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

// Config for post method based API calls
const postConfig: Params = {
  baseUrl: "http://127.0.0.1:3030/api/v1",
  headers: {
    Authorization: "",
  },
  method: "post",
};

// Config for put method based API calls
const putConfig: Params = {
  baseUrl: "http://127.0.0.1:3030/api/v1",
  headers: {
    Authorization: "",
  },
  method: "PUT",
};

// Config for delete method based API calls
const deleteConfig: Params = {
  baseUrl: "http://127.0.0.1:3030/api/v1",
  headers: {
    Authorization: "",
  },
  method: "DELETE",
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

export const postAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...postConfig,
    url: `${getConfig.baseUrl}/${url}`,
    data,
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

export const putAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...putConfig,
    url: `${putConfig.baseUrl}/${url}`,
    data,
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

export const deleteAPI = async (url: string): Promise<any> => {
  return await axios({
    ...deleteConfig,
    url: `${deleteConfig.baseUrl}/${url}`,
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
