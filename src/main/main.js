const ReactDOM = require("react-dom/client");
const { BrowserRouter } = require("react-router-dom");
const { e } = require("./assets/utils.js");
const routes = require("./routes.js");

function main() {
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    const main = e('div', null,
        e(BrowserRouter, {}, routes),
    );

    root.render(main);
}

module.exports = main;