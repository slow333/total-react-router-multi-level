import { useState } from "react"

export default function HandleUseState (){
  return(
      <main>
        <h1>state 관리 하기</h1>
         <p>애플리케이션이 커짐에 따라, state가 어떻게 구성되는지 그리고 데이터가 컴포넌트 간에 어떻게 흐르는지에 대해 의식적으로 파악하면 도움이 됩니다. 불필요하거나 중복된 state는 버그의 흔한 원인입니다. 이 장에서는 state를 잘 구성하는 방법, state 업데이트 로직을 유지 보수 가능하게 관리하는 방법, 그리고 멀리 있는 컴포넌트 간에 state를 공유하는 방법에 대해 알아봅니다.</p>
         <section>
            <h2>State를 사용해 input 다루기</h2>
            <CityQuiz/>
         </section>
         <section>
          <h2>UI를 선언적으로 생각하기</h2>
          <ol>
            <li><h4>컴포넌트의 다양한 시각적 state를 확인하세요.</h4>
               <ul>
                  <li>empty: 폼은 비활성화된 "제출" 버튼을 가지고 있다</li>
                  <li>typing: 폼은 활성화된 "제출" 버튼을 가지고 있다.</li>
                  <li>Submitting: 폼은 완전히 비활성화되고 스피너가 보인다.</li>
                  <li>Success: 폼 대신에 "성공 메세지" 표시</li>
                  <li>Error: "typeing" state와 동일하지만 오류 메시지가 보인다.</li>
               </ul>
            </li>
            <li><h4>무엇이 state변화를 트리거하는지 알아내세요.</h4>
            <p>두 종류의 인풋 유형으로 state 변경을 트리거</p>
               <ul>
                  <li>휴먼인풋: 버튼 누르기, 필드 입력, 링크 이동 등</li>
                  <li>컴퓨터 인풋 : 네트워크 응답, 타임아웃, 이미지 로딩 등</li>
               </ul>
               <p>두가지 모두 UI 업데이트를 위해 state 변수를 설정</p>
               <ul>
                  <li>텍스트 인풋을 변경(휴면) : 텍스트 상자의 상태(비어있는지)에 따라 "typing" 또는 "empty"</li>
                  <li>submit 버튼 클릭 : "submitting"으로 변경</li>
                  <li>네트워크 응답이 성공 : "success"</li>
                  <li>네트워크 응답이 실패 : Error state</li>
               </ul>
            </li>
             <li><h4>useState를 사용해서 메모리의 state를 표현</h4>
             <p>최대한 단순하게, 반드시 필요한 것만</p>
 <code>{`const [isEmpty, setIsEmpty] = useState(true);
 const [isTyping, setIsTyping] = useState(false);
 const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [isError, setIsError] = useState(false);`}</code>
             </li>
             <li><h4>불필요한 state 변수를 제거</h4>
             <ul>
                <li>isTyping과 isSubmitting이 동시에 true일 수는 없습니다. 이러한 역설은 보통 state가 충분히 제한되지 않았음을 의미합니다. 여기에는 두 boolean에 대한 네 가지 조합이 있지만 오직 유효한 state는 세 개뿐입니다. 이러한 “불가능한” state를 제거하기 위해 세 가지 값 'typing', 'submitting', 'success'을 하나의 status로 합칠 수 있습니다.</li>
                <li>isEmpty와 isTyping은 동시에 true가 될 수 없습니다. 이를 각각의 state 변수로 분리하면 싱크가 맞지 않거나 버그가 발생할 위험이 있습니다. 이 경우에는 운이 좋게도 isEmpty를 지우고 answer.length === 0으로 체크할 수 있습니다.</li>
                <li>isError는 error !== null로도 대신 확인할 수 있기 때문에 필요하지 않습니다.</li>
             </ul>
                <p>이렇게 정리하면 3개만 남음</p>
<code>{`const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'`}</code>
             </li>
             <li>state설정을 위해 이벤트 핸들러를 연결</li>
          </ol>
         </section>
         <section>
            <h2>요약</h2>
            <ul>
               <li>선언형 프로그래밍은 UI를 세밀하게 직접 조작하는 것(명령형)이 아니라 각각의 시각적 state로 UI를 묘사하는 것을 의미</li>
               <li>컴포넌트를 개발할 때
               <ol>
                  <li>모든 시각적 state를 확인</li>
                  <li>휴먼이나 컴퓨터가 state 변화를 어떻게 트리거 하는지 알아내세요.</li>
                  <li>useState로 state를 모델링하세요.</li>
                  <li>버그와 모순을 피하려면 불필요한 state를 제거</li>
                  <li>state 설정을 위해 이벤트 핸들러를 연결</li>
               </ol>
               </li>
            </ul>
         </section>
      </main>
  )
}

function CityQuiz() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  if(status === 'success'){
    return <h3>정답입니다.</h3>
  }

  async function submitAnswer(e){
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');      
    } catch (error) {
      setStatus('typing');
      setError(error);
    }
  }

  return(
    <div>
      <h3>City quiz</h3>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form>
        <textarea value={answer}
        onChange={(e) => {setAnswer(e.target.value)}}/>
        <button 
        disabled={status === 'submitting' || answer.length === 0}
        onClick={submitAnswer}>Submit</button>

      </form>
      {error !== null && <h3>{error.message}</h3>}
    </div>
  )
}

function submitForm(answer){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima'
      if(shouldError) {
        reject(new Error('정답 아님 다시하세요.'))
      } else {
        resolve();
      }
    },2000)
  })
}