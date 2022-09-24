const { Card, Stack } = require("react-bootstrap");
const { e } = require("../assets/utils");
const entry = require("../nodes/entry");
const CpuUsage = require("./CpuUsage");

const Cpu = (props) => {
    return e(Card, { border: "primary" },
        e(Card.Body, {},
            e(Card.Title, {}, `CPU ${props.id}`),
            e(Card.Text, {},
                entry("Model: ", props.model),
                entry("Speed: ", `${props.speed}Mhz`),
            ),
            e(CpuUsage, { free: props.free }),
        ),
    );
};

module.exports = Cpu;