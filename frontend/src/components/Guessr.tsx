const Guessr = () => {
  return (
    <section className="my-4 mx-2 d-flex flex-column justify-content-center align-items-center">
      <img
        src="src\assets\placeholder.jpg"
        alt="Placeholder"
        className="img-fluid rounded-3 w-75 h-auto"
      />
      <div className="mt-4 d-flex align-items-center gap-2">
        <span className="fw-bold py-2 px-1 border rounded">1/10</span>
        <span className=" py-2 px-1 border rounded">
          <i className="bi bi-stopwatch-fill"></i> 00:00
        </span>
        <span className="py-2 px-1 border rounded bg-pg-dark">
          Easy Difficulty
        </span>
      </div>
    </section>
  );
};

export default Guessr;
