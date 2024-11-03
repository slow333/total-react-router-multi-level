export default function PromisesEx(){
   return(<main>
      <h2>JS Promises : call back 없에기</h2>
      <p>Promises 는 이전 작업이 완료될 때 까지 다음 작업을 연기 시키거나, 작업실패를 대응할 수 있는 비교적 새로운 JavaScript 기능입니다. Promise는 비동기 작업 순서가 정확하게
         작동되게 도움을 줍니다.

      </p>
      <section>
         <h3>Promises 란 ?</h3>
         <p>Promise는 어떤 작업의 중간상태를 나타내는 오브젝트 입니다. — 미래에 어떤 종류의 결과가 반환됨을 promise (약속) 해주는 오브젝트라고 보면 됩니다. Promise는 작업이 완료되어
            결과를 반환해주는 정확한 시간을 보장해주지는 않지만, 사용할 수 있는 결과를 반환했을때 프로그래머의 의도대로 다음 코드를 진행 시키거나, 에러가 발생했을 때 그 에러를 우아하게/깔끔하게 처리할
            수 있습니다.</p>
         <p>일반적으로 우리는 비동기 작업이 결과를 반환하는데 얼마의 시간이 걸리는지 보다는(작업 시간이 매우 오래 걸리지 않는 한) 그 결과를 사용할 수 있는지 여부에 더 관심이 있습니다. 물론 나머지
            코드 블럭을 막지 않는다는 것에 있어서 매우 좋습니다.</p>
         <p>우리가 Promise로 가장 많이 할 작업중 하나는 Promise를 반환하는 웹API를 사용하는 것 입니다. 가상의 비디오 채팅 애플리케이션이 있다고 해봅시다. 애플리케이션에는 친구 목록이 있고
            각 친구 목록 옆의 버튼을 클릭하면 해당 친구와 비디오 채팅을 시작합니다.</p>
         <p>그 버튼은 사용자 컴퓨터의 카메라와 마이크를 사용하기 위해 getUserMedia() 를 호출합니다. getUserMedia() 는 사용자가 이러한 장치를 사용할 수 있는 권한을 가지고 있는지
            확인해야 하고, 어떤 마이크와 카메라를 사용할 것인지 (혹은 음성 통화인지, 아니면 다른 옵션들이 있는지)를 체크해야하기 때문에 모든 결정이 내려질 때 까지 다음 작업을 차단할 수 있습니다.
            또한 카메라와 마이크가 작동하기 전 까지 다음 작업을 차단할수도 있습니다.<br/> getUserMedia() 는 브라우저의 main thread에서 실행되므로 getUserMedia() 결과가
            반환되기 전 까지 후행 작업이 모두 차단됩니다. 이러한 blocking은 우리가 바라는게 아닙니다. Promise가 없으면 이러한 결정이 내려지기 전 까지 브라우저의 모든 것을 사용할 수
            없게됩니다. 따라서 사용자가 선택한 장치를 활성화하고 소스에서 선택된 스트림에 대해MediaStream 직접 반환하는 대신 getUserMedia() 는 모든 장치가 사용 가능한 상태가 되면
            MediaStream이 포함된 promise를 반환합니다.</p>
      </section>
      <section>
         <p>비디오 채팅 애플리케이션의 코드는 아래처럼 작성할 수 있습니다.(js code)</p>
         <p>이 기능은 상태 메시지에 "Calling..."을 출력하는 setStatusMessage() 함수로 시작하며 통화가 시도되고 있음을 나타냅니다. 그런 다음 getUserMedia()을 호출하여
            비디오와 오디오 트랙이 모두 있는 스트림 요청을 합니다. 그리고 스트림을 획득하면 카메라에서 나오는 스트림을 "self view,"로 표시하기 위해 video엘리먼트를 설정합니다. 그리고 각
            스트림의 트랙을 가져가 다른 사용자와의 연결을 나타내는 WebRTC RTCPeerConnection에 추가합니다. 그리고 마지막으로 상태 메시지를 "Connected"로 업데이트
            합니다.<br/>
            getUserMedia() 가 실패하면, catch 블럭이 실행되며, setStatusMessage() 를 사용하여 상태창에 오류 메시지를 표시합니다.</p>
      </section>
      <section>
         <pb>피자를 주문한다고 생각해봅시다. 피자를 잘 주문하려면 몇 가지 단계를 진행해야 합니다. 토핑 위에 도우를 올리고 치즈를 뿌리는 등 각 단계가 뒤죽박죽 이거나 혹은 도우를 반죽하고 있는데 그
            위에 토마토소스를 바르는 등 이전 작업이 끝나지 않고 다음 작업을 진행하는 것은 말이 안 됩니다. :
         </pb>
         <ol>
            <li>먼저 원하는 토핑을 고릅니다. 결정 장애가 심할 경우 토핑을 고르는데 오래 걸릴 수 있습니다. 또한 마음을 바꿔 피자 대신 카레를 먹으려고 가게를 나올 수 있습니다.</li>
            <li>그다음 피자를 주문합니다. 식당이 바빠서 피자가 나오는 데 오래 걸릴 수 있고, 마침 재료가 다 떨어졌으면 피자를 만들 수 없다고 할 수도 있습니다.</li>
            <li>마지막으로 피자를 받아서 먹습니다. 그런데! 만약 지갑을 놓고 와서 돈을 내지 못한다면 피자를 먹지 못할 수 있습니다.</li>
         </ol>
         <code>{`chooseToppings()
      .then(function (toppings) {
         return placeOrder(toppings);
      })
      .then(function (order) {
         return collectOrder(order);
      })
      .then(function (pizza) {
         eatPizza(pizza);
      })
      .catch(failureCallback);`}</code>
         <p>이렇게 작성하면 앞으로 어떤 일이 일어날지 쉽게 예측 가능합니다. 그리고 단 한개의 .catch() 을 사용하여 모든 에러를 처리합니다. 그리고 main thread를 차단하지 않습니다.
            (그래서 피자를 주문하고 기다리는 동안 하던 게임을 마저 할 수 있습니다.), 또한 각 함수가 실행되기 전 이전 작업이 끝날때까지 기다립니다. 이런식으로 여러 개의 비동기 작업을 연쇄적으로
            처리할 수 있습니다. 왜냐햐면 각 .then() 블럭은 자신이 속한 블럭의 작업이 끝났을 때의 결과를 새로운 Promise 반환해주기 때문입니다.</p>
         <pb>화살표 함수로 하면 간단해짐</pb>
         <code>{`chooseToppings()
      .then((toppings) => placeOrder(toppings))
      .then((order) => collectOrder(order))
      .then((collectedOrders) => makePizza(orders))
      .then((madePizza) => delivery(madePizza))
      .then((delivery) => pay(money))
      .then((PayMoney) => eatPizza(pizza))
      .catch(failureCallback);`} </code>
         <p>Promise는 이벤트 리스너와 유사하지많 몇가지 다른점이 있습니다.</p>
         <ul>
            <li>Promise는 한번에 성공/실패 중 하나의 결과값을 가집니다. 하나의 요청에 두 번 성공하고나 실패할 수 없습니다. 또한 이미 성공한 작업이 다시 실패로 돌아갈 수 없고 실패한 작업이
               성공으로 돌아갈 수 없습니다.
            </li>
            <li>Promise가 성공하거나 실패한 상태에서 나중에 성공/실패를 추가하면, Promise의 결과와 상관없이 나중에 추가한 결과 callback 될 것입니다.</li>
         </ul>
      </section>
      <h2>JS Promises 예제를 통한 배우기</h2>
      <p>모던 웹 API는 잠재적으로 긴 작업을 수행하는 함수에 Promise를 사용하므로 Promise가 무엇인지 이해하는것은 매우 중요합니다. 현대적인 웹 기술을 사용하려면 Promise를
         사용해야합니다. </p>
      <section>
         <h3>fetch() 메서드(promise api)</h3>
         <p>첫 번째로, 웹에서 이미지를 가져오기 위하여 fetch() 메서드를 사용할 때 입니다.blob() 메서드는 fetch가 응답한 원시 body컨텐츠를 Blob 오브젝트로
            변환시켜주고 &lt;img> 엘리먼트에 표현합니다. 이예제는 first article of the series유사합니다. 다만 Promise를 사용하기 위해 약간의 변경을 하겠습니다.</p>
         <ol>
            <li>먼저 <a
               href="https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html">simple
               HTML template</a> 와 fetch할 이미지인 <a
               href="https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/promises/coffee.jpg">sample
               image file</a> 을 다운받습니다
            </li>
            <li>&lt;script> 엘리먼트 안에 아래와 같이 코드를 작성합니다. :
               <code>let promise = fetch("coffee.jpg")</code>
               fetch() 메서드를 호출하여, 네트워크에서 fetch할 이미지의 URL을 매개변수로 전달합니다. 두 번째 매개변수를 사용할 수 있지만, 지금은 우선 간단하게 하나의 매개변수만
               사용하겠습니다. 코드를 더 살펴보면 promise변수에 fetch() 작업으로 반환된 Promise 오브젝트를 저장하고 있습니다. 이전에 말했듯이, 지금 오브젝트는 성공도 아니고 실패도
               아닌 중간 상태를 저장하고 있습니다. 공식적으로는 <b>pending</b>상태라고 부릅니다.
            </li>
            <li>작업이 성공적으로 진행될 때를 대응하기 위해 (이번 예제에선 Response 가 반환될 때 입니다. ), 우리는 Promise 오브젝트의 .then() 메서드를 호출합니다. .then()
               블럭 안의 callback은 (executor 라고 부름) Promise가 성공적으로 완료되고Response 오브젝트를 반환할 때만 실행합니다. — 이렇게 성공한 Promise의
               상태를 <b>fulfilled</b>라고 부릅니다. 그리고 반환된 Response 오브젝트를 매개변수로 전달합니다.<br/>
               그리고 즉시 blob() 메서드를 실행하여 Response Body가 완전히 다운로드 됐는지 확인합니다. 그리고 Response Body가 이용 가능할 때 추가 작업을 할 수 있는 Blob
               오브젝트로 변환시킵니다. 해당 코드는 아래와 같이 작성할 수 있습니다. :
               <code>{`let promise2 = promise.then((response) => response.blob());
      the same as ; function(response) {return response.blob()}`}</code>
            </li>
            <li>
               각 .then() 을 호출하면 새로운 Promise를 만드는데, 이는 매우 유용합니다. 왜냐하면 blob() 메서드도 Promise를 반환하기 때문에, 두 번째 Promise의
               .then() 메서드를 호출함으로써 이행시 반환되는 Blob 오브젝트를 처리할 수 있습니다. 한 가지 메서드를 실행하여 결과를 반환하는 것보다 Blob에 좀 더 복잡한 일을 추가 할때
               중괄호{}로 묶습니다. (그렇지 않으면 에러가 발생합니다.).
               <code>let promise3 = promise2.then((myBlob) => {})</code>
            </li>
            <li>이제 executor 함수를 아래와 같이 채워넣습니다. 중괄호 안에 작성하면 됩니다. :
               <code>{`let promise3 = promise2.then((myBlob) => {
      let objectURL = URL.createObjectURL(myBlob);
      let image = document.createElement("img");
      image.src = objectURL;
      document.body.appendChild(image);
   }`}</code>
               여기서 우리는 두 번째 Promise가 fulfills일 때 반횐된 Blob을 매개변수로 전달받는 URL.createObjectURL() 메서드를 실행하고 있습니다. 이렇게 하면 오브젝트가
               가지고있는 URL이 반환됩니다. 그 다음 &lt;img> 엘리먼트를 만들고, 반환된 URL을 src 속성에 지정하여 DOM에 추가합니다. 이렇게 하면 페이지에 그림이 표시됩니다.
            </li>
         </ol>
      </section>
      <section>
         <h3>애러 처리하기</h3>
         <p>현재 에러가 발생했을 때 어떻게 처리를 해야할 지 작성된 코드가 없기때문에 코드를 조금만 더 추가하여 좀 더 완벽하게 작성해봅시다. (Promise에서 에러가 발생한 상태를 rejects라
            부릅니다). 이전에 봤던대로 .catch() 블럭을 추가하여 오류를 핸들링 할 수 있습니다.</p>
         <code>{`let errorCase = promise3.catch((e) => {
      console.log("뭔가 문제가 있어요" + e.message,); });`}</code>
         <p>에러 메시지를 확인하고 싶으면 잘못된 url을 지정해보세요, 개발자 도구 콘솔에서 에러를 확인할 수 있을것 입니다.(로컬 파일은 로컬 애러 not found가 먼저 나옴, 리모트로 해야 애러
            나옴)</p>
         <p>물론 .catch() 블록 없이 코드를 작동시킬 수 있습니다. 하지만 좀 더 깊게 생각해보면 .catch() 블록이 없으면 어떤 에러가 발생했는지, 어떻게 해결해야 하는지 디버깅이 어렵습니다.
            실제 앱에서 .catch() 을 사용하여 이미지 가져오기를 다시 실행하거나, 기본 이미지를 표시하는 등 작업을 지시할 수 있습니다.</p>
      </section>
      <section>
         <h3>하나로 합치기</h3>
         <code>{`fetch("coffee.jpg")
      .then((response) => response.blob())
      .then((myBlob) => {
         let objectURL = URL.createObjectURL(myBlob);
         let image = document.createElement("img");
         image.src = objectURL;
         document.body.appendChild(image);
      })
      .catch((e) => {
         console.log("There has been a problem with your fetch operation: " + e.message,);
      });`} </code>
      </section>
      <section>
         <h3>Promies 용어 정리</h3>
         <p>위의 섹션에서 다룬 내용은 정말 많습니다. 매우 중요한 내용을 다뤘으므로 개념을 명확히 이해하기 위해 몇번이고 다시 읽어보는게 좋습니다.</p>
         <ol>
            <li>Promise가 생성되면 그 상태는 성공도 실패도 아닌 pending상태라고 부릅니다.</li>
            <li>Promise결과가 반환되면 결과에 상관 없이 resolved상태라고 부릅니다.
               <ol type="i">
                  <li>성공적으로 처리된 Promise는 fulfilled상태이다. 이 상태가 되면 Promise 체인의 다음 .then() 블럭에서 사용할 수 있는 값을 반환합니다.. 그리고
                     .then() 블럭 내부의 executor 함수에 Promise에서 반환된 값이 파라미터로 전달됩니다.
                  </li>
                  <li>실패한 Promise는 rejected상태이다. 이때 어떤 이유(reason) 때문에 Promise가 rejected 됐는지를 나타내는 에러 메시지를 포함한 결과가 반환됩니다.
                     Promise 체이닝의 제일 마지막 .catch() 에서 상세한 에러 메시지를 확인할 수 있습니다.
                  </li>
               </ol></li>
         </ol>
      </section>
      <p id="exContainer"></p>
   </main>)
}