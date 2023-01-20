import React from 'react'
window.React = React;

import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function main() {
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );

    root.render(<App/>);
}

main();