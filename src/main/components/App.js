import { BrowserRouter } from "react-router-dom";
import routes from "../nodes/routes.js";
import Body from "./Body.js";
import Header from "./Header.js";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Body>{routes()}</Body>
        </BrowserRouter>
    );
}