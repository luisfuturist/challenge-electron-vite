import os from "os";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { formatTime } from "../assets/utils.js";
import entry from "../nodes/entry.js";

export default function SystemPage() {
    const [ uptime, setUptime ] = useState(os.uptime());

    useEffect(() => {
        let timerID = setInterval(() => setUptime(os.uptime()), 1000);

        return () => { clearInterval(timerID); };
    }, []);

    const user = os.userInfo();

    return (
        <div>
            <h1 className="text-primary">System</h1>
            <Card border="primary">
                <Card.Body>
                    <Card.Title>Operational</Card.Title>
                    <Card.Text>
                        {entry("Platform: ", os.platform())}
                        {entry("Name: ", os.type())}
                        {entry("Release: ", os.release())}
                        {entry("Endianness of system: ", os.endianness())}
                    </Card.Text>
                    {entry("Uptime: ", `${uptime.toFixed(1)}s (${formatTime(uptime)})`)}
                </Card.Body>
            </Card>
            
            <Card border="dark" className="mt-3">
                <Card.Body>
                    <Card.Title>User</Card.Title>
                    <Card.Text>
                        {entry("Host: ", os.hostname())}
                        {entry("Name: ", user.username)}
                        {entry("UID: ", user.uid)}
                        {entry("GID: ", user.gid)}
                        {entry("Shell: ", user.shell)}
                        {entry("Home directory: ", os.homedir())}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}