import { Spinner } from "react-bootstrap";

export default function percLabel(num) {
    if(typeof num === "number") return num.toFixed(1) + "%";

    return (
        <Spinner animation="border" role="status" size="sm">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}