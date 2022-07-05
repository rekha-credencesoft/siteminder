import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HiOutlineMail } from "react-icons/hi"
function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ paddingLeft: "35px", paddingRight: "35px" }}>
            {/* <Container> */}
            <Navbar.Brand href="#">Siteminder</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" style={{ fontSize: "12px" }}>DASHBOARD</Nav.Link>
                    <Nav.Link href="#" style={{ fontSize: "12px" }}>INVENTORY</Nav.Link>
                    <Nav.Link href="#" style={{ fontSize: "12px" }}>ROOMS & RATES</Nav.Link>
                    <Nav.Link href="#" style={{ fontSize: "12px" }}>RESERVATIONS</Nav.Link>
                    <Nav.Link href="#" style={{ fontSize: "12px" }}>CHANNELS</Nav.Link>
                    <Nav.Link href="#" style={{ fontSize: "12px" }}>BOOKONE</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#">
                        <HiOutlineMail style={{ fontSize: "20px", marginTop: "-5px", marginRight: "-10px" }} />
                    </Nav.Link>
                    <NavDropdown style={{ color: "white", fontSize: "15px" }} title="Book One Test Hotel" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Property Setting</NavDropdown.Item>
                        <NavDropdown.Item href="#">
                            My Account
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Online Help</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                            Support
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
    );
}

export default NavBar;