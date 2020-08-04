import React from "react";
import Game from "./components/game/Game";
import "./App.css";
import bunny from "./assets/images/bunny.png";
import hound from "./assets/images/hound.png";
import raccoon from "./assets/images/raccoon.png";
import squirrel from "./assets/images/squirrel.png";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: raccoon,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: squirrel,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: bunny,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: hound,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
