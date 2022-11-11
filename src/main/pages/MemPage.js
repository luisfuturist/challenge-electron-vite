import os from "os";
import { useState, useEffect } from "react";
import { ProgressBar, Card, Stack } from "react-bootstrap";
import { semanticVariant } from "../assets/utils.js";
import percLabel from "../nodes/percLabel.js";
import entry from "../nodes/entry.js";

export default function MemPage() {
    const [ free, setFree ] = useState(os.freemem());

    useEffect(() => {
        let timerID = setInterval(() => setFree(os.freemem()), 1000);

        return () => { clearInterval(timerID); };
    }, []);

    const info = (value) => (value / (1024 * 1024) / 1024).toFixed(1);

    const abs = {
        total: info(os.totalmem()),
        usage: info(os.totalmem() - free),
        free: info(free),
    };
    const perc = {
        value: (abs.usage / abs.total) * 100,
        usage() { return percLabel(this.value); },
        free() { return percLabel(100 - this.value); },
    };
    const variant = semanticVariant(perc.value);

    return (
        <div>
            <h1 className="text-primary">Memory</h1>
            <Card border="primary">
                <Card.Body>
                    <Card.Title>RAM</Card.Title>
                    <Card.Text>
                        {entry("Total: ", `${abs.total}GiB`)}
                        {entry("Free: ", `${abs.free}GiB (${perc.free()})`)}
                        {entry("Usage: ", `${abs.usage}GiB (${perc.usage()})`)}
                    </Card.Text>
                    <ProgressBar {...{ now: perc.value, label: perc.usage(), variant }}/>
                </Card.Body>
            </Card>
        </div>
    );
}