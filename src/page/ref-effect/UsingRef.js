import {useRef, useState} from "react";

export default function UsingRef() {
   return(<main>
      <h2>Ref로 값 참조하기</h2>
      <p>컴포턴트가 일부 정보를 기억하고 싶지만, 렌터링을 유발하지 않도록하려면 ref를 사용</p>
      <section>
         <code>const ref = useRef(0);</code>
         <p>useRef는 <code>{`{curent:0}`}</code> 객체를 반환</p>
         <h3>요약</h3>
         <ul>
            <li>Refs는 렌터링에 사용되지 않는 값을 고정하기 위한 탈출구. 자주필요하지 않음</li>
            <li>ref는 변수 처럼 읽거나 변경할 수 있는 current 라는 프로퍼티를 호출. 자바스크립트 순수 객체</li>
            <li>useRef Hook를 호출해 ref를 지정</li>
            <li>state와 마찬가지로 ref는 컴포넌트 간에 정보를 유지</li>
            <li>state와 달리 ref가 변경되도 리렌터 하지 않음</li>
            <li>렌터링 중에 ref.current를 읽거나 쓰면 컴포넌트를 예측하기 어렵게 만듭니다.</li>
         </ul>
         <h3>refs 좋은 예시</h3>
         <ul>
            <li>refs를 탈출구로 간주합니다. Refs는 외부 시스템이나 브라우저 API로 작업할 때 유용합니다. 애플리케이션 로직과 데이터 흐름의 상당 부분이 refs에 의존한다면 접근 방식을 재고해 보는 것이 좋습니다.</li>
            <li>렌더링 중에 ref.current를 읽거나 쓰지 마세요. 렌더링 중에 일부 정보가 필요한 경우 state를 대신 사용하세요. ref.current가 언제 변하는지 React는 모르기 때문에 렌더링할 때 읽어도 컴포넌트의 동작을 예측하기 어렵습니다. (if (!ref.current) ref.current = new Thing() 과 같은 코드는 첫 번째 렌더 중에 ref를 한 번만 설정하는 경우가 예외입니다.)</li>
         </ul>
      </section>
      <section>
         <h3>Refs와 DOM</h3>
         <p>ref의 가장 일반적인 사용사례는 DOM 엘리먼트에 액세스하는 것.
            <br/>{`<div ref={myref}>`}하면 해당 DOM 엘리먼트를 myref.current에 넣음.</p>
      </section>
      <section>
         <h3>Stop watch(intervalId를 ref로 저장)</h3>
         <Stopwatch/>
         <h3>렌더링 중간에 값변경해서 출력하기
            <br/>(e.target.value를 ref로 저장하고, 출력으로 ref를 지정)</h3>
         <Chat/>
         <div className='output'></div>
      </section>
   </main>)
}

function Stopwatch() {

   const [start, setStart] = useState(0);
   const [now, setNow] = useState(0);
   const intervalId = useRef(0);

   function handleStart() {
      setStart(Date.now());
      setNow(Date.now());

      clearInterval(intervalId.current);
      intervalId.current = setInterval(() => {
         setNow(Date.now());
      }, 500)
   }
   function handleStop() {
      clearInterval(intervalId.current);
   }
   let elapsed = 0;
   if(start !== null && now !== null) {
      elapsed = (now - start)/1000;
   }

   return (<>
      <h4>Time passed : {elapsed}</h4>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>

   </>)
}

function Chat() {
   const [text, setText] = useState('');
   const textRef = useRef(text);

   function handleChange(e) {
      setText(e.target.value);
      textRef.current = e.target.value;
   }

   function handleSend() {
      setTimeout(() => {
         // alert('Sending: ' + textRef.current);
         document.querySelector(".output").innerText = textRef.current;
      }, 3000);
   }

   return (
      <>
         <input
            value={text}
            onChange={handleChange}
         />
         <button
            onClick={handleSend}>
            Send
         </button>
      </>
   );
}