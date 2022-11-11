import { Route } from "react-router-dom";
import { e } from "../assets/utils";

export default function route(path, component, index) {
    return (
        <Route path={path} element={e(component)} index={index} key={index}/>
    );
}