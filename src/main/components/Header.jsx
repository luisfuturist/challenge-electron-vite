import { Navbar, Container, Nav } from "react-bootstrap";
import NavLink from "./NavLink.jsx";

export default function Header() {
    const links = [
        { to: "/*", name: "Home" },
        { to: "/mem", name: "Memory" },
        { to: "/proc", name: "Processor" },
        { to: "/sys", name: "System" },
        { to: "/app", name: "App" },
    ];

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Systemi</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav"/>
                <Navbar.Collapse id="main-navbar-nav" variant="primary">
                    <Nav className="me-auto">
                        { links.map((entry, i) => (
                            <NavLink to={entry.to} key={i}>
                                {entry.name}
                            </NavLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}