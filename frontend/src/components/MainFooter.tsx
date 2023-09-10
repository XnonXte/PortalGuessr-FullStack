import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <section className="text-center">
      <span>
        Help me add more images <Link to="new-image">here</Link>!
      </span>
    </section>
  );
};

export default MainFooter;
