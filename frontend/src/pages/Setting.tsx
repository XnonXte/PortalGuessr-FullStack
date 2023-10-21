import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Setting = () => {
  function handleClearClick() {
    const doStatsExist = localStorage.getItem("USER_STATS") ? true : false;

    if (!doStatsExist) {
      alert(
        "Stats not detected! You might have cleared them already or they don't exist."
      );
      return;
    }

    const isConfirmed = confirm(
      "Are you sure to delete user stats? This is irreversible!"
    );

    if (isConfirmed) {
      localStorage.removeItem("USER_STATS");
    }
  }

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
          Coming soon...
          <hr />
        </div>
        <div className="mb-4">
          <hr />

          <h6 className="text-pg-danger">⛔ Danger Section!</h6>
          <Button
            variant="pg-danger"
            className="text-white"
            onClick={handleClearClick}
          >
            Clear current statistics
          </Button>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Setting;
