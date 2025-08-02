import { categoryFilter } from '../src/functions/categoryFilter';
import { questions } from '../src/data/questions';
import { assertEqual } from './helpers';

export function run() {
  const filtered = categoryFilter(questions, 'algebra', 1);
  assertEqual(filtered.length, 1);
  assertEqual(filtered[0].id, 1);
}
