import { Spinner } from "react-bootstrap";
import { formatMem, formatPerc } from "../assets/utils";
import Entry from "./Entry";

export function PercEntry({ prefix, value, total }) {
    let loading = false;
    let data;

    if(isNaN(value) || isNaN(total)) {
        loading = true;
    } else {
        let perc = (value / total) * 100;
        let abs = formatMem(value);
        data = `${abs} (${formatPerc(perc)})`;
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