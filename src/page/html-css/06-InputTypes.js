export default function InputTypes() {
   return(<main>
      <h2>input type</h2>
      <p> input type에는 button, checkbox, file, image, radio, password, text, submit, reset 등이 있습니다.(search, url, tel,
         etc)</p>
      <section>
         <h3>text type</h3>
         <ul>
            <li>readonly : 사용자가 입력 값을 수정할 수 없지만 나머지 양식 데이터와 함께 전송됨,<br/> disabled : 입력 값을 수정할 수 없고 나머지 양식 데이터와 함께 전송되지
               않음
            </li>
            <li>placeholder : 입력창에 표시되는 내용</li>
            <li>size: 입력창 실제 크기 / maxlength : 입력가능 최대 문자수</li>
            <li>spellcheck 이용 가능</li>
         </ul>
      </section>
      <section>
         <h3>hidden type</h3>
         <code>&lt;input type="text" id="comment" name="comment" value="This is text field" &gt;</code>
         <img src="/images/disabled.png" alt="input-default-focus-disabled-img"/>
         <code>&lt;input type="hidden" id="timestamp" name="timestamp" value="1286705410" /&gt;  </code>
         <p>hidden type의 경우 name와 value속성을 설정해야 합니다. 값은 JavaScript를 통해 동적으로 설정할 수 있습니다. hidden 입력 유형에는 연관된 레이블이 없어야
            합니다.</p>
      </section>
      <section>
         <h3>checkbox, radio button</h3>
         <p>체크 가능한 항목은 클릭하거나 연관된 레이블을 클릭하여 상태를 변경할 수 있는 컨트롤입니다. 체크 가능한 항목에는 체크박스와 라디오 버튼의 두 가지 종류가 있습니다. 둘 다 checked속성을
            사용하여 위젯이 기본적으로 체크되었는지 여부를 나타냅니다.</p>

         <p>이러한 위젯이 다른 폼 위젯과 정확히 동일하게 동작하지 않는다는 점에 유의해야 합니다. 대부분의 폼 위젯의 경우 폼이 제출되면 name속성이 있는 모든 위젯이 값이 채워지지 않았더라도
            전송됩니다. <b>체크 가능한 항목의 경우 체크된 경우에만 값이 전송됩니다.</b> 체크되지 않은 경우 아무것도 전송되지 않으며 이름도 전송되지 않습니다. 체크되었지만 값이 없는 경우 이름은
            on 값으로 전송됩니다.</p>
         <h4>checkbox</h4>
         <code>&lt;input type="checkbox" id="questionOne" name="subscribe" value="yes" checked /&gt;</code>
         <fieldset>
            <legend>Choose all the vegetables you like to eat</legend>
            <ul className='no-list-type'>
               <li>
                  <label htmlFor="carrots">Carrots</label>
                  <input type="checkbox" id="carrots" className="vegetable" name="vegetable" value="carrots" checked/>
               </li>
               <li>
                  <label htmlFor="peas">Peas</label>
                  <input type="checkbox" id="peas" className="vegetable" name="vegetable" value="peas"/>
               </li>
               <li>
                  <label htmlFor="cabbage">Cabbage</label>
                  <input type="checkbox" id="cabbage" className="vegetable" name="vegetable" value="cabbage"/>
               </li>
            </ul>
         </fieldset>
         <ul>
            <li id="toggle">
               <input type="checkbox" name="power" id="power" value="power-on"/>
               <label htmlFor="power"><span className="on">On</span> <span className="off">Off</span></label>
            </li>
         </ul>
      </section>
      <section>
         <h3>radio button</h3>
         <code>&lt;input type="radio" id="soup" name="meal" value="soup" checked /&gt; </code>
         <fieldset>
            <legend>What is your favorite meal?</legend>
            <ul className='no-list-type'>
               <li >
                  <label htmlFor="soup">Soup</label>
                  <input type="radio" id="soup" name="meal" value="soup" checked/>
               </li>
               <li>
                  <label htmlFor="curry">Curry</label>
                  <input type="radio" id="curry" name="meal" value="curry"/>
               </li>
               <li>
                  <label htmlFor="pizza">Pizza</label>
                  <input type="radio" id="pizza" name="meal" value="pizza"/>
               </li>
            </ul>
         </fieldset>
      </section>
      <section>
         <h3>real button</h3>
         <pb>button type : submit, reset, button</pb>
         <code>&lt;button type="submit" &gt; 제출 &lt;/button&gt; </code>
         <ul>
            <li>submit ; 폼 데이터를 서버로 전송(기본 설정)</li>
            <li>reset ; 양식 위젯을 초기화</li>
            <li>button ; 자동화 효과는 없지만 JS 코드를 사용하여 사용자 정의 가능</li>
         </ul>
      </section>
   </main>)
}