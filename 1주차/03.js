/*
    반복문
        for, while : ~하는 동안
    ----------------------------------------
    [for문의 기본 값]
    for (초기값; 조건식; 증감식) {}
    초기값 : 변수를 담는 값
    조건식 : 변수를 이만큼 돌릴 것이다
    증감식 : 초기값에 담긴 값을 조건을 걸어서 ~~만큼 증가 해 주는 것
        for (let i = 0; i < 10; i++) {
            console.log(i)
        }
    i가 0부터 10보다 작을 때 까지 돌아간다 의 로직
    ---------------------------------------------------------------------
    배열과 for문은 짝궁이다
    const arr = ["one", "two", "three", "four", "five"]
    for (let i = 0; i < arr.lenght; i++) {
        console.log(i)
        console.log(arr[i])
    }
*/

// 예시 ) 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하시오
let num = 10
for (let i = 0; i < 10 && num % 2; i++) {
    console.log(i)
}