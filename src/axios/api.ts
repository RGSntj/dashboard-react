import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export async function getCalls() {
  const response = await api.get("/get-all-calls");
  return response.data;
}
