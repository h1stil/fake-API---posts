import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
