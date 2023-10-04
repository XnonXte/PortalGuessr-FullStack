/* 
Easy - 10 seconds per round.
Medium - 15 seconds per round.
Hard - 20 seconds per round.
Very Hard - 25 seconds per round.
*/

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import beginnerCap from "../../assets/easy-image-cap.webp";
import intermediateCap from "../../assets/medium-image-cap.webp";
import advancedCap from "../../assets/hard-image-cap.webp";
import expertCap from "../../assets/very+hard-image-cap.webp";
import randomCap from "../../assets/random-image-cap.webp";

import { StartingCardsProps } from "../../proptypes/StartingCardsProps";

import "../../css/StartingCards.css";

const StartingCards = ({ handleGameStart }: StartingCardsProps) => {
  return (
    <Row className="gap-2 gap-xxl-0">
      {/* Easy difficulty */}
      <Col className="m-auto">
        <Card
          className="card-pg bg-pg-success text-pg-light"
          onClick={() => handleGameStart("Easy", 120, 10)}
        >
          <Card.Img
            variant="top"
            src={beginnerCap}
            alt="Beginner image cap"
          ></Card.Img>
          <Card.Body>
            <Card.Title className="text-center">
              Beginner <span className="d-none d-xxl-inline">🔰</span>
            </Card.Title>
            <Card.Text as="ul" className="d-none d-md-block">
              <li>Easy difficulty</li>
              <li>2 minutes timeout</li>
              <li>10 total rounds</li>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Medium difficulty */}
      <Col className="m-auto">
        <Card
          className="card-pg bg-pg-warning text-pg-dark"
          onClick={() => handleGameStart("Medium", 240, 10)}
        >
          <Card.Img
            variant="top"
            src={intermediateCap}
            alt="Intermediate image cap"
          ></Card.Img>
          <Card.Body>
            <Card.Title className="text-center">
              Intermediate <span className="d-none d-xxl-inline">⌛</span>
            </Card.Title>
            <Card.Text as="ul" className="d-none d-md-block">
              <li>Medium difficulty</li>
              <li>4 minutes timeout</li>
              <li>10 total rounds</li>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Hard difficulty */}
      <Col className="m-auto">
        <Card
          className="card-pg bg-pg-danger text-pg-light"
          onClick={() => handleGameStart("Hard", 360, 10)}
        >
          <Card.Img
            variant="top"
            src={advancedCap}
            alt="Advanced image cap"
          ></Card.Img>
          <Card.Body>
            <Card.Title className="text-center text-pg-light">
              Advanced <span className="d-none d-xxl-inline">💪</span>
            </Card.Title>
            <Card.Text as="ul" className="d-none d-md-block">
              <li>Hard difficulty</li>
              <li>6 minutes timeout</li>
              <li>10 total rounds</li>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Very hard difficulty */}
      <Col className="m-auto">
        <Card
          className="card-pg bg-pg-secondary text-pg-dark"
          onClick={() => handleGameStart("Very Hard", 480, 10)}
        >
          <Card.Img
            variant="top"
            src={expertCap}
            alt="Expert image cap"
          ></Card.Img>
          <Card.Body>
            <div
              className="card-title  fs-5
           fs-5 text-center"
            >
              <Card.Title className="text-center">
                Expert <span className="d-none d-xxl-inline">🔥</span>
              </Card.Title>
            </div>
            <Card.Text as="ul" className="d-none d-md-block">
              <li>Very Hard difficulty</li>
              <li>8 minutes timeout</li>
              <li>10 total rounds</li>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Random difficulty */}
      <Col className="m-auto">
        <Card
          className="card-pg bg-pg-primary text-pg-light"
          onClick={() => handleGameStart(null, 300, 10)}
        >
          <Card.Img
            variant="top"
            src={randomCap}
            alt="Random image cap"
          ></Card.Img>
          <Card.Body>
            <div
              className="card-title  fs-5
           fs-5 text-center"
            >
              <Card.Title className="text-center">
                Random <span className="d-none d-xxl-inline">🤔</span>
              </Card.Title>
            </div>
            <Card.Text as="ul" className="d-none d-md-block">
              <li>Random difficulty</li>
              <li>5 minutes timeout</li>
              <li>10 total rounds</li>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default StartingCards;
