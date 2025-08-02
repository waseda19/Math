import { run as runShuffle } from './shuffleQuestions.test';
import { run as runCategory } from './categoryFilter.test';
import { run as runEval } from './evaluateAnswer.test';

runShuffle();
runCategory();
runEval();

console.log('All tests passed');
