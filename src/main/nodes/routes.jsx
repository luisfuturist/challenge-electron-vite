import { Routes } from "react-router-dom";
import AppPage from "../pages/AppPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import MemPage from "../pages/MemPage.jsx";
import ProcPage from "../pages/ProcPage.jsx";
import SystemPage from "../pages/SystemPage.jsx";
import route from "./route.jsx";

export default function routes() {
    const routes = [
        { path: "/*", el: HomePage },
        { path: "/mem", el: MemPage },
        { path: "/proc", el: ProcPage },
        { path: "/sys", el: SystemPage },
        { path: "/app", el: AppPage },
    ];

    return (
        <Routes>{routes.map((o, i) => route(o.path, o.el, i))}</Routes>
    );
}