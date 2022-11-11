import { Routes } from "react-router-dom";
import AppPage from "../pages/AppPage.js";
import HomePage from "../pages/HomePage.js";
import MemPage from "../pages/MemPage.js";
import ProcPage from "../pages/ProcPage.js";
import SystemPage from "../pages/SystemPage.js";
import route from "./route.js";

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