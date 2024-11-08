export default function  EffectLifecycle() {
   return (<main>
      <h2>반응형 effects의 생명 주기</h2>
      <p>effects는 컴포넌트와 다른 생명주기를 가집니다. 컴포넌트는 마운트, 업데이트 또는 마운트 해제할 수 있습니다. effect는 동기화를 시작하고 나중에 동기화를 중지하는 두 가지 작업만 할 수 있습니다. 이 사이클은 시간이 지남에 따라 변하는 props와 state에 의존하는 effect의 경우 여러 번 발생할 수 있습니다. React는 effect의 의존성을 올바르게 지정했는지 확인하는 린터 규칙을 제공합니다. 이렇게 하면 effect가 최신 props와 state에 동기화됩니다.</p>
      <section>
         <h3>effect의 생명주기</h3>
      </section>
   </main>)
}