const MainFooter = () => {
  return (
    <footer className="my-4 mx-2 text-center">
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
      <span>
        Join our{" "}
        <a
          className="text-decoration-none"
          target="_blank"
          href="https://discord.gg/wwDnTvw7"
          style={{ color: "	#7289DA" }}
        >
          Discord Server <i className="bi bi-discord"></i>
        </a>
      </span>
    </footer>
  );
};

export default MainFooter;
