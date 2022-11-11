import { Card } from "react-bootstrap";
import entry from "../nodes/entry.js";

export default function AppPage() {
    return (
        <div>
            <h1 className="text-primary">App</h1>
            <Card border="primary">
                <Card.Body>
                    <Card.Title>Version</Card.Title>
                    <Card.Text>
                        {entry(`Chrome: `, process.versions['chrome'])}
                        {entry(`Node: `, process.versions['node'])}
                        {entry(`Electron: `, process.versions['electron'])}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}