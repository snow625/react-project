import { instance } from "./auth";

//PAY ATTENTION
// productCharacteristics means object of this template:
//{
//   "productId": "5d51694802b2373622ff552c",
//   "weight": 100
// }

export const postEatenProduct = async (data) => {
  const { data: result } = await instance.post("/day", data);
  console.log(result);
  return result;
};

export const getInfoForDay = async (date) => {
  const { data } = await instance.post("/day/info", date);
  return data;
};

export const deleteDay = async (dayId, eatenProductId) => {
  const body = { dayId, eatenProductId };
  const { data } = await instance.delete("/day", body);
  return data;
};
