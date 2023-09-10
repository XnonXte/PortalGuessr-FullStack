const BottomFooter = () => {
  return (
    <footer className="my-4 mx-2">
      <h6>
        Created with <i className="bi bi-heart-fill text-danger"></i> by{" "}
        <a
          target="_blank"
          href="https://twitter.com/XnonXte"
          className="link link-pg-light"
        >
          XnonXte
        </a>
      </h6>
      <span>
        Interested in contributing? Open a{" "}
        <a
          target="_blank"
          href="https://github.com/XnonXte/PortalGuessr-FullStack/pulls"
          className="link link-pg-primary"
        >
          PR on GitHub!
        </a>
      </span>
    </footer>
  );
};

export default BottomFooter;
