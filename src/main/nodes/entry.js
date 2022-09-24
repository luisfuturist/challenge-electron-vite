const { Card } = require("react-bootstrap");
const { e } = require("../assets/utils");

const entry = (prefix, content) => {
    return e("span", {},
        prefix,
        e("span", { className: "text-dark" }, content),
        e("br"),
    );
}

module.exports = entry;