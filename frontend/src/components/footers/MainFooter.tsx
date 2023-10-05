const MainFooter = () => {
  return (
    <footer className="my-4 mx-2">
      <div className="text-center">
        <h6>
          Created by{" "}
          <a
            target="_blank"
            href="https://twitter.com/XnonXte"
            className="link link-pg-accent"
          >
            XnonXte
          </a>
        </h6>
        <p>
          Join our{" "}
          <a
            className="text-decoration-none"
            target="_blank"
            href="https://discord.gg/wwDnTvw7"
            style={{ color: "	#7289DA" }}
          >
            Discord Server <i className="bi bi-discord"></i>
          </a>
        </p>
      </div>
      <div>
        <a
          target="_blank"
          href="https://github.com/XnonXte/PortalGuessr-FullStack/issues"
          className="link link-pg-warning text-decoration-none"
        >
          <code style={{ fontSize: "0.625rem" }}>
            Found a bug? Report on GitHub! <i className="bi bi-bug"></i>
          </code>
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://github.com/XnonXte/PortalGuessr-FullStack"
          className="link link-pg-light text-decoration-none"
          style={{ fontSize: "0.8rem" }}
        >
          GitHub <i className="bi bi-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default MainFooter;
