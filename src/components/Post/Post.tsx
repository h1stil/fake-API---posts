import { FC, useState } from "react";
import { IComment, IPost } from "../../utils/types";
import Comment from "../Comment/Comment";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getCommentsByPost } from "../../API/getCommentsByPost";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../Loader/Loader";

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
  const navigate = useNavigate();
  const [comments, setComments] = useState<IComment[]>([]);
  const [openComments, setOpenComments] = useState(false);

  const [fetchComments, commentsLoading, commentsError] = useFetching(
    async () => {
      const comm = await getCommentsByPost(post.id);
      setComments(comm);
    }
  );

  const handleOpenPost = () => {
    navigate(`/user/${post.userId}`);
  };

  const handleOpenComments = async () => {
    fetchComments();
    setOpenComments((prev) => !prev);
  };

  const handleCloseComments = () => {
    setOpenComments((prev) => !prev);
  };

  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-between
    gap-3 border border-secondary rounded my-2 p-2"
      >
        <div
          className="rounded-circle border p-2"
          style={{
            width: "50px",
            height: "50px",
            flexShrink: 0,
            cursor: "pointer",
          }}
          onClick={handleOpenPost}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
            alt="user avatar"
          />
        </div>
        <div className="flex-grow-1">
          <div className="fw-bolder">{post.title}</div>
          <div>{post.body}</div>
        </div>
        <Button
          variant="secondary"
          onClick={!openComments ? handleOpenComments : handleCloseComments}
        >
          Комментарии
        </Button>
      </div>
      <div>
        {commentsLoading ? (
          <Loader />
        ) : (
          openComments && comments.map((comm) => <Comment comment={comm} />)
        )}
        {commentsError && (
          <p className="fs-3 fw-bold">Комментарии не найдены</p>
        )}
      </div>
    </div>
  );
};

export default Post;
