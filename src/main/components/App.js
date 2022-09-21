
const { BrowserRouter } = require("react-router-dom");
const { e } = require("../assets/utils.js");
const routes = require("../routes.js");

const template = () => {
    return e(BrowserRouter, {}, routes);
};

function App() {
    return template();
}

module.exports = App;