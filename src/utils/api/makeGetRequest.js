import appStore from "@/store/store";
import appAxios from "./appAxios";

const makeGetRequest = async (endpoint, params = {}, headers = {}) => {
  const { userToken } = appStore();

  const { data } = await appAxios.get(endpoint, {
    headers: {
      Authorization: userToken ? `Token ${userToken}` : undefined,
      ...headers,
    },
    params: params,
    paramsSerializer: {
      indexes: null, // by default: false
    },
  });
  return data;
};

export default makeGetRequest;
