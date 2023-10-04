import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GameStatsProps } from "../../proptypes/GameStatsProps";

const GameStats = ({
  correctCount,
  incorrectCount,
  totalRounds,
}: GameStatsProps) => {
  return (
    <Row className="mb-2 mx-auto">
      <Col>
        <div className="fs-2">{correctCount}</div>
        <span>Correct Answers</span>
      </Col>
      <Col>
        <div className="fs-2">{incorrectCount}</div>
        <span>Incorrect Answers</span>
      </Col>
      <Col>
        <div className="fs-2">{totalRounds}</div>
        <span>Total Rounds</span>
      </Col>
    </Row>
  );
};

export default GameStats;
