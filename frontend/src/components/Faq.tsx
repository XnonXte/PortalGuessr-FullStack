const Faq = () => {
  return (
    <section className="my-4 mx-2">
      <h4 className="text-center">F.A.Q.</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-pg-dark text-pg-light bg-opacity-25">
          <h5 className="text-pg-primary">Is PortalGuessr free?</h5>
          <span>
            Yes! PortalGuessr is a free to use quiz-game for Portal maps and
            will stay as is for the being.
          </span>
        </li>
        <li className="list-group-item bg-pg-dark text-pg-light bg-opacity-25">
          <h5 className="text-pg-primary">
            What is the goal with PortalGuessr moving forward?
          </h5>
          <span>
            I certainly hope I can maintain PortalGuessr as the time progresses,
            as I think this is my passion-project for creating website
            applications or just application in general with the Discord bot. A
            good end-goal would be creating a mobile app with more features
            packed.
          </span>
        </li>
        <li className="list-group-item bg-pg-dark text-pg-light bg-opacity-25">
          <h5 className="text-pg-primary">
            What are the tech-stacks for PortalGuessr?
          </h5>
          <span>
            I will explain it here briefly since this is a quite nerdy. For the
            front-end, I use React, Bootstrap, and Bootstrap icons for creating
            the UI. For the back-end, I use Express.js creating the server,
            MongoDB for storing data, and Google Drive via Google Drive API for
            storing chamber images.
          </span>
        </li>
        <li className="list-group-item bg-pg-dark text-pg-light bg-opacity-25">
          <h5 className="text-pg-primary">
            Is the code for PortalGuessr open-source?
          </h5>
          <span>
            Yes! At least for the time being. The code for this website is
            available on{" "}
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
