export default function NoNeedEffect() {
   return (<main>
      <h2>Effect를 꼭 사용해야 하는지 점검 필요</h2>
      <p><b>Effect는 결과를 예상하기 힘들고, 제어가 잘 안되므로 
         가능하면 사용하지 않는게 좋음</b></p>
      <p>다음은 불필요한 Effect를 제거하는 것에 대한 고찰임</p>
      <section>
         <h4>props 또는 state에 따라 state 업데이트</h4>
         <h4>비용이 많이 드는 계산 캐싱하기</h4>
         <p>useMemo Hook으로 래핑해서 값비싼 계산을 캐시(또는 “메모이제이션”) 할 수 있습니다.</p>
         <code>{`function TodoList({ todos, filter }) {
     const [newTodo, setNewTodo] = useState('');
     const visibleTodos = useMemo(() => {
       // ✅ todos 또는 filter가 변경되지 않는 한 다시 실행되지 않습니다.
       return getFilteredTodos(todos, filter);
     }, [todos, filter]);
     // ...
   }`}</code>
      </section>
      <section>
         <h3>계산이 비싼지 어떻게 알 수 있나요? </h3>
         <code>{`console.time('filter array');
   const visibleTodos = getFilteredTodos(todos, filter);
   console.timeEnd('filter array');`}  </code>
      </section>
      <section>
         <h4>prop 변경 시 모든 state 초기화</h4>
         <p>Component에 key를 지정하면 새로 component를 생성하면 신규로 생성됨</p>
      <code>{`function ProfilePage({ userId }) {
     return ( <Profile userId={userId} key={userId} /> );
   }
   
   function Profile({ userId }) {
     // ✅ 이 state 및 아래의 다른 state는 key 변경 시 자동으로 재설정됩니다.
     const [comment, setComment] = useState('');
     // ...
   }`}</code>
      </section>
      <section>
         <h4>애플리케이션 초기화</h4>
         <p>일반적인 useEffect는 개발 모드에서 2번 실행됨. 함수가 두 번 호출되도록 설계되지 않았기 때문에 인증 토큰이 무효화되는 등의 문제가 발생할 수 있습니다. </p>
         <code>{`let didInit = false;
   function App() {
     useEffect(() => {
       if (!didInit) {
         didInit = true;
         // ✅ 앱 로드당 한 번만 실행
         loadDataFromLocalStorage();
         checkAuthToken();
       }
     }, []);
     // ...
   }`}</code>
      </section>
   </main>)
}