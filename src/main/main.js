const React = require("react");
const ReactDOM = require("react-dom/client");

function main() {
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    const main = React.createElement('div');

    root.render(main);
}

module.exports = main;