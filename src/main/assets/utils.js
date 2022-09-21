const React = require("react");
const e = React.createElement;

function semanticVariant(perc) {
    let variant = "success";
    if(perc > 25) variant = "info";
    if(perc > 50) variant = "warning";
    if(perc > 75) variant = "danger";
    
    return variant;
}

module.exports = {
    e,
    semanticVariant,
};