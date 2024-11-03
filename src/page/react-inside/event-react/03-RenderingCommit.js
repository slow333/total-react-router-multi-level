import {useState} from "react";

export default function RenderingCommit() {

  return(
    <main >
      <h1>렌더링 그리고 커밋</h1>
      <p>컴포넌트를 화면에 표시하기 이전에 React에서 렌더링을 해야 합니다.
         해당 과정의 단계를 이해하면 코드가 어떻게 실행되는지 이해할 수 있고 React 렌더링 동작에 관해 설명하는데 도움이 됩니다.</p>
      <p>주방에서 요리사가 컴포넌트를 재료로 맛있는 요리를 한다고 상상해보세요. 이 시나리오에서 React는 고객들의 요청을 받고 주문을 가져오는 웨이터입니다. 이 과정에는 UI를 요청하고 제공하는 세 가지 단계가 있습니다.</p>
      <ol>
        <li>렌더링 트리거(손님이 주문)</li>
        <li>컴포넌트 렌더링(주방에서 요리)</li>
        <li>DOM에 커밋(주문 서빙)</li>
      </ol>
       <RenderingStepImages/>
       <section>
          <h2>렌더링이 트리거되는 경우</h2>
          <li>컴포넌트의 초기 렌더링</li>
          <li>state가 업데이트되는 경우</li>
       </section>
       <section>
          <h2>렌더링은 그 시점의 스냅샷을 찍습니다.</h2>
          <p>"렌더링"이란 React가 컴포넌트(즉, 함수)를 호출한다는 뜻.</p>
          <p>prop, 이벤트 핸들러, 로컬 변수는 모두 <b>렌더링 당시의 state</b>를 사용해 계산됩니다.</p>
          <h4>React가 콤포넌트를 다시 렌더링할 때</h4>
          <ol>
             <li>React가 함수를 다시 호출</li>
             <li>함수가 새로운 JSX 스냅샷을 반환</li>
             <li>그러면 React가 함수가 반환한 스냅샷과 일치하도록 화면을 업데이트
             </li>
          </ol>
           <p>React에 state를 업데이트하라고 명령 ➡ React가 State 값을 업데이트 ➡ React는 상태값의 스냅샷을 컴포넌트에 전달</p>
          <Counter/>
       </section>
       <section>
          <h5>React는 컴포넌트 외부에 마치 선반에 보관하듯 state를 저장합니다.</h5>
          <h5>useState를 호출하면 React는 해당 렌더링에 대한 state의 스냅샷을 제공</h5>
          <h5>변수와 이벤트 핸들러는 다시 랜더링해도 "살아남지" 못합니다. 모든 렌더링에는 고유한 이벤트가 있습니다.</h5>
          <h5>모든 렌더링(및 그 안의 함수)은 항상 React가 그 렌더링에 제공한 state의 스냅샷을 보게 됩니다.</h5>
       </section>
       <section>
          <h2>React state batches 업데이트</h2>
          <li>state를 설정하더라도 기존 렌더링의 변수는 변경되지 않으며, 대신 새로운 렌더링을 요청합니다.</li>
          <li>React는 이벤트 핸들러가 실행을 마친후 state 업데이트를 처리합니다. 이른 batching 이라고 합니다.</li>
          <li>하나의 이벤트에서 일부 state를 여러번 업데이트하려면 <icode>setNumber(n => n+1)</icode> 처럼 업데이터 함수를 사용할 수 있습니다.</li>
       </section>
    </main>
  )
}

function RenderingStepImages(){
   const imageLayoutStyle = {
      display: 'flex',
   }
   return(
      <div style={imageLayoutStyle}>
         <img src="/images/i_render-and-commit1.png" width="200px"/>
         <img src="/images/i_render-and-commit2.png" width="200px"/>
         <img src="/images/i_render-and-commit3.png" width="200px"/>
      </div>
   )
}
function Counter() {
   const [number, setNumber] = useState(0);

   return (
      <>
         <h1>{number}</h1>
         <button onClick={() => {
            setNumber(pre => pre + 1);
            setNumber(number => number + 1);
            setNumber(number => number + 1);
         }}>+3</button>
      </>
   )
}