export const hooksCode = `import { useReducer } from 'react';

const updateReducer = (num: number): number => (num + 1) % 1_000_000;

export function useUpdate(): () => void {
  const [, update] = useReducer(updateReducer, 0);
  return update;
}
`

export const utilsCode = `/** 延迟执行多少 ms */
export const delay = (ms: number) => {
  let startTime = performance.now()
  while (performance.now() - startTime < ms) {}
}
`
