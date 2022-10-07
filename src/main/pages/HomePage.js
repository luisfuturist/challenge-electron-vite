const { e } = require("../assets/utils.js");

const HomePage = () => {
    return e("div", { className: "text-center" },
        e("h1", { className: "text-primary" }, "Systemi"),
        e("p", {}, "Desktop app for displaying system information."),
        e("hr"),
    );
};

module.exports = HomePage;