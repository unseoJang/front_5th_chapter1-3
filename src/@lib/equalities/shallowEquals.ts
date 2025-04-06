/**
 *
 * 1. 두 값이 정확히 같은지 확인 (참조가 같은 경우)
 * 2. 둘 중 하나라도 객체가 아닌 경우 처리
 *  3. 객체의 키 개수가 다른 경우 처리
 *  4. 모든 키에 대해 얕은 비교 수행
 *  이 부분을 적절히 수정하세요.
 * @param objA
 * @param objB
 * @returns
 */

export function shallowEquals<T>(objA: T, objB: T): boolean {
  // console.log("objA", Array.isArray(objA))
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }
  }
  return objA === objB;
}
