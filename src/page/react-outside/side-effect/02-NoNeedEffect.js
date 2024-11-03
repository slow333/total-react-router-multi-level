export default function NoNeedEffect() {
   return (<main>
      <h2>Effect를 꼭 사용해야 하는지 점검 필요</h2>
      <p><b>Effect는 결과를 예상하기 힘들고, 제어가 잘 안되므로 
         가능하면 사용하지 않는게 좋음</b></p>
      <p>다음은 불필요한 Effect를 제거하는 것에 대한 고찰임</p>

      <section>
         <h3>계산이 비싼지 어떻게 알 수 있나요? </h3>
         <code>{`console.time('filter array');
   const visibleTodos = getFilteredTodos(todos, filter);
   console.timeEnd('filter array');`}  </code>
      </section>
   </main>)
}