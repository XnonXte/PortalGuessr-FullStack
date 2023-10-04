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
        <code className="text-pg-warning" style={{ fontSize: "0.625rem" }}>
          Found a bug? DM me on Discord @xnonxte
        </code>
      </div>
    </footer>
  );
};

export default MainFooter;
