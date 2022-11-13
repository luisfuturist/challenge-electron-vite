import { ProgressBar } from "react-bootstrap";
import { semanticVariant } from "../assets/utils.js";
import percLabel from "../nodes/percLabel";

export default function CpuUsage({ free }) {
    let usage = 100 - free;
    let label = percLabel(usage);
    const variant = semanticVariant(usage);

    if(isNaN(usage)) {
        label = "Loading...";
        usage = 100;
    }

    return (
        <div>
            Usage: <ProgressBar {...{ now: usage, label, variant }}/>
        </div>
    );
}