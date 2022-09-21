const { Routes, Route } = require("react-router-dom");
const { e } = require("./assets/utils.js");
const HomePage = require("./pages/HomePage.js");

const route = (path, element, index) => e(Route, { path, element, index });

const template = () => {
    return e(Routes, {},
        route("/*", HomePage()),
    );
};

function routes() {
    return template();
}

module.exports = routes();