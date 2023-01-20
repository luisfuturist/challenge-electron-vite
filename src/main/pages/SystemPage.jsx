import { useState } from "react";
import { Card } from "react-bootstrap";
import { formatTime } from "../assets/utils.js";
import Entry from "../components/Entry.jsx";
import { useInterval } from "../hooks/useInterval.js";
const os = require("os");

export default function SystemPage() {
    const [ uptime, setUptime ] = useState(os.uptime());
    useInterval(() => setUptime(os.uptime()), 1000);

    const user = os.userInfo();

    const opEntries = [
        { key: "Platform: ", value: os.platform() },
        { key: "Name: ", value: os.type() },
        { key: "Release: ", value: os.release() },
        { key: "Endianness of system: ", value: os.endianness() },
    ];
    const userEntries = [
        { key: "Host: ", value: os.hostname() },
        { key: "Name: ", value: user.username },
        { key: "UID: ", value: user.uid },
        { key: "GID: ", value: user.gid },
        { key: "Shell: ", value: user.shell },
        { key: "Home directory: ", value: os.homedir() },
    ];

    return (
        <div>
            <h1 className="text-primary">System</h1>
            <Card border="primary">
                <Card.Body>
                    <Card.Title>Operational</Card.Title>
                    <Card.Text>
                        { opEntries.map((entry, i) => (
                            <Entry prefix={entry.key} key={i}>
                                {entry.value}
                            </Entry>
                        ))}
                    </Card.Text>
                    <Entry prefix="Uptime: ">
                        {uptime.toFixed(1)}s ({formatTime(uptime)})
                    </Entry>
                </Card.Body>
            </Card>
            
            <Card border="dark" className="mt-3">
                <Card.Body>
                    <Card.Title>User</Card.Title>
                    <Card.Text>
                        { userEntries.map((entry, i) => (
                            <Entry prefix={entry.key} key={i}>
                                {entry.value}
                            </Entry>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}