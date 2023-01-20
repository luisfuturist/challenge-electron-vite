import { Card, Stack } from "react-bootstrap";
import { formatCpuSpeed } from "../assets/utils";
import CpuUsage from "./CpuUsage";
import Entry from "./Entry";
const os = require("os");

export default function TotalCpu({ cpus, totalFree }) {
    const model = cpus[0].model;
    const count = cpus.length;

    const cpusSpeed = cpus.map(cpu => cpu.speed);
    const averageSpeed = cpusSpeed.reduce((a, b) => a + b) / count;

    return (
        <Stack>
            <div className="mb-3">
                <Entry prefix="Model: ">{model}</Entry>
                <Entry prefix="Architecture: ">{os.arch()}</Entry>
            </div>

            <Card border="dark">
                <Card.Body>
                    <Card.Title>Total</Card.Title>
                    <Entry prefix="Count: ">
                        {count}
                    </Entry>
                    <Entry prefix="Average Speed: ">
                        {formatCpuSpeed(averageSpeed)}
                    </Entry>
                    <CpuUsage free={totalFree}/>
                </Card.Body>
            </Card>
        </Stack>
    );
}