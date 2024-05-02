/*
    구조 분해 할당 : destructuring(de + structure + ing)
    de = not
    structure = 구조
    구조를 없애고 각각을 할당한다.
    배열이나, 객체의 속성
    (1) 배열의 경우
        let [value1, value2] = [1, "new"];
        console.log("1", value1);
        console.log("2", value2);

        let arr = ["value1", "value12", "value3"];
        let [a, b, c, d = 4=(초기값을 줌)] = arr;

        console.log(a, b, c, d); 
    (2) 객체인 경우
        let user = {
        name: "nbc",
        age: 30,
        };
            // 구조분해 할당 위 키의 값을 아래처럼 가져올 수 있음 key=name: "밸류의 값"
            let { name, age } = {
            name: "nbc",
            age: 30,
            };
            console.log(name, age)를 찍으면 name의 밸류의 값(string), age의 밸류의 값(number)만 출력 됨

        // 새로운 이름으로 할당
            let user = {
            name: "nbc",
            age: 30,
            };
            
            위의 변수로 지정된 값을 아래처럼 사용할 수 있음

            let { name: newName, age: newAge } = user;
            console.log(newName, newAge);
            => 결과 값 : name의 값이 담긴 nbc가 출력, age의 값이 담긴 30이 출력
           let user = {
                name: "nbc",
                age: 30,
                birthday: "yesterday",
            };
            let { name, age, birthday = "today" } = user;
            console.log(name, age, birthday);              
            
*/
