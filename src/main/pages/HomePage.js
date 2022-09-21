const { e } = require("../assets/utils.js");

const template = () => {
    return e("div", { className: "text-center" },
        e("h1", { className: "text-primary" }, "OS Info"),
        e("p", {}, "OS info desktop app powered by Electron."),
        e("hr"),
    );
}

function HomePage() {
    return template();
}

module.exports = HomePage;