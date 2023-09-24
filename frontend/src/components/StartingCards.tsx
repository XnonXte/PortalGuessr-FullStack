/* 
Easy - 10 seconds per round.
Medium - 15 seconds per round.
Hard - 20 seconds per round.
Very Hard - 25 seconds per round.
*/

import { StartingCardsProps } from "../types/StartingCardsProps";

import beginnerCap from "../assets/easy-image-cap.jpg";
import intermediateCap from "../assets/medium-image-cap.jpg";
import advancedCap from "../assets/hard-image-cap.jpg";
import expertCap from "../assets/very+hard-image-cap.jpg";
import randomCap from "../assets/random-image-cap.jpg";

const StartingCards = ({ handleGameStart }: StartingCardsProps) => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
      <div
        className="card card-pg card-pg-green bg-pg-success text-pg-light"
        onClick={() => handleGameStart("Easy", 120, 10)}
      >
        <img
          src={beginnerCap}
          alt="Beginner image cap"
          className="card-img-top"
        />
        <div className="card-body">
          <div className="card-title fs-5 text-center">Beginner 🔰</div>
          <hr className="d-none d-xl-block" />
          <ul className="card-text d-none d-xl-block">
            <li>Easy difficulty</li>
            <li>2 minutes timeout</li>
            <li>10 total rounds</li>
          </ul>
        </div>
      </div>
      <div
        className="card card-pg card-pg-orange bg-pg-warning text-pg-dark"
        onClick={() => handleGameStart("Medium", 240, 10)}
      >
        <img
          src={intermediateCap}
          alt="Intermediate image cap"
          className="card-img-top"
        />
        <div className="card-body">
          <div className="card-title fs-5 text-center">Intermediate ⌛</div>
          <hr className="d-none d-xl-block" />
          <ul className="card-text d-none d-xl-block">
            <li>Medium difficulty</li>
            <li>4 minutes timeout</li>
            <li>10 total rounds</li>
          </ul>
        </div>
      </div>
      <div
        className="card card-pg card-pg-salmon bg-pg-danger text-light"
        onClick={() => handleGameStart("Hard", 360, 10)}
      >
        <img
          src={advancedCap}
          alt="Advanced image cap"
          className="card-img-top"
        />
        <div className="card-body">
          <div className="card-title fs-5 text-center">Advanced 💪</div>
          <hr className="d-none d-xl-block" />
          <ul className="card-text d-none d-xl-block">
            <li>Hard difficulty</li>
            <li>6 minutes timeout</li>
            <li>10 total rounds</li>
          </ul>
        </div>
      </div>
      <div
        className="card card-pg card-pg-blue bg-pg-secondary text-light"
        onClick={() => handleGameStart("Very Hard", 480, 10)}
      >
        <img src={expertCap} alt="Expert image cap" className="card-img-top" />
        <div className="card-body">
          <div
            className="card-title  fs-5
 fs-5 text-center"
          >
            Expert 🔥
          </div>
          <hr className="d-none d-xl-block" />
          <ul className="card-text d-none d-xl-block">
            <li>Very Hard difficulty</li>
            <li>8 minutes timeout</li>
            <li>10 total rounds</li>
          </ul>
        </div>
      </div>
      <div
        className="card card-pg card-pg-red bg-pg-primary text-light"
        onClick={() => handleGameStart(null, 300, 10)}
      >
        <img src={randomCap} alt="Random image cap" className="card-img-top" />
        <div className="card-body">
          <div
            className="card-title  fs-5
 fs-5 text-center"
          >
            Random 🤔
          </div>
          <hr className="d-none d-xl-block" />
          <ul className="card-text d-none d-xl-block">
            <li>Random difficulty</li>
            <li>5 minutes timeout</li>
            <li>10 total rounds</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartingCards;
