const ShareStats = () => {
  return (
    <div className="mb-4">
      <h5 className="text-center">😎 Share</h5>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <div
          title="Share to instagram"
          style={{ cursor: "pointer" }}
          onClick={() => alert("Feature coming soon...")}
        >
          <i className="bi bi-instagram fs-4"></i>
        </div>
        <div
          title="Share to twitter"
          style={{ cursor: "pointer" }}
          onClick={() => alert("Feature coming soon...")}
        >
          <i className="bi bi-twitter fs-4"></i>
        </div>
        <div
          title="Share to facebook"
          style={{ cursor: "pointer" }}
          onClick={() => alert("Feature coming soon...")}
        >
          <i className="bi bi-facebook fs-4"></i>
        </div>
        <div
          title="Take screenshot"
          style={{ cursor: "pointer" }}
          onClick={() => alert("Feature coming soon...")}
        >
          <i className="bi bi-image-fill fs-4"></i>
        </div>
      </div>
    </div>
  );
};

export default ShareStats;
