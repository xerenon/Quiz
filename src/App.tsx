import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Leaderboard from './components/Leaderboard';
import Welcome from './components/Welcome';
import './App.css';

const App: React.FC = () => {
  const [playerName, setPlayerName] = useState<string | null>(null);
  const [scores, setScores] = useState<{name: string, score: number}[]>([]);

  const handleNewScore = (score: number) => {
    if (playerName) {
      setScores(prevScores => [...prevScores, {name: playerName, score}]);
      setPlayerName(null);
    }
  };

  useEffect(() => {

    const storedScores = JSON.parse(localStorage.getItem('scores') || '[]');
    setScores(storedScores);
  }, []);

  useEffect(() => {
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [scores]);

  return (
    <div className="container">
      <h1>Quiz</h1>
      {playerName ? (
        <Quiz handleNewScore={handleNewScore} />
      ) : (
        <Welcome setPlayerName={setPlayerName} />
      )}
      <Leaderboard scores={scores} />
    </div>
  );
};

export default App;
