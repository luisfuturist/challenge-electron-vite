
const { BrowserRouter } = require("react-router-dom");
const { e } = require("../assets/utils.js");
const routes = require("../routes.js");
const Body = require("./Body.js");
const Header = require("./Header.js");

const template = () => {
    return e(BrowserRouter, {},
        Header(),
        Body({}, routes),
    );
};

function App() {
    return template();
}

module.exports = App;