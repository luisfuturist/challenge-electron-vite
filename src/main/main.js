const ReactDOM = require("react-dom/client");
const { e } = require("./assets/utils.js");
const App = require("./components/App.js");

function main() {
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );

    root.render(e(App));
}

module.exports = main;