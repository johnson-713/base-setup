import appStore from "@/store/store";
import appAxios from "./appAxios";

const makeDeleteRequest = async (endpoint, params = {}, headers = {}) => {
  const { userToken } = appStore();
  const { data } = await appAxios.delete(endpoint, {
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

export default makeDeleteRequest;
