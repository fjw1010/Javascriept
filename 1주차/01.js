/*
    객체 : key: value
    장점 : 하나의 변수에 여러 개의 값을 넣을 수 있다!
        함수, 배열, 또 다른 객체
    ----------------------------------------------------
    1. 객체 생성 방법
        let person = {
        name: "홍길동",
        age: 30,
        gender: "남자"
    }
    ----------------------------------------------------
    2. 생성자 함수를 이용한 객체 생성 방법
        functuion person (name, age, gender) {
            this.name = name
            this.age = age
            this.gender = gerder
        }
        let person1 = new perso("홍길동", 30, "남자")
        - 접근 하는 방법
        console.log(person.name) // person의 name값에 접근 하겠다 라는 말
    ---------------------------------------------------------------------------
    3. 객체 메소드 : 객체가 가진 여러가지 기능
        3-1. Object.key() : key를 가져오는 메소드
            let person = {
            name: "사람",
            age: 20,
            gender: "여자"
            }
            let a = Object.keys(객체이름) => 객체에 가진 key(변수이름에 담긴 걸 가져오겠다!)
            console.log(a)
                >> 결과 값은?
                :: person에 담긴 key의 값을 가져오겠다.
                ["name", "age", "gender"]
        3-2. values
            let b = Object.valuse(객체이름) => 객체에 가진 valuse(변수이름에 담긴 걸 가져오겠다!)
            console.log(b)
                >> 결과 값은?
                :: person에 담긴 valu의 값을 가져오겠다.
                ["사람", 20, "여자"]
        3-3. entries
            key와 balue를 묶어서 배열로 만든 배열(2차원 배열)
            let person = {값이 있는 상태}
            let a = Object.enrties(person)
            console.log(a)
                >> 결과 값은?
                :: person에 담긴 객체들이 배열로 묶여 나타남
                [['name', '사람']], [['age', 20]], [['gender', '여자']]
        3-4. assign : 객체 복사
            let newPerson = {}
            Object.assign(newPerson, person) // 아무 것도 담기지 않은 객체에 person의 값을
            복사 해 올때 쓰임
            하지만 만약 복사해올 객체에서 한 개의 키와 밸류만 가져와서 변경하고 싶다면?
                Object.assign(newPerson, person, {name: "아무개"})
                console.log(newPerson)
        3-5. 객체비교
            객체는 엄청 큰 값이기에 메모리에서 다른 주소로 저장하기 때문에
            같은 값이 담겨도 다른 값을 가지고 있음
            반면에 let a = "aaa"와 let b ="aaa" 는 직접 저장하기 때문에 같은 값으로 나옴
            하지만... 객체 안에 같은 값인데 이걸 어떻게 변경은 못 할까? -> 가능! (JSON.stringify을 사용하면 됨!)
            let person 1 = {
                name: "아무개",
                age: 20,
                gender: "여성"
            }
            let person 2 = {
                name: "아무개",
                age: 20,
                gender: "여성"
            }
            console.log(JSON.stringify(person1) === JSON.stringify(person2))
        3-6. 객체 병합 : 따로 있는 객체를 합치는 것
            ... (spread operator) 으로 호출 
            let person1 = {
                name: "이순신",
                age: 41
            }
            let person2 = {
                gender: "남성"
            }
            let p = {...person1, ...person2}
            console.log(p)
*/