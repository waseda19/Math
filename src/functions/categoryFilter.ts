import { Question } from '../types';

export function categoryFilter(
  qs: Question[],
  category?: string,
  difficulty?: number
): Question[] {
  return qs.filter((q) => {
    const catOk = category !== undefined ? q.category === category : true;
    const diffOk = difficulty !== undefined ? q.difficulty === difficulty : true;
    return catOk && diffOk;
  });
}
