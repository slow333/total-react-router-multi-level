export default function EffectEvent() {
   return(<main>
      <h2>Effect에서 이벤트 분리하기</h2>
      <p>이벤트 핸들러는 같은 상호작용을 반복하는 경우에만 재실행됩니다. Effect는 이벤트 핸들러와 달리 prop이나 state 변수 등 읽은 값이 마지막 렌더링 때와 다르면 다시 동기화합니다. 때로는 두 동작이 섞여서 어떤 값에는 반응해 재실행되지만, 다른 값에는 그러지 않는 Effect를 원할 때도 있습니다.</p>
      <ul>
         <li>이벤트 핸들러는 특정 상호작용에 대한 응답으로 실행됩니다.</li>
         <li>Effect는 동기화가 필요할 때마다 실행됩니다.</li>
         <li>이벤트 핸들러 내부의 로직은 반응형이 아닙니다.</li>
         <li>Effect 내부의 로직은 반응형입니다.</li>
         <li>Effect의 비반응형 로직은 EffectEvent로 옮길 수 있습니다.</li>
         <li>Effect 이벤트는 Effect 내부에서만 호출하세요.</li>
         <li>Effect 이벤트를 다른 컴포넌트나 Hook에 전달하지 마세요.</li>
      </ul>
      <section>
         <h3>useEffectEvent</h3>

      </section>
   </main>)
}