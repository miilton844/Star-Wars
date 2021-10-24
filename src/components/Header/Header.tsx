import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import './Header.css'

const Header = () => {
  const logo =  process.env.PUBLIC_URL + "/star-wars-logo.png"

  return (
    <div>
      <Navbar bg="dark" variant="dark" className='navbar'>
        <Container  >
          <Navbar.Brand>
            <img id='logo' src= {logo} alt='logo'></img>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )

}

export { Header }