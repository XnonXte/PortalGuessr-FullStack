import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { DifficultiesProps } from "../../../types/proptypes/DifficultiesProps";

const DifficultiesDisplay = ({
  easyCount,
  hardCount,
  mediumCount,
  veryHardCount,
}: DifficultiesProps) => {
  return (
    <div className="mb-4">
      <h4 className="text-center">🌟 Difficulty Statistics</h4>
      <div
        className="border rounded p-3 px-2
border rounded"
      >
        <Row className="gap-2 mx-auto">
          <Col className="p-2 m-2 bg-pg-success rounded d-flex flex-column justify-content-center align-items-center text-center">
            <div className="fs-2">{easyCount}</div>
            <span>Easy</span>
          </Col>
          <Col className="text-pg-dark p-2 m-2 bg-pg-warning rounded d-flex flex-column justify-content-center align-items-center text-center">
            <div className="fs-2">{mediumCount}</div>
            <span>Medium</span>
          </Col>
        </Row>
        <Row className="mx-auto">
          <Col className="p-2 m-2 bg-pg-danger rounded d-flex flex-column justify-content-center align-items-center text-center">
            <div className="fs-2">{hardCount}</div>
            <span>Hard</span>
          </Col>
          <Col className="text-pg-dark p-2 m-2 bg-pg-secondary rounded d-flex flex-column justify-content-center align-items-center text-center">
            <div className="fs-2">{veryHardCount}</div>
            <span>Very hard</span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DifficultiesDisplay;
