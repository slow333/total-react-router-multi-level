export default function FuncExample() {
   return (<main>
      <section>
         <h2>function 활용</h2>
         <h3>매개변수 : arguments, properties, attributes 라고도 함</h3>
         <h3>string : str.replace(원래것, 변경할것), str.join("구분자"), str.split("구분자") - array를 리턴</h3>
         <p>자기 자신을 지우기 위해서는 ;<br/>
            el.parentNode.removeChild(el); el.parentElement.removeChild(el);</p>
         <p>onclick 에서 function을 호출시에 ()을 사용하면 강제로 시작되고 클릭이안됨</p>
         <p>그래서 () 없이 사용해서 클릭시에 함수가 활성화됨</p>
      </section>
      <section>
         <h3>button to Action</h3>
         <button id="funcBtn">Click me</button>
         <button id="removeBtn">delete me</button>
      </section>
      <hr/>
      <p id="exContainer"></p>
   </main>)
}