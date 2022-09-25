const os = require("os");
const { useState, useEffect } = require("react");
const { Card } = require("react-bootstrap");
const { e, formatTime } = require("../assets/utils.js");
const entry = require("../nodes/entry.js");

const SystemPage = () => {
    const [ uptime, setUptime ] = useState(os.uptime());

    useEffect(() => {
        let timerID = setInterval(() => setUptime(os.uptime()), 1000);

        return () => { clearInterval(timerID); };
    }, []);

    return e("div", {},
        e("h1", { className: "text-primary" }, "System"),
        e(Card, { border: "primary" }, 
            e(Card.Body, {},
                e(Card.Title, {}, `Operational`),
                e(Card.Text, {},
                    entry("Platform: ", os.platform()),
                    entry("Name: ", os.type()),
                    entry("Release: ", os.release()),
                    entry("Endianness of system: ", os.endianness()),
                ),
                entry("Uptime: ", `${uptime.toFixed(1)}s (${formatTime(uptime)})`),
            ),
        ),
    );
};

module.exports = SystemPage;