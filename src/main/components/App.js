
const { BrowserRouter } = require("react-router-dom");
const { e } = require("../assets/utils.js");
const routes = require("../routes.js");
const Body = require("./Body.js");
const Header = require("./Header.js");

function App() {
    return e(BrowserRouter, {},
        Header(),
        Body({}, routes),
    );
}

module.exports = App;