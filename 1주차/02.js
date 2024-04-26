/*
    배열
        1. 생성
            1-1. 기본 생성
            let person = ["홍", "길", "동"]
            let number = new Array(5) // 눈으로 보이진 않지만 크기가 5인 5개인 배열을 만들어주는 메소드
            console.log(number.length)
            console.log(person.length)
        2. 요소 접근
            console.log(person[0]) >> person의 "홍"의 값을 가져오는 것
        3. 배열 메소드 
            3-1. push : 배열의 마지막 요소에 추가하는 것
                let fruits = ["사과", "바나나"]
                fruits.push("오렌지")

            3-2. pop : 배열의 마지막 요소가 없어지는 것
                let fruits1 = ["사과", "바나나"]
                fruits1.pop()

            3-3. shift : 배열의 첫번 째 요소를 없애는 것
                let fruits2 = ["사과", "바나나", "키위"]
                fruits2.shift()

            3-4. unshift : 맨 앞에 새로운 요소를 추가하는 것
                let fruits3 = ["사과", "바나나"]
                fruits3.unshift("포도")

            3-5. splice : 위치를 지정해서 어떤 요소를 삭제하고 변경하는 것
                let fruits4 = ["사과", "바나나", "키위"]
                fruits4.splice(1, 1, "포도") 지정된 요소에, 몇번째 번호를 "로 대신해줘"

            3-6. slice : 새로운 배열 요소만 보이게 해줘
                let fruits5 = ["사과", "바나나", "키위"]
                fruits5.slice(0, 2) 지정된 요소부터, 다음 지정된 요소만 보여줘
*/
/*
    forEach, map, filter, find
        1. forEach
            처음 변수 배열을 생성
            let number = [1, 2, 3, 4, 5]
            number.forEach(function(i){
                console.log(i) // 총 5번 돌아가고 배열의 값을 함수안에 있는 매개변수로 요소가 한 개씩 들어가게 됨! 
            }) // 함수를 생성해 주는 값
                매개변수 자리에 함수를 넣는 것 : 콜백 함수(i, item이라는 이름을 지어줌)
    ----------------------------------------------------------------------------------------------------
        2. map : map함수에 들어가는 배열에는 꼭 return을 넣어야함!
            가공한 값이 들어가는 것
            항상 원본 배열의 길이만큼이 return이 된다!

            let str = [1, 3, 4, 5, 7]
            let newStr = str.map(function(item){
                return item * 2
            })
    ----------------------------------------------------------------------------------------------------
        3. filter : 맵 함수와 같이 리턴을 사용해야 하며, 리턴에는 조건이 들어가게 됨
            조건이 들어가니까 &&, ||, !, 부등호 등을 넣어 조건을 넣을 수 있음
            let num = [1, 1, 2, 3, 4, 4] // 조건에 해당되는 값만 출력
            let newNum = num.filter(function(item){
                return item === 4
            })
    ----------------------------------------------------------------------------------------------------
        4. find : 리턴 함수를 호출해야하고, 조건식이여야 함! 대신 첫번째 요소만 가져오게됨
        let num = [5, 2, 4]
        let newNum = num.find(function(item) {
            return item > 0
        })
*/