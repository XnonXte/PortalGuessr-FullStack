import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <section className="text-center">
      <h6>
        Like PortalGuessr?{" "}
        <a target="_blank" href="https://github.com/XnonXte/PortalGuessr">
          Try PortalGuessr Discord Bot
        </a>
      </h6>
      <Link className="link link-pg-light" to="new-image">
        Help me by adding more images!
      </Link>
    </section>
  );
};

export default MainFooter;
