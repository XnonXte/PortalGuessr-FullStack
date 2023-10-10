import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Setting = () => {
  return (
    <>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      <section className="my-4 mx-2">
        <h4 className="text-center">⚙ Settings</h4>
        <div className="mb-4">
          <hr />
          <h6>📳 Difficulty Mod</h6>
          <span>
            These modifiers will override your game after they're applied.
          </span>
          <Form>
            <Form.Check type="switch" label="Gray scale image"></Form.Check>
            <Form.Check
              type="switch"
              label="Rotate image randomly"
            ></Form.Check>
            <Form.Check type="switch" label="Keep image blurred"></Form.Check>
          </Form>
          <hr />
        </div>
        <div className="mb-4">
          <hr />

          <h6 className="text-pg-danger">⛔ Danger Section!</h6>
          <Button variant="pg-danger" className="text-white">
            Clear current statistics
          </Button>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Setting;
