const { Routes } = require("react-router-dom");
const { e } = require("../assets/utils.js");
const AppPage = require("../pages/AppPage.js");
const HomePage = require("../pages/HomePage.js");
const MemPage = require("../pages/MemPage.js");
const ProcPage = require("../pages/ProcPage.js");
const route = require("./route.js");

const routes = () => {
    return e(Routes, {},
        route("/*", HomePage),
        route("/mem", MemPage),
        route("/proc", ProcPage),
        route("/app", AppPage),
    );
};

module.exports = routes;