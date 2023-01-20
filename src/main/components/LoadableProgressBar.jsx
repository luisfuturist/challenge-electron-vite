import { ProgressBar } from "react-bootstrap";
import { semanticVariant } from "../assets/utils.js";

export default function LoadableProgressBar({ now, label }) {
    const variant = semanticVariant(now);

    if(isNaN(now)) {
        label = "Loading...";
        now = 100;
    }

    return (
        <ProgressBar {...{
            now,
            label,
            variant
        }}/>
    );
}