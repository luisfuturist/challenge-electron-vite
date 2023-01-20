import { BrowserRouter } from "react-router-dom";
import routes from "../nodes/routes.jsx";
import Body from "./Body.jsx";
import Header from "./Header.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Body>{routes()}</Body>
        </BrowserRouter>
    );
}