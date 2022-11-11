import { Container } from "react-bootstrap";

const style = {
    marginTop: "80px",
    marginBottom: "50px",
};

export default function Body({ children }) {
    return (
        <Container style={style}>{children}</Container>
    );
}