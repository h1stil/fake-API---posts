import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid className="w-75">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Меню
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="d-flex gap-3 mb-4">
                <div
                  className="user__avatar rounded-circle"
                  style={{ width: "50px" }}
                >
                  <img
                    src="https://img.freepik.com/free-icon/user_318-159711.jpg"
                    alt="user"
                  />
                </div>
                <div className="user__info">
                  <p className="fw-bold">Ильмир</p>
                  <p>i_kavyev@mail.ru</p>
                </div>
              </div>
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-2">
                <Link to={"/posts"} className="text-decoration-none">
                  Список постов
                </Link>
                <Link to={"/about"} className="text-decoration-none">
                  Обо мне
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
