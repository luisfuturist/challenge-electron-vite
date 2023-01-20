import { useState } from "react";
import { getCpusInfo } from "../assets/utils";
import { diffPerc } from "../assets/utils.js";
import { useInterval } from "../hooks/useInterval.js";
const os = require("os");

export function useCpusInfo() {
    const delay = 500;
    const [ cpus, setCpus ] = useState(os.cpus());
    const [ totalFree, setTotalFree ] = useState("Loading");
    const [ free, setFree ] = useState([]);

    const totalCpusInfo = getCpusInfo;
    const cpusInfo = (cpus) => cpus.map(cpu => getCpusInfo([cpu]));

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
    useInterval(() => tick(), delay * 2);

    return {
        cpus,
        totalFree,
        free,
    };
}