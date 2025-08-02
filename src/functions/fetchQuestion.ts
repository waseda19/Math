import { questions } from '../data/questions';
import { Question } from '../types';
import { categoryFilter } from './categoryFilter';
import { shuffleQuestions } from './shuffleQuestions';

export function fetchQuestion(
  category?: string,
  difficulty?: number
): Question | undefined {
  const filtered = categoryFilter(questions, category, difficulty);
  const shuffled = shuffleQuestions(filtered);
  return shuffled[0];
}
