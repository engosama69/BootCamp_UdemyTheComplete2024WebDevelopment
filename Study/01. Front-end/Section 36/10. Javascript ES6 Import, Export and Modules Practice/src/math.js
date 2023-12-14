const pi = 3.141592;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi; // 기본으로 내보낼 것
export { doublePi, triplePi };