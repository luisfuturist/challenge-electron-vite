import { Col, Row } from "react-bootstrap";
import Cpu from "../components/Cpu.jsx";
import TotalCpu from "../components/TotalCpu.jsx";
import { useCpusInfo } from "../hooks/useCpusInfo.js";

export default function ProcPage() {
    const { cpus, totalFree, free } = useCpusInfo();

    return (
        <div>
            <h1 className="text-primary">Processor</h1>

            <TotalCpu cpus={cpus} totalFree={totalFree}/>
            <hr/>
            <Row xs={1} md={2} className="g-2">
                {cpus.map((cpu, i) => (
                    <Col md="6" lg="3" key={i}>
                        <Cpu key={i} {...{
                            id: i,
                            ...cpu,
                            free: free[i]
                        }}/>
                    </Col>
                ))}
            </Row>
        </div>
    );
}