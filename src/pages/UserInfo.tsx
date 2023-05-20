import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { useEffect, useState } from "react";
import { IPost, IUser } from "../utils/types";
import Loader from "../components/Loader/Loader";
import { getUser } from "../API/getUser";
import { getUserPosts } from "../API/getUserPosts";
import Post from "../components/Post/Post";
import UserCard from "../components/UserCard/UserCard";

const UserInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState<IPost[]>([]);
  const [user, setUser] = useState<IUser>();

  const [fetchPostById, postLoading] = useFetching(async () => {
    const post = await getUserPosts(params.id!);
    setUserPosts(post);
  });

  const [fetchUser, userError] = useFetching(async () => {
    const user = await getUser(params.id!);
    setUser(user);
  });

  const getMainPage = () => {
    navigate(`/`);
  };

  useEffect(() => {
    fetchUser();
    fetchPostById();
  }, []);

  return (
    <>
      <div className="w-75 mx-auto">
        <div className="d-flex gap-5 align-items-end">
          <Button variant="secondary" onClick={getMainPage}>
            Назад
          </Button>
        </div>
        {postLoading ? (
          <Loader />
        ) : (
          <div className="my-3 d-flex gap-5">
            {user && (
              <div>
                <p className="fs-5 fw-bold my-2">Информация о пользователе</p>
                <UserCard user={user} />
              </div>
            )}
            {userPosts && user && (
              <div>
                <p className="fs-5 fw-bold my-2">Посты пользователя</p>
                {userPosts.map((post) => (
                  <Post post={post} key={post.id} />
                ))}
              </div>
            )}
            {userError && (
              <p className="fs-3 fw-bold">Пользователь не найден</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserInfo;
