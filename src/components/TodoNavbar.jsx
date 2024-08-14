import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function TodoNavbar() {
    return (
        <Navbar expand="lg" bg="info" >
            <Container>
                <Navbar.Brand href="/" className='fw-bold'>WEB TODO APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to='/importantTodos'>Important </Nav.Link>
                        <NavDropdown title="more" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/my-day' >My Day</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/pending-tasks'>Pending Tasks </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://github.com/jatinkaushik-jk" target='_blank'>
                                Github
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://linkedin.com/in/jatinkaushik-jk" target='_blank'>
                                LinkedIn
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TodoNavbar;