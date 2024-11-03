export default function JsonExample() {
   return(<main>
      <h2>JSON</h2>
      <p>
         JavaScript Object Notation (JSON)은 Javascript 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷입니다.
         웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용합니다(서버에서 클라이언트로 데이터를 전송하여 표현하려거나 반대의 경우).
         여기저기서 자주 보았을테니 여기선 JSON을 파싱, 데이터에 접근하고 JSON을 생성하는 등
         Javascript로 JSON을 다루는 법에 대해 알아봅시다.
      </p>
      <section>
         <h3>JSON이 뭐죠?</h3>
         <p>Javascript 객체 문법을 따르는 문자 기반의 데이터 포맷입니다.
            JSON이 Javascript 객체 문법과 매우 유사하지만 딱히 Javascript가 아니더라도 JSON을 읽고 쓸 수 있는 기능이
            다수의 프로그래밍 환경에서 제공됩니다.
         </p>
         <p>
            JSON은 문자열 형태로 존재합니다 — 네트워크를 통해 전송할 때 아주 유용하죠. 데이터에 접근하기 위해서는 네이티브 JSON 객체로 변환될 필요가 있습니다. 별로 큰 문제는 아닌 것이
            Javascript는 JSON 전역 객체를 통해 문자열과 JSON 객체의 상호변환을 지원합니다.
         </p>
      </section>
      <section>
         <h3>JSON 구조</h3>
         <p>
            JSON 안에는 마찬가지로 Javascript의 기본 데이터 타입인 문자열, 숫자, 배열, 불리언 그리고 다른 객체를 포함할 수 있습니다.
         </p>
   <code>{`{
      "squadName": "Super hero squad",
      "homeTown": "Metro City",
      "formed": 2016,
      "secretBase": "Super tower",
      "active": true,
      "mem": {"name": "Jonas"},
      "members": [
         {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
         },
         {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"]
         },
      ]
   }`}</code>
      </section>
      <section>
         <h3>Key Notes</h3>
         <ul>
            <li>JSON은 순수히 데이터 포맷입니다. 오직 프로퍼티만 담을 수 있습니다. 메서드는 담을 수 없습니다.</li>
            <li>JSON은 문자열과 프로퍼티의 이름 작성시 큰 따옴표만을 사용해야 합니다. 작은 따옴표는 사용불가합니다.</li>
            <li>콤마나 콜론을 잘못 배치하는 사소한 실수로 인해 JSON파일이 잘못되어 작동하지 않을 수 있습니다. JSONLint같은 어플리케이션을 사용해 JSON 유효성 검사를 할 수 있습니다.
            </li>
            <li>JSON은 JSON내부에 포함할 수 있는 모든 형태의 데이터 타입을 취할 수 있습니다. 즉, 배열이나 오브젝트 외에도 단일 문자열이나 숫자또한 유효한 JSON 오브젝트가 됩니다.</li>
            <li>JavaScript에서 오브젝트 프로퍼티가 따옴표로 묶이지 않을 수도 있는 것과는 달리, JSON에서는 따옴표로 묶인 문자열만이 프로퍼티로 사용될 수 있습니다.</li>
         </ul>
      </section>
      <hr/>
      <p id="exContainer"></p>
      <section>
         <h3>JSON 가져오기</h3>
         <ol>
            <li>일단, 변수로 둘 JSON의 URL을 가져옴<br/>
   <code>{`let requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";`}</code></li>
            <li>요청을 만들기 위해, 우리는 new 키워드를 이용하여 XMLHttpRequest 생성자로부터 새로운 request 인스턴스를 생성<br/>
               <code>var request = new XMLHttpRequest();</code></li>
            <li>이제 open() 메소드를 사용해 새로운 요청을 만듭니다. 아래의 코드를 추가<br/>
               <code>reqest.open("GET", requestURL);</code>
               이것은 최소 두 개의 매개변수를 가짐(다른 선택적 매개변수도 가능). 이건 단순 예제니깐 두 가지 필수 매개변수만 취할게요.
               <ul>
                  <li>HTTP 메서드는 네트워크 요청을 만들 때 사용됩니다.
                     이 경우 GET 을 사용하는게 좋겠어요. 우린 그저 데이터를 가져오면 되니깐요.
                  </li>
                  <li>URL은 요청을 보낼 곳을 지정합니다. 우리가 저장해 둔 JSON 파일의 URL로 지정할게요.</li>
               </ul>
            </li>
            <li>다음으로, 아래의 두 줄을 추가. responseType 을 JSON으로 설정했어요.
               XHR로 하여금 서버가 JSON 데이터를 반환할 것이며, JavaScript 객체로서 변환될 것이라는 걸 알게 하기 위해서죠.
               이제 send() 메서드를 이용해 요청을 보냅시다.<br/>
               <code>request.responseType = "json";
                  request.send();</code></li>
            <li>마지막 부분은 서버의 응답을 기다리고, 그것의 처리까지와 관련된 섹션입니다.<br/>
   <code>{`request.onload = function () {
      <i><b>// 응답이 성공적으로 돌아왔을 때만 로드 이벤트가 작동</b></i>
      let superHeroes = request.response;
      populateHeader(superHeroes);
      showHeroes(superHeroes);
   };`}</code></li>
         </ol>
         <p>
            우리는 요청에 대한 응답을 superHeroes라는 변수에 저장할 겁니다.(response 프로퍼티로 가능)
            이 변수는 이제 JSON 데이터에 기반한 JavaScript 객체를 포함하게 됩니다!
            두 개의 함수를 호출해 이 객체를 전달합시다. 하나는 &lt;header> 를 적절한 데이터로 채울 것이고,
            다른 하나는 팀의 각 히어로에 대한 정보 카드를 생성하여 &lt;section>내에 집어넣을 겁니다.
         </p>
         <p>
            우리는 로드 이벤트가 request 객체에 발생할 때에 작동하는 이벤트 핸들러 내에 코드를 넣었습니다. (onload 참고)
            왜냐하면 응답이 성공적으로 돌아왔을 때만 로드 이벤트가 작동하기 때문입니다.
            이러한 방식은 우리가 무언가를 시도하려고 할 때 request.response 가 확실히 가능하다는 것을 보장해 줍니다.
         </p>
         <pb>string을 javascript 객체로 변경하거나 JSON을 텍스트로 변경</pb>
   <code>{`let jsonObject = JSON.parse(textFile);`}</code>
   <code>{`let myJson = {name: "black pink", age:6}
      let text = JSON.stringfy(jsonFile);`}</code>
      </section>
      <section>
         <div className="superhero">
            <div className="heroHeader">Super Hero Squad</div>
            <div style={{textAlign: "center"}}>(using JSON by XMLHttprequest)</div>
            <br/>
            <div id="heroIntro"></div>
            <div id="heroSquad">
            </div>
         </div>
      </section>
      <hr/>
      <p id="exContainer"></p>
   </main>)
}