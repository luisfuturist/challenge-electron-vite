const os = require("os");
const { Card } = require("react-bootstrap");
const { e } = require("../assets/utils.js");
const entry = require("../nodes/entry.js");

const SystemPage = () => {
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
            ),
        ),
    );
};

module.exports = SystemPage;