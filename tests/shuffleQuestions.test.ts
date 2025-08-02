import { shuffleQuestions } from '../src/functions/shuffleQuestions';
import { questions } from '../src/data/questions';
import { assertArrayEqual, assertEqual } from './helpers';

export function run() {
  const shuffled = shuffleQuestions(questions);
  assertEqual(shuffled.length, questions.length);
  const ids = shuffled.map((q) => q.id).sort();
  const originalIds = questions.map((q) => q.id).sort();
  assertArrayEqual(ids, originalIds);
}
