/*
    일급 객체로서의 함수
        (1)변수에 함수를 할당할 수 있다.
            함수가 마치 값으로 취급된다.
            함수가 나중에 사용될(재사용) 수 있도록 조치가 되었다.
            const sayHello = function () {
                console.log("Hello!");
            };
            sayHello(); < 라고 선언해야 출력이 됨!
        (2) 함수를 인자로 다른 함수에 전달할 수 있다.
            function callFunction (func) {
                // 매개 변수(func)로 받은 변수가 사실 함수다.
                func();
            }
            + 콜백함수 : 매개변수로써 쓰이는 함수
            + 고차함수 : 함수를 인자로 받거나 return하는 함수
                고차함수는 콜백함수이면서 고차함수
                콜백함수는 고차함수이면서 콜백함수
            function callFunction(func) {
                func();
            }

            const sayHello = function () {
                console.log("Hello!");
            };

            callFunction(sayHello); >> 매개변수로써 함수가 들어간 '콜백함수'
            callFunction의 매개변수 안에 sayHello라는 값을 넣을 수 있음
            이런 함수가 왜 가능하냐면 일급 객체이기 때문에 가능함!
        (3) 함수를 반환할 수 있다.
            위에서 말 했던 고차함수의 형식으로
            function createadder(num) {
                return function (x) {
                    return x + num;
                }
            }

            const addFive = createadder(5) // 매개변수에 들어간 5의 값은 num의 값
            왜냐면 위에있는 createadder 함수명을 addFive에 넣었기 때문에
            함수 안에서 리턴한 x의 값을 주려면?
            console.log(addFive(10))
            그러면 결과 값은 15가 출력
            함수를 함수 안에 넣은 값을 2번 리턴 한 걸
            const addFive 안에 담았고, 2번 리턴한 값(num)과 (x)가 + 되는 연산을 담았기 때문에
            15가 나옴


        ========= 내가 예시로 고차함수를 쓴 것 ========
            function arr(num) {
                return function (x) {
                    return x * num;
                };
            }
            const test = arr(5)(5);
            console.log(test);

            이미 위에서는 test에 arr의 값을 다 담은 상태고, 결과 값은 같을텐데
            2번 출력할 이유가 없다고 생각해서 arr뒤에 (num)(x)의 값을 도출한
            test만 출력해 주면 결과 값이 25가 나오는 걸 알 수 있음!
*/
