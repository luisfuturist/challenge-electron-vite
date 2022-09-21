const { Container } = require("react-bootstrap");
const { e } = require("../assets/utils.js");

const style = {
    marginTop: "80px",
    marginBottom: "50px",
};

const Body = (props) => {
    return e(Container, { style }, ...props.slots);
};

module.exports = Body;