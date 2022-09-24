const { ProgressBar } = require("react-bootstrap");
const { e, semanticVariant } = require("../assets/utils.js");
const entry = require("../nodes/entry.js");
const percLabel = require("../nodes/percLabel");

const CpuUsage = (props) => {
    const usage = 100 - props.free;
    const label = percLabel(usage);
    const variant = semanticVariant(usage);

    return e("div", {},
        entry("Usage: ", label),
        entry("Free: ", percLabel(props.free)),
        e(ProgressBar, { now: usage, label, variant }),
    );
};

module.exports = CpuUsage;