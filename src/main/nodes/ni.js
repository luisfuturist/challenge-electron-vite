const { Link } = require("react-router-dom");
const { e } = require("../assets/utils");

const ni = (to, content) => {
    return e(Link, { to, className: "nav-link" }, content);
}

module.exports = ni;