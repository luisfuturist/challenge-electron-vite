const { Card } = require("react-bootstrap");
const { e } = require("../assets/utils.js");
const entry = require("../nodes/entry.js");

const AppPage = () => {
    return e("div", {},
        e("h1", { className: "text-primary" }, "App"),
        e(Card, { border: "primary" },
            e(Card.Body, {},
                e(Card.Title, {}, "Version"),
                e(Card.Text, {},
                    entry(`Chrome: `, process.versions['chrome']),
                    entry(`Node: `, process.versions['node']),
                    entry(`Electron: `, process.versions['electron']),
                ),
            ),
        ),
    );
};

module.exports = AppPage;