import { questions } from './data/questions';
import { shuffleQuestions } from './functions/shuffleQuestions';
import { evaluateAnswer } from './functions/evaluateAnswer';
import { renderLatex } from './functions/renderLatex';

const quiz = shuffleQuestions(questions);
let index = 0;

function showQuestion(): void {
  const q = quiz[index];
  if (!q) {
    const questionEl = document.getElementById('question');
    if (questionEl) questionEl.textContent = 'Quiz complete!';
    return;
  }
  const questionEl = document.getElementById('question');
  const answerInput = document.getElementById('answer') as HTMLInputElement | null;
  const resultEl = document.getElementById('result');
  const explanationEl = document.getElementById('explanation');

  if (questionEl) questionEl.textContent = renderLatex(q.questionLatex);
  if (answerInput) answerInput.value = '';
  if (resultEl) resultEl.textContent = '';
  if (explanationEl) explanationEl.textContent = '';
}

function handleSubmit(): void {
  const q = quiz[index];
  if (!q) return;

  const answerInput = document.getElementById('answer') as HTMLInputElement | null;
  const userAnswer = answerInput ? answerInput.value : '';

  const correct = evaluateAnswer(q.answer, userAnswer);
  const resultEl = document.getElementById('result');
  const explanationEl = document.getElementById('explanation');
  if (resultEl) resultEl.textContent = correct ? 'Correct!' : 'Incorrect.';
  if (explanationEl)
    explanationEl.textContent = `Answer: ${renderLatex(q.answer)} | Explanation: ${renderLatex(q.explanationLatex)}`;

  const nextBtn = document.getElementById('next');
  if (nextBtn) nextBtn.style.display = 'inline';
}

function handleNext(): void {
  const nextBtn = document.getElementById('next');
  if (nextBtn) nextBtn.style.display = 'none';
  index += 1;
  showQuestion();
}

function init(): void {
  const submitBtn = document.getElementById('submit');
  const nextBtn = document.getElementById('next');
  if (submitBtn) submitBtn.addEventListener('click', handleSubmit);
  if (nextBtn) nextBtn.addEventListener('click', handleNext);
  showQuestion();
}

document.addEventListener('DOMContentLoaded', init);
