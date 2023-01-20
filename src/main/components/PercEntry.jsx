import { Spinner } from "react-bootstrap";
import { formatMem, formatPerc } from "../assets/utils";
import Entry from "./Entry";

export function PercEntry({ prefix, value, total }) {
    let perc = (value / total) * 100;
    let abs = formatMem(value);
    let data = `${abs} (${formatPerc(perc)})`;
    let loading = false;

    if(isNaN(value) || isNaN(total)) {
        loading = true;
    }

    return (
        <Entry prefix={prefix}>
            {loading && <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">
                    Loading...
                </span>
            </Spinner>}
            {!loading && data}
        </Entry>
    );
}