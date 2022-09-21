const { Card } = require("react-bootstrap");
const { e } = require("../assets/utils");

const entry = (prefix, content) => {
    return e(Card.Text, {}, prefix,
        e("span", { className: "text-dark" }, content)
    );
}

module.exports = entry;