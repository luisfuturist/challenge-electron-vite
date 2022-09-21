
const { BrowserRouter } = require("react-router-dom");
const { e } = require("../assets/utils.js");
const routes = require("../nodes/routes.js");
const Body = require("./Body.js");
const Header = require("./Header.js");

const App = () => {
    return e(BrowserRouter, {},
        e(Header),
        Body({}, routes()),
    );
};

module.exports = App;