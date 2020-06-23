import isArray from './is-array';
import isString from './is-string';
//函数重载，不同入参类型返回结果类型也不同
function startsWith(arr: string, e: string): boolean;
function startsWith<T>(arr: T[], e: T): boolean;
function startsWith<T>(arr: string | T[], e: string | T): boolean {
  return (isArray(arr) || isString(arr)) ? arr[0] === e : false;
}

export default startsWith;
