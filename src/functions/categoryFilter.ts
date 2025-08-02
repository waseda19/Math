import { Question } from '../types';

export function categoryFilter(
  qs: Question[],
  category?: string,
  difficulty?: number
): Question[] {
  return qs.filter((q) => {
    const catOk = category ? q.category === category : true;
    const diffOk = difficulty ? q.difficulty === difficulty : true;
    return catOk && diffOk;
  });
}
