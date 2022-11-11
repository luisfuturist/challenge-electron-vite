import { ProgressBar } from "react-bootstrap";
import { semanticVariant } from "../assets/utils.js";
import entry from "../nodes/entry.js";
import percLabel from "../nodes/percLabel";

export default function CpuUsage({ free }) {
    const usage = 100 - free;
    const label = percLabel(usage);
    const variant = semanticVariant(usage);

    return (
        <div>
            <div className="mb-3">
                {entry("Usage: ", label)}
                {entry("Free: ", percLabel(free))}
            </div>
            <ProgressBar {...{ now: usage, label, variant }}/>,
        </div>
    );
}