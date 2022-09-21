const { Container } = require("react-bootstrap");
const { e } = require("../assets/utils.js");

const style = {
    marginTop: "80px",
    marginBottom: "50px",
};

const template = (props, content) => {
    return e(Container, { style }, content);
};

function Body(props, content) {
    return template(props, content);
}

module.exports = Body;