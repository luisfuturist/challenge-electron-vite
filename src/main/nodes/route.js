const { Route } = require("react-router-dom");
const { e } = require("../assets/utils");

const route = (path, component, index) => {
    return e(Route, { path, element: e(component), index });
}

module.exports = route;
