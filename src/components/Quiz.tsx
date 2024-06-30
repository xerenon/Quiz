import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { getQuestions } from '../utils';
import QuestionComponent from './Question';

const Quiz: React.FC<{ handleNewScore: (score: number) => void }> = ({ handleNewScore }) => {
  const [questions, setQuestions] = useState<Question[]>(getQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      handleNewScore(score + (isCorrect ? 1 : 0));
      alert(`Quiz finished! Your score is: ${score + (isCorrect ? 1 : 0)}`);
      setQuestions(getQuestions());
      setCurrentQuestionIndex(0);
      setScore(0);
    }
  };

  return (
    <div>
      <QuestionComponent 
        question={questions[currentQuestionIndex]} 
        questionNumber={currentQuestionIndex}
        handleAnswer={handleAnswer} 
      />
    </div>
  );
};

export default Quiz;
