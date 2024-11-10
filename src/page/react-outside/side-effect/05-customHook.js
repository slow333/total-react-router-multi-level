export default function CustomHook() {
   return(<main>
      <h2>useCustomHook</h2>
      <ul>
         <li>커스텀 Hook을 사용하면 컴포넌트 간 로직을 공유할 수 있습니다.</li>
         <li>커스텀 Hook의 이름은 use 뒤에 대문자로 시작되어야 합니다.</li>
         <li>커스텀 Hook은 state 자체가 아닌 state 저장 로직만 공유합니다.</li>
         <li>하나의 Hook에서 다른 Hook으로 반응형 값을 전달할 수 있고, 값은 최신 상태로 유지됩니다.</li>
         <li>모든 Hook은 컴포넌트가 재렌더링될 때 마다 재실행됩니다.</li>
         <li>커스텀 Hook의 코드는 컴포넌트 코드처럼 순수해야 합니다.</li>
         <li>커스텀 Hook을 통해 받는 이벤트 핸들러는 Effect로 감싸야 합니다.</li>
         <li>useMount같은 커스텀 Hook을 생성하면 안 됩니다. 용도를 명확히 하세요.</li>
         <li>코드의 경계를 선택하는 방법과 위치는 여러분이 결정할 수 있습니다.</li>
      </ul>
   </main>)
}