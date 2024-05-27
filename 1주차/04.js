/**
 * 조건문 - if, else if , else, switch
 * 1. if(true 또는 false가 나올 수 있는 조건)
 * if (조건) {}
 * 
 */
// 1. if
let x = 10;

if (x > 0) {
    console.log("x는 양수입니다.")
}

// 1-2
let y = "hello world"

if (y.length >= 5) {
    console.log(y.length)
}

// if-else
if(x > 0) {
    console.log("x는 양수입니다.")
} else {
    console.log("x는 음수입니다.")
}

// if - else - if - else
if(x < 0) {
    console.log("1")
} else if(x >= 0 && x < 10) {
    console.log("2")
} else {
    console.log("3")
}

// switch : 변수의 값에 따라 여러 개의 경우(case) 중 하나를 선택
// default : 아니면
// case문을 사용할 때 break문을 사용해야 끊어짐
let fruit = "사과"

switch (fruit) {
    case "사과":
        console.log("사과입니다.")
        break;
    case "바나나":
        console.log("바나나 입니다.")
        break;
    case "키위":
        console.log("키위입니다.")
        break;
    default:
        console.log("아무 것도 아닙니다.")
        break;
}