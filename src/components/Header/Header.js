import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            {/* <Navbar.Brand href="#home">Newbie</Navbar.Brand> */}
            <NavLink to={'/'} className='navbar-brand'>Newbie</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to={'/'} className='nav-link'>Home</NavLink>
                    <NavLink to={'/admins'} className='nav-link'>Admin</NavLink>
                    <NavLink to={'/users'} className='nav-link'>User</NavLink>
                    {/* <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/admins">Admin</Nav.Link>
                    <Nav.Link href="/users">User</Nav.Link> */}
                </Nav>
                <Nav>
                    <NavDropdown title="Setting" id="basic-nav-dropdown">
                        <NavDropdown.Item>Log in</NavDropdown.Item>
                        <NavDropdown.Item>Log out</NavDropdown.Item>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;