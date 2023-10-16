import { Link } from "react-router-dom";
import StatsDisplay from "../components/history/History";

const Stats = () => {
  return (
    <>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      <StatsDisplay />
    </>
  );
};

export default Stats;
