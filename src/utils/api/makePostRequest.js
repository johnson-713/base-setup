import appStore from "@/store/store";
import appAxios from "./appAxios";

const makePostRequest = async (endpoint, body, headers = {}) => {
  const {userToken} = appStore();
  const { data } = await appAxios.post(endpoint, body, {
    headers: {
      Authorization: userToken ? `Token ${userToken}` : undefined,
      //@ts-ignore
      ...headers,
    },
  });
  return data;
};

export default makePostRequest;
