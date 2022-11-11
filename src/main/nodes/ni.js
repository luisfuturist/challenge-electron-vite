import { Link } from "react-router-dom";

export default function ni(to, content) {
    return (
        <Link to={to} className="nav-link">{content}</Link>
    );
}