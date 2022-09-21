const ReactDOM = require("react-dom/client");
const App = require("./components/App.js");

function main() {
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    root.render(App());
}

module.exports = main;