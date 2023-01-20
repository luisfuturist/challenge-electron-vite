import { Card } from "react-bootstrap";
import Entry from "../components/Entry";

export default function AppPage() {
    const entries = [
        { key: "Chrome: ", value: process.versions['chrome'] },
        { key: "Node: ", value: process.versions['node'] },
        { key: "Electron: ", value: process.versions['electron'] },
    ];

    return (
        <div>
            <h1 className="text-primary">App</h1>
            <Card border="primary">
                <Card.Body>
                    <Card.Title>Version</Card.Title>
                    <Card.Text>
                        { entries.map((entry, i) => (
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