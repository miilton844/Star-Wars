import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './Footer.css';

const Footer = () => {
  const logo = process.env.PUBLIC_URL + "/star-wars-logo.png";

  return (
    <div>
      <Navbar bg="dark" variant="dark" className='navbar-footer'>
        <Container  >
          <Navbar.Brand>
            <img id='logo' src={logo} alt='logo'></img>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export { Footer };