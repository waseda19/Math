import { questions } from '../src/data/questions';
import { assert, assertEqual } from './helpers';

export function run() {
  assertEqual(questions.length, 8);
  const triangle = questions.find((q) => q.id === 2);
  assert(triangle !== undefined && triangle.answer === '6');
}
