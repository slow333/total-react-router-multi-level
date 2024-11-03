export default function AsyncBasic () {
   return (<main>
      <h2>JS Asynchronous Basic</h2>
      <section>
         <p>비동기 프로그래밍은 프로그램이 잠재적으로 오래 실행되는 작업을 시작하고 해당 작업이 실행되는 동안 다른 이벤트에 응답할 수 있는 기술로, 해당 작업이 완료될 때까지 기다릴 필요가 없습니다. 해당
            작업이 완료되면 프로그램에 결과가 표시됩니다.
         </p>
         <p>
            브라우저에서 제공하는 많은 기능, 특히 가장 흥미로운 기능은 잠재적으로 오랜 시간이 걸릴 수 있으므로 비동기적입니다. 예를 들어:</p>
         <ul>
            <li>HTTP 요청을 사용하여 만들기 : fetch()</li>
            <li>사용자의 카메라 또는 마이크에 액세스하기 : getUserMedia()</li>
            <li>사용자에게 파일을 선택하도록 요청 : showOpenFilePicker()</li>
         </ul>
         <p><i>비동기 함수를 직접 구현할 필요는 없더라도 올바르게 사용해야 할 수 있어야합니다.</i></p>
      </section>
      <section>
         <h3>동기 프로그래밍</h3>
   <code>{`const name = "Miriam";
      const greeting = backtic Hello, my name is \${name}!;
      console.log(greeting);`}</code>
         <p>브라우저가 효과적으로 프로그램을 한 번에 한 줄씩, 우리가 쓴 순서대로 단계별로 실행한다는 점에 유의해야 합니다.
            각 지점에서 브라우저는 다음 줄로 넘어가기 전에 줄이 작업을 마칠 때까지 기다립니다.
            이렇게 해야 하는 이유는 각 줄이 이전 줄에서 수행된 작업에 따라 달라지기 때문입니다.
         </p>
         <p> 이것은 동기적 프로그램 이다 . 우리가 다음과 같이 별도의 함수를 호출하더라도 여전히 동기적일 것이다.</p>
   <code>{`function makeGreeting(name) {
      return  backtick Hello, my name is \${name}
   }
      const name = "Bp Group";
      const greeting = makeGreeting(name);`}   </code>
         <p>makeGreeting()은 동기 함수입니다.
            왜냐하면 호출자는 함수의 작업이 완료될 때까지 기다렸다가 값을 반환해야 계속 진행할 수 있기 때문입니다.</p>
      </section>
      <section>
         <h3>시간이 오래 걸리는 동기 함수</h3>
         <p>동기함수에 시간이 오래 걸리면 어떨까요.</p>
         <p>아래 프로그램은 매우 비효율적인 알고리즘을 사용하여 "Generate primes" 버튼을 클릭할 때 여러 개의 큰 소수를 생성합니다.
            사용자가 입력하는 숫자가 커질수록 작업 시간도 더 오래 걸립니다.(JS 파일 참조)</p>
         <p>동기 함수에서 코드가 실행되는 동안 다음에 실행되는 코드는 실행되지 않습니다.</p>
      </section>
      <section>
         <div id="generatePrimes">
            <label htmlFor="quota">Number of primes:</label>
            <input type="text" id="quota" name="quota" value="1000000"/>

            <button id="generate">Generate primes</button>
            <button id="reload">Reload</button>
            <div id="output"></div>
         </div>
         <div>
            <textarea name="testLongTime" id="testLongTime"></textarea>
         </div>
         <p>이는 장기 실행 동기 함수의 기본적인 문제입니다. 우리의 프로그램이 필요로 하는 것은 다음과 같습니다.</p>
         <ol>
            <li>함수를 호출함으로써 장기적으로 실행되는 작업을 시작한다.</li>
            <li>이 함수로 작업을 시작하고 즉시 복귀하여 다른 이벤트에 계속 응답할 수 있게 한다.</li>
            <li>작업이 완료되면 결과를 알려준다.</li>
         </ol>
         <pb>이것이 바로 비동기 함수가 할 수 있는 일입니다.</pb>
      </section>
      <hr/>
      <p id="exContainer"></p>
   </main>)
}