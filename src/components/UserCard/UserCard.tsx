import { Card } from "react-bootstrap";
import { IUser } from "../../utils/types";
import { FC } from "react";

interface IUserProps {
  user: IUser;
}

const UserCard: FC<IUserProps> = ({ user }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.email}
          </Card.Subtitle>
          <Card.Text>{user.company.catchPhrase}</Card.Text>
          <Card.Text className="mt-3">{user.address.city}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserCard;
