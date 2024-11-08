export default function JsObjectBasic (){
   return(<main>
      <h2>Object 개요</h2>
      <section>
         <p>객체는 관련된 데이터와 함수(일반적으로 여러 데이터와 함수로 이루어지는데,
            객체 안에 있을 때는 보통 프로퍼티와 메소드라고 부릅니다)의 집합</p>
<code>{`const person = {
   name: ["Bob", "Smith"],
   age: 32,
   gender: "male",
   interests: ["music", "skiing"],
   bio: function () {
   alert(
   this.name[0] + " " +  this.name[1] + " is " +
   this.age + " years old. He likes " + this.interests[0] + " and " +
   this.interests[1] + ".", );
},
   greeting: function () {
   alert("Hi! I'm " + this.name[0] + ".");
},
};`}</code>
         <p>선택시에 점으로 하거나 "[ ]"로 할수 있음</p>
         <code> 활용하기
            createElement(person.name); 또는 createElement(person["name"]);
            리스트 : createElement(person.name[0]);
            객체 내의 함수 호출 : person.bio(); person.greeting(); </code>
      </section>
      <section>
         <h3>this 란 ?</h3>
         <p>"this"는 지금 동작하고 있는 코드를 가지고 있는 객체를 가리킴.</p>
      </section>
      <hr/>
      <p id="exContainer"></p>
   </main>)
}