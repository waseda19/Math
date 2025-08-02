import { questions } from '../src/data/questions';
import { assert } from './helpers';

export function run() {
  assert(questions.length >= 8, 'Expected at least 8 questions');
  const categories = new Set(questions.map((q) => q.category));
  assert(categories.has('geometry'), 'Missing geometry questions');
  assert(categories.has('trick'), 'Missing trick questions');
}
