import { Container } from "react-bootstrap";

export default function Body({ children }) {
    return (
        <Container
            style={{
                marginTop: "80px",
                marginBottom: "50px",
            }}>
            {children}
        </Container>
    );
}