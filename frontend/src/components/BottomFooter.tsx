const BottomFooter = () => {
  return (
    <footer className="my-4 mx-2">
      <div className="fs-5">
        Created with 💖 by{" "}
        <a
          target="_blank"
          href="https://twitter.com/XnonXte"
          className="link link-pg-light"
        >
          XnonXte
        </a>
      </div>
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
