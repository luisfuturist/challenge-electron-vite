import { Card } from "react-bootstrap";
import entry from "../nodes/entry";
import CpuUsage from "./CpuUsage";

export default function Cpu({ id, speed, free }) {
    return (
        <Card border="primary">
            <Card.Body>
                <Card.Title>{`CPU ${id}`}</Card.Title>
                <Card.Text>
                    {entry("Speed: ", `${speed}Mhz`)}
                </Card.Text>
                <CpuUsage free={free}/>
            </Card.Body>
        </Card>
    );
}