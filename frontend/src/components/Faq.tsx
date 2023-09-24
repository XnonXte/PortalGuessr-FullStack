const Faq = () => {
  return (
    <section className="my-4 mx-2">
      <h4 className="text-center">F.A.Q.</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-pg-dark text-pg-light bg-opacity-25">
          <h5 className="text-pg-primary">Is PortalGuessr free?</h5>
          <span>
            Yes! PortalGuessr is a free quiz game for Portal maps that will
            remain as is for the time being.
          </span>
        </li>
        <li className="list-group-item bg-pg-dark text-pg-light bg-opacity-25">
          <h5 className="text-pg-primary">
            What is the goal with PortalGuessr moving forward?
          </h5>
          <span>
            I certainly hope I can keep PortalGuessr as the time move forward,
            as I think this is my passion-project for making website
            applications or just application in general with the Discord bot. A
            nice end goal would be to create a mobile app with more
            functionality.
          </span>
        </li>
        <li className="list-group-item bg-pg-dark text-pg-light bg-opacity-25">
          <h5 className="text-pg-primary">
            What are the tech-stacks for PortalGuessr?
          </h5>
          <span>
            I'll explain it short here because it's rather nerdy. For the
            front-end, I utilize React, Bootstrap, and Bootstrap icons to create
            the user interface. For the backend, I use Express.js to build the
            server, MongoDB to store data, and Google Drive via the Google Drive
            API to save chamber images.
          </span>
        </li>
        <li className="list-group-item bg-pg-dark text-pg-light bg-opacity-25">
          <h5 className="text-pg-primary">
            Is the code for PortalGuessr open-source?
          </h5>
          <span>
            Yes! For the time being, at least. The source code for this website
            is available on{" "}
            <a
              target="_blank"
              href="https://github.com/XnonXte/PortalGuessr-FullStack"
            >
              https://github.com/XnonXte/PortalGuessr-FullStack
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://github.com/XnonXte/PortalGuessr">
              https://github.com/XnonXte/PortalGuessr
            </a>{" "}
            for the Discord bot.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Faq;
