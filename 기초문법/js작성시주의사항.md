1. 자바스크립트는 대-소문자를 구분해서 작성!
    - e.g
        ```
        New data(); -> x
        new Date(); -> new가 원래 객체생성 연산자이고 Date()라는 이름이 원래 내장객체이다
        ```
2. (추천) 코드 한 줄을 작성한 후에는 세미콜론을 사용.
    - 세미콜론이 사용되지 않으면 발생하는 오류
        ```
        document.write("hey") document.write("bye") -> 한 줄에 두개를 썻는데 세콜이 없어서 오류
        document.write("hey"); document.write("bye"); - > ㅇㅋ
        ```
3. 한 줄에는 한 문장만 하는 게 좋음
4. 문자형 데이터 작성 시 " 와 ' 의 겹침오류에 항상 주의
    - e.g
        ```
        document.write("Hi,"is your dog alive?"") - > error
        document.write("Hi,'is your dog alive?'") - > ok
        document.write("Hi,\"is your dog alive?\"") - > ok
        ```
5. 중괄호 {} 또는 () 일 때 열고 닫을 때 문자가 같아야 한다