import axios from "axios";

export const getPostById = async (id: string) => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  return res.data;
};
