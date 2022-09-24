const os = require("os");
const { useState, useEffect } = require("react");
const { ProgressBar, Card, Stack } = require("react-bootstrap");
const { e, semanticVariant } = require("../assets/utils.js");
const percLabel = require("../nodes/percLabel.js");
const entry = require("../nodes/entry.js");

const MemPage = () => {
    const [ free, setFree ] = useState(os.freemem());

    useEffect(() => {
        let timerID = setInterval(() => setFree(os.freemem()), 1000);

        return () => { clearInterval(timerID); };
    }, []);

    const info = (value) => (value / (1024 * 1024) / 1024).toFixed(1);

    const abs = {
        total: info(os.totalmem()),
        usage: info(os.totalmem() - free),
        free: info(free),
    };
    const perc = {
        value: (abs.usage / abs.total) * 100,
        usage() { return percLabel(this.value); },
        free() { return percLabel(100 - this.value); },
    };
    const variant = semanticVariant(perc.value);

    return e("div", {},
        e("h1", { className: "text-primary" }, "Memory"),
        e(Card, { border: "primary" },
            e(Card.Body, {},
                e(Card.Title, {}, "RAM"),
                e(Card.Text, {}, 
                    entry("Total: ", `${abs.total}GiB`),
                    entry("Free: ", `${abs.free}GiB (${perc.free()})`),
                    entry("Usage: ", `${abs.usage}GiB (${perc.usage()})`),
                ),
                e(ProgressBar, { now: perc.value, label: perc.usage(), variant }),
            ),
        ),
    );
};

module.exports = MemPage;