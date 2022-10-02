/*
- 객체 구성요소
    1. 속성(Property) : e.g, 색상|크기 - > variable
    2. 기능(Method) : e.g, 전화걸기|문자보내기 - > function
- 객체의 종류
    1. 내장 객체(Built in Object) : JS 엔진에 내장되어 있는 객체. String , Date , Array , Math , regular exp 객체 등.
    2. Browser Object Model (BOM)
        - 설명 : 브라우저(웹페이지 인것 같음)에 계층 구조로 내장되어 있는 객체를 의미.
            - e.g : window,screen,location,history,navigator 등의 객체가 있음
            - window는 document 와 location 객체의 상위 객체입니다
    3. Document Object Model (DOM)
        - 설명 : HTML 문서 구조를 의미. HTML의 최상위 객체는 <html> 하위로 <head> <body> 가 있음.
            - e,g : js를 이용해 src 속성을 바꾸고자 하면 특정 <img>를 선택해 src 속성을 바꿔야 함.
        - 따라서 문서객체모델에서는 HTML의 모든 요소들을 문서 객체로 선택하여 자유롭게 속성을 바꿀 수 있음. 더불어 선택한 문서 객체에 원하는 스타일(CSS)를 적용할 수 있음.
        - 단점 : IE 8 이하 버전에서 호환성이 떨어짐. 따라서 JS DOM에 깊게 안 다룰 것임.
            - 극복 : 제이쿼리 문서객체모델을 많이 사용함.
- 정보
    1. js는 obj based language
*/

// 내장 객체 생성하기

<script>
    var tv=new Object();
    tv.color="white";
    tv.proce=300000;
    tv.info=function(){
        document.write("color"+this.color,"<br>");
        document.write("price"+this.price,"<br>");
    }
    var car={
        color:"black",
        price:5000000,
        info:function(){
            document.write("color"+this.color,"<br>");
            document.write("price"+this.price,"<br>");
        }
    };
</script>