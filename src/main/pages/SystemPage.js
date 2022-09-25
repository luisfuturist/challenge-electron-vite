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

    const user = os.userInfo();

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
        
        e(Card, { border: "dark", className: "mt-3" },
            e(Card.Body, {},
                e(Card.Title, {}, `User`),
                e(Card.Text, {},
                    entry("Host: ", os.hostname()),
                    entry("Name: ", user.username),
                    entry("UID: ", user.uid),
                    entry("GID: ", user.gid),
                    entry("Shell: ", user.shell),
                    entry("Home directory: ", os.homedir()),
                ),
            ),
        ),
    );
};

module.exports = SystemPage;