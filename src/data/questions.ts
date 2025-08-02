import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    category: 'algebra',
    difficulty: 1,
    questionLatex: '1+1=\\,?',
    answer: '2',
    explanationLatex: '1+1=2'
  },
  {
    id: 2,
    category: 'geometry',
    difficulty: 2,
    questionLatex: '\\int_0^1 x\\,dx',
    answer: '1/2',
    explanationLatex: 'The integral of x from 0 to 1 is 1/2'
  }
];
