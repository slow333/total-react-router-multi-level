export default function PromisesApi() {
   return(<main>
      <h2>alarm() API 구현하기</h2>
      <p>마지막 글에서는 프로미스를 반환하는 API를 사용하는 방법에 대해 알아봤습니다. 이 글에서는 프로미스를 반환하는 API를 구현하는 방법에 대해 살펴보겠습니다. 이것은 프로미스 기반 API를 사용하는
         것보다 훨씬 덜 일반적인 작업이지만 그래도 알 가치가 있습니다.</p>
      <section>
         <p>이 예제에서는 alarm()이라는 프로미스 기반 알람 API를 구현할것입니다. 깨울 사람의 이름과 깨울 때까지 기다리는 지연 시간(밀리초)이 인수로 사용됩니다. 기다림이 끝나면 함수는 깨워야 할
            사람의 이름과 "Wake up!" 이라는 문구를 메시지로 보냅니다.</p>
         <h3>setTimeout() 래핑</h3>
         <p>setTimeout() API를 사용하여 alarm() 함수를 구현합니다. setTimeout() API는 콜백 함수와 밀리초 단위로 주어진 지연 시간을 인수로 사용합니다.
            setTimeout()이 호출되면 지정된 지연으로 설정된 타이머를 시작하고, 시간이 만료되면 주어진 함수를 호출합니다.</p>
   <code>{`#HTML
      &lt; button id="set-alarm"&gt;Set alarm&lt;/button&gt;
      &lt;div id="ouput"&gt;&lt;/div&gt;
      #JS
      const output = document.querySelector("#output");
      const button = document.querySelector("#set-alarm");

      function setAlarm() {
      window.setTimeout(() => {
      output.textContent = "Wake up!";
   }, 1000);
   }

      button.addEventListener("click", setAlarm);`}</code>
      </section>
      <section>
         <h3>Promise 생성자</h3>
   <code>{`#JS
      const name = document.querySelector("#name");
      const delay = document.querySelector("#delay");
      const button = document.querySelector("#set-alarm");
      const output = document.querySelector("#output");

      function alarm(person, delay) {
      return new Promise((resolve, reject) => {
      if (delay < 0 ) {
      throw new Error("시간은 음수 안되요.");
   }
      window.setTimeout(() => {
      output.textContent = backtick Wake up! \${person};
   }, delay*1000);
   });
   };

      button.addEventListener("click", function(){
      alarm(name.value, delay.value).then((message) => {
      output.textContent = "message"
   })
      .catch((error) => {
      output.textContent = backtick 알람 설정이 안되요 : \${error}
   })
   })`}</code>
         <p>이 함수는 새로운 Promise를 만들어 반환합니다. 프로미스 실행자 안에서 우리는 다음과 같이 합니다.</p>
      </section>
      <section>
         <h3>refac with await and resolve</h3>
   <code>{`#JS
      function alarm(person, delay) {
      return new Promise((resolve, reject) => {
      if (delay < 0 ) {
      throw new Error("시간은 음수 안되요.");
   }
      window.setTimeout(() => {
      resolve(backtick Wake up! \${person});
   }, delay*1000);
   });
   };

      button.addEventListener("click", acync() => {
      try {
      const message = await alarm(name.value, delay.value);
      output.textContent = message;
   }
      catch(error) => {
      output.textContent = backtick 알람 설정이 안되요 : \${error}
   }
   })`}</code>
      </section>
      <section>
         <div>
            <input type="text" id="name" placeholder="name"/>
            <input type="number" id="delay" placeholder="interval"/>
            <button id="set-alarm">Set alarm</button>
            <div id="output"></div>
         </div>
      </section>
   </main>)
}