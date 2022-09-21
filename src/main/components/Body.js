const { Container } = require("react-bootstrap");
const { e } = require("../assets/utils.js");

const style = {
    marginTop: "80px",
    marginBottom: "50px",
};

const Body = (props, content) => {
    return e(Container, { style }, content);
};

module.exports = Body;