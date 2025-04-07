import { deepEquals } from "../equalities";
import { ComponentType } from "react";
import { memo } from "./memo.ts";

/**
 * eepMemo HOC는 컴포넌트의 props를 깊은 비교하여 불필요한 리렌더링을 방지합니다.
 * 1. deepEquals 함수를 사용하여 props 비교
 * 2. 앞에서 만든 memo를 사용
 * @param Component
 * @returns
 */
export function deepMemo<P extends object>(Component: ComponentType<P>) {
  // 1. deepEquals 함수를 사용하여 props 비교
  // console.log("Component=>", Component);

  // 2. 앞에서 만든 memo를 사용

  return memo(Component, deepEquals);
}
