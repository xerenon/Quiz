import React, { useState } from 'react';

interface WelcomeProps {
  setPlayerName: (name: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ setPlayerName }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name.trim()) {
      setPlayerName(name);
    }
  };

  return (
    <div className="welcome">
      <h2>Welcome to the Quiz</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name" 
          required 
        />
        <button type="submit">Start</button>
      </form>
    </div>
  );
};

export default Welcome;
