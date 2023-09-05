import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const pages = [{link: '/', label: 'Home'}, {link: '/dash/', label: 'Dashboard'}, 
    {link: '/posts/', label: 'Posts'}, {link: '/mui/', label: 'MUI Demo'}, 
    {link: '/students/', label: 'Students'}];

function NavbarBootstrap() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">IOD : REACT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {pages.map(page => <Nav.Link key={page.link} href={page.link}>{page.label}</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBootstrap;