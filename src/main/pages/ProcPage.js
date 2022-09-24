const os = require("os");
const { useState, useEffect } = require("react");
const { Card, CardGroup } = require("react-bootstrap");
const { e, getCpusInfo } = require("../assets/utils.js");
const Cpu = require("../components/Cpu.js");
const CpuUsage = require("../components/CpuUsage.js");
const entry = require("../nodes/entry.js");

const ProcPage = () => {
    const delay = 500;
    const [ cpus, setCpus ] = useState(os.cpus());
    const [ totalFree, setTotalFree ] = useState("");
    const [ free, setFree ] = useState([]);

    const totalCpusInfo = getCpusInfo;
    const cpusInfo = (cpus) => {
        const array = [];

        for(let i = 0; i < cpus.length; i ++) {
            array[i] = getCpusInfo([cpus[i]])
        }

        return array;
    };

    const diffPerc = (startStats, endStats) => {
        const diffStats = {
            idle: endStats.idle - startStats.idle,
            total: endStats.total - startStats.total,
        };

        return (diffStats.idle / diffStats.total) * 100;
    };

    const tick = () => {
        let cpus = os.cpus();
        setCpus(cpus);

        let totalStartStats = totalCpusInfo(cpus);
        let startStats = cpusInfo(cpus);
        
        setTimeout(() => {
            cpus = os.cpus();
            let totalEndStats = totalCpusInfo(cpus);
            let endStats = cpusInfo(cpus);

            let totalPerc = diffPerc(totalStartStats, totalEndStats);
            let perc = endStats.map((k, i) => diffPerc(startStats[i], endStats[i]));

            setTotalFree(totalPerc);
            setFree(perc);
        }, delay);
    };

    useEffect(() => {
        let timerID = setInterval(() => tick(), delay * 2);

        return () => { clearInterval(timerID); };
    }, []);

    const model = cpus[0].model;
    const count = cpus.length;

    return e("div", {},
        e("h1", { className: "text-primary" }, "Processor"),
        entry("Model: ", model),
        entry("Architecture: ", os.arch()),

        e(Card, { border: "dark" }, 
            e(Card.Body, {},
                e(Card.Title, {}, "Total"),
                entry("Count: ", count),
                e(CpuUsage, { free: totalFree }),
            ),
        ),

        e("hr"),

        e(CardGroup, {},
            cpus.map((cpu, i) => e(Cpu, { key: i, id: i, ...cpu, free: free[i] })),
        ),
    );
};

module.exports = ProcPage;