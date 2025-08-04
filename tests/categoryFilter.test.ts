import { categoryFilter } from '../src/functions/categoryFilter';
import { questions } from '../src/data/questions';
import { assertEqual } from './helpers';
import { Question } from '../src/types';

export function run() {
  const filtered = categoryFilter(questions, 'algebra', 1);
  assertEqual(filtered.length, 1);
  assertEqual(filtered[0].id, 1);

  // difficulty 0 should be respected
  const zeroDiff: Question[] = [
    {
      id: 99,
      category: 'algebra',
      difficulty: 0,
      questionLatex: '',
      answer: '',
      explanationLatex: ''
    }
  ];
  const zeroFiltered = categoryFilter(zeroDiff, undefined, 0);
  assertEqual(zeroFiltered.length, 1);

  // empty string category should be respected
  const emptyCat: Question[] = [
    {
      id: 100,
      category: '',
      difficulty: 1,
      questionLatex: '',
      answer: '',
      explanationLatex: ''
    }
  ];
  const emptyFiltered = categoryFilter(emptyCat, '', undefined);
  assertEqual(emptyFiltered.length, 1);
}
