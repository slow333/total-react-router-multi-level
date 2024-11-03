export default function HowRendering() {
  return (
      <main>
        <h1>How Rendering</h1>
        <section>
          <h2>Conditional Rendering</h2>
          <p>if, &&, 삼항연산(? : ), etc</p>
        </section>
        <section>
          <h2>list rendering</h2>
          <p>map, filter</p>
          <code>{`list.map(item => <div>{item}</div>)`}</code>
          <p>&#123; &#125;가 있으면 return을 명시적으로 작성 해야함</p>
          <code>{`list.map(item => { return ( <div>{item}</div> ) } )`}</code>
          <code>{`list.filter(item => item.name="passport")`}</code>
        </section>
        <section>
          <h2>component는 순수하게 유지해야 함</h2>
          <h3>순수 함수란 ?</h3>
          <ul>
            <li>자신의 일에 집중합니다. 함수가 호출되기 전에 존재했던 어떤 객체나 변수는 변경하지 않습니다.</li>
            <li>같은 입력, 같은 출력 같은 입력이 주어졌다면 순수함수는 같은 결과를 반환해야 합니다.</li>
          </ul>
          <p><b>외부 변수를 가져와서 함수 내부에서 변경하는 것은 좋지 않음, 대신 props로 받아서 처리</b></p>
          <p>아직 다 활용하지 않았을 수도 있지만 React에는 렌더링하면서 읽을 수 있는 세 가지 종류의 입력 요소가 있습니다. props, state, 그리고 context. 이러한 입력 요소는 항상 읽기전용으로 취급해야 합니다.<br/>
            사용자의 입력에 따라 무언가를 변경 하려는 경우, 변수를 직접 수정하는 대신 set state를 활용해야 합니다. 컴포넌트가 렌더링되는 동안엔 기존 변수나 개체를 변경하면 안됩니다.</p>
          <p>순수 함수는 함수 스코프 밖의 변수나 호출 전에 생성된 객체를 변경하지 않습니다.
            렌더링하는 동안 그냥 만든 변수와 객체를 변경하는 것은 전혀 문제가 없습니다.</p>
          <Waiting/>
          <h3>React는 왜 순수함을 신경쓸까요? </h3>
          <ul>
            <li>컴포넌트는 다른 환경에서도 실행될 수 있습니다- 예를 들면 서버에서 말이죠! 동일한 입력에 대해 동일한 결과를 반환하기 때문에 하나의 컴포넌트는 많은 사용자 요청을 처리할 수 있습니다.</li>
            <li>입력이 변경되지 않은 컴포넌트 렌더링을 건너뛰어 성능을 향상시킬 수 있습니다. 순수 함수는 항상 동일한 결과를 반환하므로 캐시하기에 안전합니다.</li>
            <li>깊은 컴포넌트 트리를 렌더링하는 도중에 일부 데이터가 변경되는 경우 React는 오래된 렌더링을 완료하는 데 시간을 낭비하지 않고 렌더링을 다시 시작할 수 있습니다. 순수함은 언제든지 연산을 중단하는 것을 안전하게 합니다.</li>
          </ul>
        </section>
        <section>
          <h2>side effect, outside effect</h2>
          <p>함수형 프로그래밍은 순수성에 크게 의존하지만, 언젠가는, 어딘가에서, 무언가가 바뀌어야 합니다. 그것이 프로그래밍의 요점입니다! 이러한 변화들(화면을 업데이트하고, 애니메이션을 시작하고, 데이터를 변경하는 것)을 SIDE EFFECT사이드 이펙트라고 합니다. <b>렌더링중에 발생하는 것이 아니라 “사이드에서,” 발생하는 현상입니다.</b></p>
          <p>React에선, 사이드 이펙트는 보통 이벤트 핸들러에 포함됩니다. 이벤트 핸들러는 React가 일부 작업을 수행할 때 반응하는 기능입니다-예를 들면 버튼을 클릭할 때처럼 말이죠. 이벤트 핸들러가 컴포넌트 내부에 정의되었다 하더라도 렌더링 중에는 실행되지 않습니다! 그래서 이벤트 핸들러는 순수할 필요가 없습니다.</p>
          <p>다른 옵션을 모두 사용했지만 사이드 이펙트에 적합한 이벤트 핸들러를 찾을 수 없는 경우, 컴포넌트에서 useEffect 호출을 사용하여 반환된 JSX에 해당 이벤트 핸들러를 연결할 수 있습니다. 이것은 React에게 사이드 이펙트가 허용될 때 렌더링 후 나중에 실행하도록 지시합니다. 그러나 <b>이 접근 방식이 마지막 수단이 되어야 합니다.</b></p>
        </section>
      </main>
  )
}
function Cup({customer}) {
  return <h3>Waiting Customer #{customer}</h3>
}

function Waiting(){
  let cups = [];
  for(let i=1; i < 2; i++){
    cups.push(<Cup customer={i}/>)
  }
  return cups;
}