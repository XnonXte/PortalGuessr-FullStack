import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Stats = () => {
  return (
    <>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      <section className="my-4 mx-2">
        <div className="mb-4">
          {/* Statistics section. */}
          <h4 className="text-center">📋 Statistics</h4>
          <div className="d-flex justify-content-center justify-content-md-around align-items-center gap-2 mx-auto border rounded p-3 px-2">
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <div className="fs-2">2</div>
              <span>Played</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <div className="fs-2">100%</div>
              <span>Correct %</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <div className="fs-2">10</div>
              <span>Correct</span>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center text-center">
              <div className="fs-2">0</div>
              <span>Incorrect</span>
            </div>
          </div>
        </div>

        {/* Difficulties section. */}
        <div className="mb-4">
          <h4 className="text-center">🌟 Difficulties Played</h4>
          <div
            className="border rounded p-3 px-2
border rounded"
          >
            <Row className="gap-2 mx-auto">
              <Col className="p-2 m-2 bg-pg-success rounded d-flex flex-column justify-content-center align-items-center text-cente">
                <div className="fs-2">2</div>
                <span>Easy</span>
              </Col>
              <Col className="text-pg-dark p-2 m-2 bg-pg-warning rounded d-flex flex-column justify-content-center align-items-center text-cente">
                <div className="fs-2">8</div>
                <span>Medium</span>
              </Col>
            </Row>
            <Row className="mx-auto">
              <Col className="p-2 m-2 bg-pg-danger rounded d-flex flex-column justify-content-center align-items-center text-cente">
                <div className="fs-2">9</div>
                <span>Hard</span>
              </Col>
              <Col className="text-pg-dark p-2 m-2 bg-pg-secondary rounded d-flex flex-column justify-content-center align-items-center text-cente">
                <div className="fs-2">2</div>
                <span>Very hard</span>
              </Col>
            </Row>
          </div>
        </div>

        {/* Share on social media section. */}
        <div className="mb-4">
          <h5 className="text-center">😎 Share</h5>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <div title="Share to instagram" style={{ cursor: "pointer" }}>
              <i className="bi bi-instagram fs-4"></i>
            </div>
            <div title="Share to twitter" style={{ cursor: "pointer" }}>
              <i className="bi bi-twitter fs-4"></i>
            </div>
            <div title="Share to facebook" style={{ cursor: "pointer" }}>
              <i className="bi bi-facebook fs-4"></i>
            </div>
            <div title="Take screenshot" style={{ cursor: "pointer" }}>
              <i className="bi bi-image-fill fs-4"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
