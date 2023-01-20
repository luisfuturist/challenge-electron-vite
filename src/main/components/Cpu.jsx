import { Card } from "react-bootstrap";
import CpuUsage from "./CpuUsage";
import Entry from "../components/Entry"
import { formatCpuSpeed } from "../assets/utils";

export default function Cpu({ id, speed, free }) {
    return (
        <Card border="primary">
            <Card.Body>
                <Card.Title>CPU {id}</Card.Title>
                <Entry prefix="Speed: ">{formatCpuSpeed(speed)}</Entry>
                <CpuUsage free={free}/>
            </Card.Body>
        </Card>
    );
}