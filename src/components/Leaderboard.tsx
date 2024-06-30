import React from 'react';

interface LeaderboardProps {
  scores: {name: string, score: number}[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {scores.map((entry, index) => (
          <li key={index}>{entry.name}: {entry.score}</li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
