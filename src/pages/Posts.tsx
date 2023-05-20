import { useEffect, useState } from "react";
import Post from "../components/Post/Post";
import { getPosts } from "../API/getPosts";
import { IPost } from "../utils/types";
import Loader from "../components/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const [fetchPosts, postLoading, postError] = useFetching(async () => {
    const posts = await getPosts();
    setPosts(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-75 d-flex flex-column mx-auto">
      <div className="fw-bold fs-3 mb-3">Список постов</div>
      {postError && (
        <p className="text-center fs-2">Произошла ошибка: {postError}</p>
      )}
      {postLoading ? (
        <Loader />
      ) : (
        posts.map((post) => <Post post={post} key={post.id} />)
      )}
    </div>
  );
};

export default Posts;
