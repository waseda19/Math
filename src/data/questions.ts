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
    questionLatex: '\\text{Area of a triangle with base }4\\text{ and height }3?',
    answer: '6',
    explanationLatex: '1/2\\times4\\times3=6'
  },
  {
    id: 3,
    category: 'geometry',
    difficulty: 1,
    questionLatex: '\\text{Hypotenuse of a right triangle with legs }3\\text{ and }4?',
    answer: '5',
    explanationLatex: '\\sqrt{3^2+4^2}=5'
  },
  {
    id: 4,
    category: 'trick',
    difficulty: 2,
    questionLatex: '1-2+3-4+\\cdots+99-100\\,=\\,?',
    answer: '-50',
    explanationLatex: '\\text{Each pair sums to }-1\\text{ for 50 pairs}'
  },
  {
    id: 5,
    category: 'geometry',
    difficulty: 2,
    questionLatex: '\\text{Area of a circle with radius }2?',
    answer: '4\\pi',
    explanationLatex: '\\pi\\times2^2=4\\pi'
  },
  {
    id: 6,
    category: 'geometry',
    difficulty: 1,
    questionLatex: '\\text{Sum of interior angles of a pentagon?}',
    answer: '540^\\circ',
    explanationLatex: '(5-2)\\times180^\\circ=540^\\circ'
  },
  {
    id: 7,
    category: 'algebra',
    difficulty: 2,
    questionLatex: '\\frac{x^2-1}{x-1}\\text{ for }x\\neq1',
    answer: 'x+1',
    explanationLatex: 'x^2-1=(x-1)(x+1)'
  },
  {
    id: 8,
    category: 'geometry',
    difficulty: 3,
    questionLatex: '\\text{Area of a square with diagonal }\\sqrt{2}?',
    answer: '1',
    explanationLatex: '\\frac{(\\sqrt{2})^2}{2}=1'
  }
];
