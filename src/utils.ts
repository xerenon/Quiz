import { Question } from './types';

export const shuffleArray = (array: any[]) => {
  return array.sort(() => Math.random() - 0.5);
};

export const getQuestions = (): Question[] => {
  const questions: Question[] = [
    {
      question: '1+1 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '2', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '1+2 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '2', isCorrect: false },
        { text: '3', isCorrect: true },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '1+3 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '2', isCorrect: false },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: true }
      ]
    },
    {
      question: '1+5 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '6', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '1+6 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '7', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '1+7 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '8', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '1+8 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '9', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '1+9 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '10', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '2+1 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '2', isCorrect: false },
        { text: '3', isCorrect: true },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '2+2 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '2', isCorrect: false },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: true }
      ]
    },
    {
      question: '2+3 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '5', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '2+4 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '6', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '2+5 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '7', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '2+6 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '8', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '2+7 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '9', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '2+8 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '10', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '2+9 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '11', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '3+1 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '2', isCorrect: false },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: true }
      ]
    },
    {
      question: '3+2 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '5', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
    {
      question: '3+3 = ?',
      answers: [
        { text: '1', isCorrect: false },
        { text: '6', isCorrect: true },
        { text: '3', isCorrect: false },
        { text: '4', isCorrect: false }
      ]
    },
  ];

  return shuffleArray(questions).slice(0, 20);
};
