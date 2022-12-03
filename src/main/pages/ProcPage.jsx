import os from "os";
import { useState, useEffect } from "react";
import { Card, Col, Row, Stack } from "react-bootstrap";
import { getCpusInfo } from "../assets/utils.js";
import Cpu from "../components/Cpu.js";
import CpuUsage from "../components/CpuUsage.js";
import entry from "../nodes/entry.js";

export default function ProcPage() {
    const delay = 500;
    const [ cpus, setCpus ] = useState(os.cpus());
    const [ totalFree, setTotalFree ] = useState("Loading");
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

    const cpusSpeed = () => {
        const array = [];

        for(let i = 0; i < count; i ++) {
            array[i] = cpus[i].speed;
        }

        return array;
    }

    const averageSpeed = cpusSpeed().reduce((a, b) => a + b) / count;

    return (
        <div>
            <h1 className="text-primary">Processor</h1>

            <Stack>
                <div className="mb-3">
                    {entry("Model: ", model)}
                    {entry("Architecture: ", os.arch())}
                </div>

                <Card border="dark">
                    <Card.Body>
                        <Card.Title>Total</Card.Title>
                        <Card.Text>
                            {entry("Count: ", count)}
                            {entry("Average Speed: ", `${averageSpeed}Mhz`)}
                        </Card.Text>
                        <CpuUsage free={totalFree}></CpuUsage>
                    </Card.Body>
                </Card>
            </Stack>

            <hr/>

            <Row xs={1} md={2} className="g-2">
                {cpus.map((cpu, i) => (
                    <Col md="6" lg="3" key={i}>
                        <Cpu {...{ key: i, id: i, ...cpu, free: free[i] }}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
}