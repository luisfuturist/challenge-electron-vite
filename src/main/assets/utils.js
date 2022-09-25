const React = require("react");
const e = React.createElement;

function semanticVariant(perc) {
    let variant = "success";
    if(perc > 25) variant = "info";
    if(perc > 50) variant = "warning";
    if(perc > 75) variant = "danger";
    
    return variant;
}

function getCpusInfo(cpus) { 
    let user = 0, nice = 0, sys = 0, idle = 0, irq = 0;
    
    for(let cpu in cpus){
        if(!cpus.hasOwnProperty(cpu)) continue;
        
        const times = cpus[cpu].times;

        user += times.user;
        nice += times.nice;
        sys += times.sys;
        irq += times.irq;
        idle += times.idle;
    }
    
    return {
        idle: idle, 
        total: user + nice + sys + idle + irq,
    };
}

function formatTime(seconds) {
    const pad = (s) => (s < 10 ? '0' : '') + s;

    var days = Math.floor(seconds / (60 * 60 * 24));
    var hours = Math.floor(seconds % (60 * 60 * 24) / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);
  
    return `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`
}

module.exports = {
    e,
    semanticVariant,
    getCpusInfo,
    formatTime,
};