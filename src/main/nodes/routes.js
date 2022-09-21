const { Routes } = require("react-router-dom");
const { e } = require("../assets/utils.js");
const HomePage = require("../pages/HomePage.js");
const MemPage = require("../pages/MemPage.js");
const route = require("./route.js");

const routes = () => {
    return e(Routes, {},
        route("/*", HomePage),
        route("/mem", MemPage),
    );
};

module.exports = routes;