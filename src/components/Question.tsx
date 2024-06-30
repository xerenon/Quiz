import React from 'react';
import type { Answer, Question as QuestionType } from '../types';
import { shuffleArray } from '../utils';

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  handleAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, questionNumber, handleAnswer }) => {
  const shuffledAnswers = React.useMemo(() => shuffleArray(question.answers), [question]);

  return (
    <div className="question">
      <h2>ข้อ {questionNumber + 1}: {question.question}</h2>
      <div className="answers">
        {shuffledAnswers.map((answer: Answer, index: number) => (
          <button key={index} onClick={() => handleAnswer(answer.isCorrect)}>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
