import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MainNavbar() {
  return (
 
 <Navbar  className="bg-dark ">
      <Container fluid="xxl">
        <Navbar.Brand href="#home"><img src="https://www.freeiconspng.com/uploads/flat-ecommerce-icon-png-5.png" width={40} height={40} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-4">
            <Nav.Link href="#home" className='text-light'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-light'>About</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Gallery</Nav.Link>
            <Nav.Link href="#link" className='text-light'>More</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  );
}

export default MainNavbar;