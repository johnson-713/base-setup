import appStore from "@/store/store";
import appAxios from "./appAxios";

const makePatchRequest = async (endpoint, body, headers) => {
  const { userToken } = appStore();
  const { data } = await appAxios.patch(endpoint, body, {
    headers: {
      Authorization: userToken ? `Token ${userToken}` : undefined,
      //@ts-ignore
      ...(headers ?? {}),
    },
  });
  return data;
};

export default makePatchRequest;
