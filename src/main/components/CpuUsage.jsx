import { formatPerc } from "../assets/utils.js";
import LoadableProgressBar from "./LoadableProgressBar.jsx";

export default function CpuUsage({ free }) {
    let usage = 100 - free;

    return (
        <div>
            Usage: 
            <LoadableProgressBar {...{
                now: usage,
                label: formatPerc(usage),
            }}/>
        </div>
    );
}