import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div>
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          age={player.age}
        />
      ))}
    </div>
  );
};

export default PlayersList;
