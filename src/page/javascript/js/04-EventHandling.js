export default function EventHandling() {
   return (<main>
      <section>
         <h2>Event Handling</h2>
         <h3>함수에 event를 전달하여 다루는 방법</h3>
         <p>event를 받아서 event에 대해 찾음(target은 event가 발생한 tag를 나타냄)</p>
         <code>{`function (e) {
            e.target.style.color = "red"
         }`}</code>
         <h4>e.preventDefault();</h4>
         <p>여러분은 서버로의 제출을 방지하고 무엇이 잘못되었고 옳게 되기 위해 무엇이 완료되어야 하는지를 말하는 에러 메시지를 주기를 원합니다. 몇몇 브라우저는 자동 양식 데이터 확인 기능을 제공하지만,
            많은 브라우저들은 그렇지 않으므로, 그것들에 의존하지 않고 여러분만의 점검 기능을 구현하는 것이 낫습니다.</p>
         <h4>bubbling and capturing </h4>
         <p>부모 요소를 가지고 있는 요소에서 이벤트가 발생되었을 때,
            현대의 브라우저들은 두 가지 다른 단계(phase)를 실행합니다 — 캡처링(capturing) 단계와 버블링(bubbling) 단계입니다.</p>
         <h5>캡처링 단계에서는</h5>
         <ul>
            <li>브라우저는 요소의 가장 바깥쪽의 조상 (&lt;html>)이 캡처링 단계에 대해 그것에 등록된 onclick 이벤트 핸들러가 있는지를 확인하기 위해 검사하고, 만약 그렇다면
               실행합니다.
            </li>
            <li> 그리고서 &lt;html> 내부에 있는 다음 요소로 이동하고 같은 것을 하고, 그리고서 그 다음 요소로 이동하고, 실제로 선택된 요소에 닿을 때까지 계속합니다.</li>
         </ul>
         <h5>버블링 단계에서는, 정확히 반대의 일이 일어납니다.</h5>
         <ul>
            <li>브라우저는 선택된 요소가 버블링 단계에 대해 그것에 등록된 onclick 이벤트 핸들러를 가지고 있는지 확인하기 위해 검사하고, 만약 그렇다면 실행합니다.</li>
            <li> 그리고서 그것은 바로 다음의 조상 요소로 이동하고 같은 일을 하고, 그리고서 그 다음 요소로 이동하고, &lt;html> 요소에 닿을 때까지 계속합니다.</li>
         </ul>
         <p>현대의 브라우저들은, 기본으로, 모든 이벤트 핸들러들은 버블링 단계에 대해 등록되어 있습니다.
            그래서 우리의 현재 예제에서는, 비디오를 선택했을 때, 이벤트는 &lt;video> 요소로부터 밖으로 나가
            &lt;html> 요소까지 올라갑니다(bubble). 그 동안 다음이 일어납니다:</p>
         <ul>
            <li>video.onclick... 핸들러를 발견하고 실행하므로, 비디오가 먼저 재생을 시작합니다.</li>
            <li>그리고서 videoBox.onclick... 핸들러를 발견하고 실행하므로, 비디오는 또한 숨겨집니다.</li>
         </ul>
         <h5>e.stopPropagation()으로 문제 고치기</h5>
         <p>이것은 몹시 짜증나는 움직임이지만, 고칠 방법이 있습니다! 표준 Event 객체는 stopPropagation()라 불리는 사용 가능한 함수를 가지고 있는데, 핸들러의 이벤트 객체가 호출되었을
            때, 이는 첫번째 핸들러가 실행되지만 이벤트가 더 이상 위로 전파되지 않도록 만들어, 더 이상의 핸들러가 실행되지 않도록 합니다.</p>
         <p>그러므로, 이전 코드 블럭에 있는 두 번째 핸들러 함수를 다음으로 변경함으로써 우리는 현재의 문제를 고칠 수 있습니다:</p>
         <h5>이벤트 위임(Event delegation)</h5>
         <p>버블링은 또한 이벤트 위임의 이점을 취할 수 있게 합니다 — 이 개념은 만약 다수의 자식 요소 중 하나를 선택했을 때 코드를 실행하기를 원한다면, 모든 자식에 개별적으로 이벤트 리스너를
            설정해야만
            하는 것 대신 이벤트 리스너를 그들의 부모에 설정하고 그들에게서 일어난 이벤트가 그들의 부모에게까지 올라오게 할 수 있다는 사실에 의존합니다. 기억하세요, 버블링은 이벤트 핸들러에 대해 이벤트가
            발생된 요소를 먼저 검사하고서, 요소의 부모 등등으로 올라가는 것을 포함합니다.</p>
         <p>하나의 좋은 예시는 일련의 리스트 아이템들입니다 — 만약 각각이 선택되었을 때 메시지를 띄우기(pop up)를 원한다면, 여러분은 click 이벤트 리스너를 부모 &lt;ul>에 설정할 수
            있고,
            이벤트들은 리스트 아이템들에서 &lt;ul>까지 올라갈 것입니다.</p>
         <p>이 개념은 David Walsh의 블로그에서, 다수의 예제와 함께 더 설명됩니다. 어떻게 JavaScript 이벤트 위임은 작동하는가를 보세요..</p>
      </section>
      <button id="funcBtn">func button</button>
      <button id="removeBtn">remove button</button>
      <hr/>
      <p id="exContainer"></p>
   </main>)
}