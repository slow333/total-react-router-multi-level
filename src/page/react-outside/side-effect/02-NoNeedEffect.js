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
      <section>
         <h3>오래된 응답을 무시하는 정리함수</h3>
         <p>입력이 올때 마다 새로운 검색을 실행해서 다수의 검색 중 어떤 결과가 먼저 올지 알수 없음
            <br/> 1. 앞의 결과를 무시하기 위해서는 정리함수가 필요.
            <br/> 2. 앞의 검색 후 뒤에 검색이 오면 우선 앞의 검색이 취소되고,
            <br/> 3. 새로운 검색 인스턴스가 생성되어 초기화되서 다시 결과를 설정함
            <br/> * useEffect 내부에 return을 해서 앞의 결과를 무시</p>
         <code>{`function SearchResults({ query }) {
     const [results, setResults] = useState([]);
     const [page, setPage] = useState(1);
   
     useEffect(() => {
       let ignore = false;
       if(!false) { 
          fetchResults(query, page).then(json => {
            setResults(json);
          });
        }, [query, page]);    
       }
       return () => ignore = true;
   
     function handleNextPageClick() {
       setPage(page + 1);
     }
     // ...
   }`}</code>
         <code>{`이렇게 하면 Effect가 데이터를 가져올 때 마지막으로 요청된 응답을 제외한 모든 응답이 무시됩니다.`}</code>
         <p>데이터 가져오기를 구현할 때 경쟁 조건을 처리하는 것만이 어려운 것은 아닙니다. 응답 캐싱(사용자가 뒤로가기 버튼을 클릭하여 이전 화면을 즉시 볼 수 있도록), 서버에서 데이터를 가져오는 방법(초기 서버 렌더링 HTML에 스피너 대신 가져온 콘텐츠가 포함되도록), 네트워크 워터폴을 피하는 방법(자식이 모든 부모를 기다리지 않고 데이터를 가져올 수 있도록)도 고려해야 합니다.</p>
         <p>이러한 문제는 React뿐만 아니라 모든 UI 라이브러리에 적용됩니다. 이러한 문제를 해결하는 것은 간단하지 않기 때문에 모던 프레임워크는 Effect에서 데이터를 가져오는 것보다 더 효율적인 내장 데이터 가져오기 메커니즘을 제공합니다.</p>
         <p>프레임워크를 사용하지 않고(그리고 직접 빌드하고 싶지 않고) Effect에서 데이터를 보다 인체공학적으로 가져오고 싶다면 이 예시처럼 가져오기 로직을 사용자 정의 Hook으로 추출하는 것을 고려하세요.</p>
         <code>{`function SearchResults({ query }) {
     const [page, setPage] = useState(1);
     const params = new URLSearchParams({ query, page });
     const results = useData(\`/api/search?\${params}\`);
   
     function handleNextPageClick() {
       setPage(page + 1);
     }
     // ...
   }
   
   function useData(url) {
     const [data, setData] = useState(null);
     useEffect(() => {
       let ignore = false;
       fetch(url)
         .then(response => response.json())
         .then(json => {
           if (!ignore) {
             setData(json);
           }
         });
       return () => {
         ignore = true;
       };
     }, [url]);
     return data;
   }`}</code>
      </section>
   </main>)
}