import { create } from "zustand";

const initialState = {
  userToken: "",
};

const appStore = create((set) => ({
  ...initialState,
  //Action
  setUserToken: ({ token }) =>
    set(() => ({
      userToken: token,
    })),
}));

export default appStore
