import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body.jsx";
import Header from "./Header.jsx";
import HomePage from "../pages/HomePage";
import MemPage from "../pages/MemPage";
import ProcPage from "../pages/ProcPage";
import SystemPage from "../pages/SystemPage";
import AppPage from "../pages/AppPage";

export default function App() {
    const routes = [
        { path: "/*", el: HomePage },
        { path: "/mem", el: MemPage },
        { path: "/proc", el: ProcPage },
        { path: "/sys", el: SystemPage },
        { path: "/app", el: AppPage },
    ];
    
    return (
        <BrowserRouter>
            <Header/>
            <Body>
                <Routes>
                    {routes.map((o, i) => (
                        <Route key={i} {...{
                            path: o.path,
                            element: React.createElement(o.el),
                            index: i,
                        }}/>
                    ))}
                </Routes>
            </Body>
        </BrowserRouter>
    );
}