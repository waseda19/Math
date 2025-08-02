import { run as runShuffle } from './shuffleQuestions.test';
import { run as runCategory } from './categoryFilter.test';
import { run as runEval } from './evaluateAnswer.test';
import { run as runData } from './questionsData.test';

runShuffle();
runCategory();
runEval();
runData();

console.log('All tests passed');
