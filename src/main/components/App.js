
const { BrowserRouter } = require("react-router-dom");
const { e } = require("../assets/utils.js");
const Header = require("./Header.js");

const template = () => {
    return e(BrowserRouter, {},
        Header(),
    );
};

function App() {
    return template();
}

module.exports = App;