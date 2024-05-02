/*
    배열의 요소로 함수를 할당
    const myArr = [
        function (a, b) {
            return a + b;
        },
        function (a, b) {
            return a - b;
        },
    ];
console.log("합친 값: " + myArr[0](20, 30), "뺀 값: " + myArr[1](30, 10));
*/
// 아래처럼 함수 안에 담긴 함수를 return 할 수 있음
function multipyBy(num) {
  // num이 아래에 새로 생긴 변수(multipyByTwo)의 값인 2가 들어가고 num === 2
  return function (x) {
    // x가 아래에 새로 생긴 변수(multipyByThree)의 값인 3이 들어감 x === 3
    return x * num;
  };
}
function add(x, y) {
  // 여기에 있는 x값은 이미 변수에서 값을 준 상황이니 x에는 3이 담겨있을 것
  return x + y; // 이제 출력으로 남은 y의 값과 num의 값을 지정해 주면 계산이 됨!
}

const multipyByTwo = multipyBy(2); // num에 담긴 값 2
const multipyByThree = multipyBy(3); // num에 담긴 값 3

console.log(multipyByTwo(20));
console.log(multipyByThree(30));

const result = add(multipyByTwo(5), multipyByThree(10));
console.log(`FINAL => ${result}`);

/*
    이해 안 가는 부분
    1. 함수 multipyBy(num)를 input하고 return(output)를 한 뒤 또
    `
*/
