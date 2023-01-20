import { useState } from "react";
import { Card } from "react-bootstrap";
import { formatMem, formatPerc } from "../assets/utils.js";
import Entry from "../components/Entry.jsx";
import LoadableProgressBar from "../components/LoadableProgressBar.jsx";
import { PercEntry } from "../components/PercEntry.jsx";
import { useInterval } from "../hooks/useInterval";
const os = require("os");

export default function MemPage() {
    const [ free, setFree ] = useState();
    useInterval(() => setFree(os.freemem()), 1000);

    const total = os.totalmem();
    const usage = () => total - free;
    const perc = () => (usage() / total) * 100;

    return (
        <div>
            <h1 className="text-primary">Memory</h1>
            <Card border="primary">
                <Card.Body>
                    <Card.Title>RAM</Card.Title>
                    <Entry prefix="Total: ">{formatMem(total)}</Entry>
                    <PercEntry
                        prefix="Free: "
                        value={free}
                        total={total}
                    />
                    <PercEntry
                        prefix="Usage: "
                        value={os.totalmem() - free}
                        total={total}
                    />
                    <div className="mt-2"/>
                    <LoadableProgressBar {...{
                        now: perc(),
                        label: formatPerc(perc()),
                    }}/>
                </Card.Body>
            </Card>
        </div>
    );
}