import {Navbar,Container,Nav} from "react-bootstrap"
import logo from '../assets/img/logo.png'
import './Nav.css'
function NavBar() {
    return (
        <div>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" >
                        <img alt="logo" src={logo} width="60" height="60" className="d-inline-block align-top"/>
                        <span className="organic">organic</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="navItem">Home</Nav.Link>
                            <Nav.Link href="#link" className="navItem">Poducts</Nav.Link>
                            <Nav.Link href="#home" className="navItem">Blog</Nav.Link>
                            <Nav.Link href="#link" className="navItem">About Us</Nav.Link>
                            <Nav.Link href="#link" className="navItem">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar