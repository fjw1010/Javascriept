/*
    일급 객체로써의 함수를 이어서
        this는 자기 자신을 나타내는 뜻
        객체에는 키-밸류로 이루어져 있는데, 이 객체에는
        함수도 사용할 수 있음(아래 sayHello 부분을 참고)
        const person = {
            name: "young",
            age: 30,
            ismarried: true,
            sayHello: function () {
                console.log("hello, my name is");
            },
        };
        person.sayHello();
        그리고 템플릿 리터럴(`${}`)를 이용해서 객체에 담긴 함수의 값에
        같은 객체인 name을 `${}`로 출력할 수 있음! >> `${this.name}` <<
        const person = {
            name: "young",
            age: 30,
            ismarried: true,
            sayHello: function () {
                console.log(`hello, my name is ${this.name}`);
            },
        };
        여기서 ``을 사용할 때, 같이 담고 싶은 문자열도 담아야 템플릿 리터럴의
        장점을 최대한 활용할 수 있기 때문에 같이 넣는 것이 좋음!

        만약에 화살표 함수인 형태로 객체에 담고 싶다면?
            sayHello () => {
                console.log(`hello, my name is ${this.name}`);
            }
        이렇게 짜여지지만, 결과 값을 보면 undefined의 값이 출력 됨
        이유는 화살표 함수를 사용하여 this 값을 사용하면, this는 객체를
        가르키지 않고, 전역 객체(브라우저)를 가르키기 때문에
        undefined의 값이 출력 됨 (규칙이 그렇게 정해져있는 것)
        만약에 객체에 화살표 함수를 쓰고 싶다면(가능하면 사용X)
        const person = {
            name: "young",
            age: 30,
            ismarried: true,
            sayHello: () => {
                console.log(`hello, my name is ${person.name}`);
            },
        };
        person.sayHello() 라고 정직하게 규칙을 바꿔줘야함!
*/
