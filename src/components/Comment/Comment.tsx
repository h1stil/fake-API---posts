import { FC } from "react";
import { IComment } from "../../utils/types";

interface ICommentProps {
  comment: IComment;
}

const Comment: FC<ICommentProps> = ({ comment }) => {
  return (
    <div className="border rounded my-2 px-2 py-1">
      <p className="fs-5">{comment.email}</p>
      <p className="fst-italic">{comment.body}</p>
    </div>
  );
};

export default Comment;
