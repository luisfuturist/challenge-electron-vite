import { Navbar, Container, Nav } from "react-bootstrap";
import ni from "../nodes/ni.js";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Systemi</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav"/>
                <Navbar.Collapse id="main-navbar-nav" variant="primary">
                    <Nav className="me-auto">
                        {ni("/*", "Home")}
                        {ni("/mem", "Memory")}
                        {ni("/proc", "Processor")}
                        {ni("/sys", "System")}
                        {ni("/app", "App")}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}