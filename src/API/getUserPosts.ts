import axios from "axios";

export const getUserPosts = async (id: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`
  );
  return res.data;
};
