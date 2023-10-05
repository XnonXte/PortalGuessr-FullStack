const Faq = () => {
  return (
    <section className="my-4 mx-2">
      <h5 className="text-center">F.A.Q.</h5>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-pg-dark bg-opacity-25">
          <h6 className="text-pg-primary">
            Is PortalGuessr available as a mobile app?
          </h6>
          <span className="text-pg-light">
            No, at least not currently, as that would require a lot of
            components to be migrated to function as a native mobile
            application.
          </span>
        </li>

        <li className="list-group-item bg-pg-dark bg-opacity-25">
          <h6 className="text-pg-primary">
            Is the code for PortalGuessr open-source?
          </h6>
          <span className="text-pg-light">
            Yes 100% of the code! Both the front-end and back-end of
            PortalGuessr is available on GitHub.
          </span>
        </li>

        <li className="list-group-item bg-pg-dark bg-opacity-25">
          <h6 className="text-pg-primary">
            What are the tech-stacks for PortalGuessr?
          </h6>
          <span className="text-pg-light">
            I use React for the front-end and Express for the back-end. As for
            UI specifically I use React-Bootstrap for ease of integration
            between React and Bootstrap, Bootstrap icons for you've guessed
            it... icons, and React-Router for seamless navigation between pages.
          </span>
        </li>

        <li className="list-group-item bg-pg-dark bg-opacity-25">
          <h6 className="text-pg-primary">Can I contribute to PortalGuessr?</h6>
          <span className="text-pg-light">
            Yes, be sure to join the Discord server if you want to contribute to
            PortalGuessr. Either as a developer or just as an ordinary user
            submitting new images and such. The link is down below in the footer
            section 👇
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Faq;
