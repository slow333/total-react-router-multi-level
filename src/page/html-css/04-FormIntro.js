export default function FormIntro() {
   return(<main>
      <h2>Web form 이란 ?</h2>
      <section>
         <h3>form submit data 여러개 가져오기</h3>
         <form id="form">
            <input type="text" name="text1" value="foo"/>
            <input type="text" name="text2" value="bar"/>
            <input type="checkbox" name="check" checked disabled/>
            <button name="intent" value="save">Save</button>
            <button name="intent" value="saveAsCopy">Save As Copy</button>
         </form>
      <output id="output"></output>
<code>{`      ## JS
const form = document.getElementById("form");
const submitter = document.querySelector("button[value=save]");
const formData = new FormData(form, submitter);

const output = document.getElementById("output");

for (const [key, value] of formData) {
   output.textContent += backtick keyvalue: value;
}
Object.fromEntries(formdata); =>객체를 반환 `}</code>
         <form id="form">
            <input type="text" name="text1" value="foo"/>
            <input type="text" name="text2" value="bar"/>
            <button name="intent" value="sum" type="submit">Sum</button>
            <button name="intent" value="save" type="button">Save</button>
         </form>
         <div id="output2"></div>
<code>{`script;
   const output = document.getElementById('output');
   const formElem = document.getElementById("form");

   formElem.addEventListener("submit", (e) => {
   // on form submission, prevent default
   e.preventDefault();
   // construct a FormData object, which fires the formdata event
   const formData = new FormData(formElem);
   // formdata gets modified by the formdata event
   console.log(Object.fromEntries(formData)["text1"]);
   output.innerText = sum(formData.get("v1"), formData.get("v2"));
});

   // formdata handler to retrieve data
   formElem.addEventListener("formdata", (e) => {
   console.log("formdata fired");
   // modifies the form data
   const formData = e.formData;
   // formdata gets modified by the formdata event
   formData.set("v1", formData.get("text1"));
   formData.set("v2", formData.get("text2"));
});
   function sum(a, b) {
   const pasedA = parseInt(a);
   const pasedB = parseInt(b);
   if(!isFinite(pasedA) || !isFinite(pasedB)) {
   return backtics 숫자가 아님 a; value b; value
} else {
   return pasedA + pasedB;
}
}`}</code>
      </section>
      <section>
         <p> HTML 요소를 사용합니다: form, label, input, textarea 및 button</p>
         <code>&lt;form action="/my-handling-form-page" method="post"&lt;…&lt;/form&gt;</code>
         <ul>
            <li>action : 양식이 제출될 때 수집된 데이터가 전송될 위치(URL)를 정의</li>
            <li>method : 데이터를 전송할 HTTP 메서드(일반적으로 get또는 post)를 정의</li>
         </ul>
      </section>
      <section>
         <h3>구현된 HTML form</h3>
         <p>type : text/email, value : default value</p>
         <code>&lt;input type="email" value="a@c.com" &gt;</code>
         <div className="form-container">
            <form action="/my-handling-form-page" method="post">
               <p>
                  <label htmlFor="name">Name: </label>
                  <input type="text" id="name" name="user_name" value="black pink"/>
               </p>
               <p>
                  <label htmlFor="mail">Email:</label>
                  <input type="email" id="mail" name="user_email" value="abc@kal.com"/>
               </p>
               <p>
                  <label htmlFor="msg">Message: </label>
                  <textarea id="msg" name="user_message">by default this element is filled with this text</textarea>
               </p>
               <p className="button">
                  <button type="submit">Send Message.</button>
               </p>
            </form>
         </div>
         <p>요소는 &lt;button&gt; 또한 type속성을 허용합니다. 속성은 세 가지 값 submit, reset, 또는 button 중 하나를 허용합니다.</p>
         <ul>
            <li>submit(기본값) : 버튼을 클릭하면 양식의 데이터가 action에 정의된 url로 전송됩니다.</li>
            <li>reset : 버튼을 클릭하면 모든 폼 위젯이 즉시 기본값으로 재설정됩니다. UX 관점에서 볼 때 이는 나쁜 관행으로 간주되므로, 실제로 포함할 만한 좋은 이유가 없다면 이 유형의 버튼을
               사용하지 않는 것이 좋습니다.
            </li>
            <li>button: 버튼 을 클릭해도 아무 일도 일어나지 않습니다 ! 어리석은 소리 같지만, 사용자 지정 버튼을 만드는 데는 놀라울 정도로 유용합니다. JavaScript로 선택한 기능을
               정의할 수 있습니다.
            </li>
         </ul>
      </section>
      <section>
         <h3>웹 서버로 양식 데이터 보내기</h3>
         <p>마지막 부분이자 아마도 가장 까다로운 부분은 서버 측에서 폼 데이터를 처리하는 것입니다. form 요소는 action 속성 덕분에 데이터를 어디에 어떻게 보낼지 정의합니다 .</p>
         <p><b>name</b> 각 폼 컨트롤에 대한 속성을 제공합니다.이름은 클라이언트와 서버 측 모두에서 중요합니다. 브라우저에 각 데이터에 어떤 이름을 부여해야 하는지 알려주고, 서버 측에서는 서버가
            각 데이터를 이름으로 처리하도록 합니다. 폼 데이터는 key/value 쌍으로 서버로 전송됩니다.</p>
         <p>양식의 데이터에 이름을 지정하려면 특정 데이터를 수집하는 각 양식 위젯에서 <b>name</b> 속성을 사용해야 합니다.</p>
         <p>예에서 폼은 user_email,user_name, user_message 라는 이름의 3개의 데이터를 보냅니다. 그 데이터는 HTTP POST 메서드를 사용하여
            URL(/my-handling-form-page)로 전송(POST)됩니다.</p>
         <p>서버 측에서 URL의 스크립트는 HTTP 요청(/my-handling-form-page)에 포함된 3개의 key/value 항목 목록으로 데이터를 수신합니다. 이 스크립트가 해당 데이터를
            처리하는 방식은 사용자에게 달려 있습니다. 각 서버 측 언어(PHP, Python, Ruby, Java, C# 등)에는 폼 데이터를 처리하는 고유한 메커니즘이 있습니다. 이 가이드의 범위를
            벗어나는 주제로 깊이 들어가지는 않지만, 자세히 알고 싶다면 나중에 폼 데이터 보내기 문서에서 몇 가지 예를 제공했습니다.</p>
      </section>
   </main>)
}