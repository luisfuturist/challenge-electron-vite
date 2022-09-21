const { Routes, Route } = require("react-router-dom");
const { e } = require("./assets/utils.js");
const HomePage = require("./pages/HomePage.js");

const route = (path, element, index) => e(Route, { path, element, index });

const routes = () => {
    return e(Routes, {},
        route("/*", HomePage()),
    );
};

module.exports = routes();