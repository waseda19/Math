import { evaluateAnswer } from '../src/functions/evaluateAnswer';
import { assert } from './helpers';

export function run() {
  assert(evaluateAnswer('2', '2'));
  assert(!evaluateAnswer('2', '3'));
}
