import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <Link to="/" className="text-decoration-none">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      <section className="my-4 mx-2">
        <h4 className="text-center">
          🚧 This feature is under construction 🚧
        </h4>
        <span>
          As of PortalGuessr v0.0.1 beta-test, I haven't added the feature to
          save statistics in a kind of user profile. In the future I would like
          to add leaderboard, place where a user can upload their own images,
          and so on...
        </span>
      </section>
    </>
  );
};

export default User;
