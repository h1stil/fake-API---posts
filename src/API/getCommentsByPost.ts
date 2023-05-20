import axios from "axios";

export const getCommentsByPost = async (id: number) => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/comments?postId=" + id
  );
  return res.data;
};
