import { myAxios } from "./helper";

export const signup = (user) => {
  return myAxios.post('/signup').then((response) => response.data);
}