export default function AsyncEventHandler() {
   return (<main>
      <h2>JS Asyncronous 이벤트 처리기</h2>
      <section>
         <h3>이벤트 처리기</h3>
         <p>방금 들은 비동기 함수에 대한 설명으로 여러분은 이벤트 처리기를 떠올릴 수 있습니다. 만약 떠올랐다면 맞습니다. 이벤트 처리기는 실제로 비동기 프로그래밍의 한 형태입니다. 이벤트가 발생할 때마다
            호출되는 함수(이벤트 처리기)를 제공하는 것으로 말이죠. "이벤트"가 "비동기 작업 완료"인 경우, 이 이벤트를 사용하여 호출자에게 비동기 함수 호출의 결과를 알릴 수 있습니다.</p>
         <p>일부 초기 비동기 API는 이러한 이벤트 방식을 사용했습니다. XMLHttpRequest 는 JavaScript를 사용하여 원격 서버에 HTTP 요청을 할 수 있는 API입니다. HTTP 요청은
            시간이 걸릴 수 있는 작업이라 비동기 API이며 이벤트 수신기를 XMLHttpRequest 객체에 연결해 요청의 진행 상태 및 최종 완료에 대한 알림을 받습니다.</p>
         <p>다음 예제에서는 이를 실제로 보여 줍니다. "Click to start request"를 클릭하여 요청을 보내보세요. 새로운 XMLHttpRequest를 생성하고 이것의 loadend 이벤트를
            수신합니다. 처리기는 상태 코드와 함께 "Finished!" 메시지를 기록합니다.</p>
         <p>이벤트 수신기를 추가한 후 요청을 보냅니다. 이때 요청이 시작된 이후 "Started XHR request"를 기록할 수 있는데, 이는 요청이 진행되는 동안 프로그램이 계속 실행되고 있음을
            뜻하며 요청이 완료될 때 이벤트 처리기가 호출됩니다</p>
      </section>
      <section>
   <code>{`const log = document.querySelector(".event-log");
      document.querySelector("#xhr").addEventListener("click", function() {
      log.textContent = "";
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",);
      xhr.send();
      xhr.onloadend = function () {
      log.textContent = backtick \${log.textContent} Finished with status \${xhr.status};
   }
      log.textContent = backtick \${log.textContent} Started XHR request;
   });

      document.querySelector("#reload").addEventListener("click", function() {
      log.textContent = "";
      document.location.reload();
   });`}</code>
         <p>이전에 접한 이벤트 처리기와 유사하지만, 이벤트가 버튼 클릭과 같은 사용자 행동이 아닌 어떤 객체의 상태 변화라는 점이 다릅니다.</p>
      </section>

      <section>
         <div>
            <button id="xhr" className="normal">Request 요청하기</button>
            <button id="reload" className="normal">Reload</button>
            <pre readonly className="event-log"></pre>
         </div>
      </section>
      <section>
         <h2>콜백</h2>
         <p>이벤트 핸들러는 콜백의 특정 유형입니다. 콜백은 그냥 적절한 시점에 호출될 것으로 예상하여 다른 함수로 전달되는 함수입니다. 방금 살펴본 것처럼 콜백은 JavaScript에서 비동기 함수를
            구현하는 주요 방식이었습니다.<br/>
            그러나 콜백 기반 코드는 콜백이 콜백을 가지는 함수를 호출하는 경우 이해하기 어려울 수 있습니다. 이것은 일련의 비동기 함수로 분해되는 작업을 수행해야 하는 일반적인 상황입니다. 예를 들어,
            다음을 한번 보겠습니다.</p>
      </section>
      <p>
         콜백 내부에서 콜백을 호출하기 때문에 깊게 중첩된 doOperation() 함수가 생깁니다. 이 함수는 읽고 디버깅하기 훨씬 어렵습니다. 이것은 때때로 "콜백 지옥(callback hell)" 또는
         "파라미드 오브 둠(pyramid of doom)"이라고 불립니다. (왜냐하면 들여 써진 부분이 옆에서 봤을 때 피라미드처럼 보이거든요.)
      </p>
      <p>이렇게 콜백을 중첩하면 오류 처리도 매우 어려워질 수 있습니다. 상위 레벨에서 한 번만 오류를 처리하는 대신 "피라미드"의 각 레벨에서 오류를 처리해야 하는 경우가 많습니다.</p>
      <p>이러한 이유로 대부분의 최신 비동기 API는 콜백을 사용하지 않습니다. 대신 JavaScript에서 비동기 프로그래밍의 토대는 다음에 소개할 Promise 입니다</p>
      <hr/>
      <p id="exContainer"></p>
   </main>)
}