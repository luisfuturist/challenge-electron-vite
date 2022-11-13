import { ProgressBar } from "react-bootstrap";
import { semanticVariant } from "../assets/utils.js";
import percLabel from "../nodes/percLabel";

export default function CpuUsage({ free }) {
    const usage = 100 - free;
    const label = percLabel(usage);
    const variant = semanticVariant(usage);

    return (
        <div>
            Usage: <ProgressBar {...{ now: usage, label, variant }}/>
        </div>
    );
}