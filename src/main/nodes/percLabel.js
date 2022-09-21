const { Spinner } = require("react-bootstrap");
const { e } = require("../assets/utils");

const percLabel = (num) => {
    if(typeof num === "number") return num.toFixed(1) + "%";
    
    return e(Spinner, { animation: "border", role: "status", size: "sm" },
        e("span", { className: "visually-hidden"}, "Loading..."),
    );
}

module.exports = percLabel;