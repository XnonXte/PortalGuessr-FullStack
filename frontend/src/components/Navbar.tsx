import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="p-2 d-flex justify-content-between align-items-center gap-2 border-bottom border-pg-light">
      <div>
        <Link
          to="/user/<id>"
          className="bi bi-person-circle mx-1 mx-md-2 text-pg-light"
          style={{ fontSize: "22px" }}
          title="User profile"
        ></Link>
        <Link
          to="/about"
          className="bi bi-question mx-1 mx-md-2 text-pg-primary"
          style={{ fontSize: "22px" }}
          title="About PortalGuessr"
        ></Link>
      </div>
      <div>
        <Link
          to="/"
          className="text-decoration-none d-flex gap-1 align-items-center"
        >
          <img
            src={logo}
            alt="PortalGuessr's logo"
            className="align-text-top rounded d-none d-sm-inline"
            style={{ width: "30px" }}
          />
          <span
            className="fs-4 fw-bold"
            style={{
              backgroundColor: "red",
              backgroundImage:
                "linear-gradient(45deg, rgba(196, 54, 54, 1) 35%, rgba(50, 100, 255, 1) 100%)",
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              MozBackgroundClip: "text",
            }}
          >
            PortalGuessr
          </span>
        </Link>
      </div>
      <div>
        <Link
          to="/user/stats/<id>"
          className="bi bi-bar-chart-fill mx-1 mx-md-2 text-pg-accent"
          style={{ fontSize: "22px" }}
          title="User statistics"
        ></Link>
        <Link
          to="/setting"
          className="bi bi-gear-fill mx-1 mx-md-2 text-pg-light"
          style={{ fontSize: "22px" }}
          title="Game setting"
        ></Link>
      </div>
    </nav>
  );
};

export default Navbar;
