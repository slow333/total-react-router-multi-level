export default function PropsInjection() {
   return (
      <main>
         <h1>컴포넌트에 props 전달하기</h1>
         <p>React 컴포넌트는 props를 이용해 서로 통신합니다. 모든 부모 컴포넌트는 props를 줌으로써
            몇몇의 정보를 자식 컴포넌트에게 전달할 수 있습니다. props는 HTML 어트리뷰트를 생각나게 할 수도 있지만,
            객체, 배열, 함수를 포함한 모든 JavaScript 값을 전달할 수 있습니다.</p>
         <p>child function에서의 props는 중괄호로 감싸서 받아야 함
            <code>function funcName(&#123;propsName &#125;) &#123; ...  &#125;</code></p>
         <p>사용하기 위해서는 <code>&lt; ComponentName propsName=&#123;value&#125; /&gt;</code>로 받아야함</p>
         <section>
            <h2>자식을 JSX로 전달하기</h2>
<code>{`function children({children}) {
  <Card>{children}</Card> 
}`}</code>
            <p>children prop을 가지고 있는 컴포넌트는 부모 컴포넌트가 입의의 JSX로 채울 수 있는 구성이 있는 것</p>
            <h4>spread 문법을 사용한 props 전달</h4>
<code>{`function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  )
 }`}</code>
         </section>
         <section>
            <h2>시간에 따라 props가 변하는 방식</h2>
            <p>props는 컴퓨터 과학에서 “변경할 수 없다”라는 의미의 불변성을 가지고 있습니다. 컴포넌트가 props를 변경해야 하는 경우
               (예: 사용자의 상호작용이나 새로운 데이터에 대한 응답), 부모 컴포넌트에 다른 props,
               즉 새로운 객체를 전달하도록 “요청”해야 합니다! 그러면 이전의 props는 버려지고,
               결국 자바스크립트 엔진은 기존 props가 차지했던 메모리를 회수하게 됩니다.</p>

            <p>“props 변경”을 시도하지 마세요. 선택한 색을 변경하는 등 사용자 입력에 반응해야 하는
               경우에는 State: 컴포넌트의 메모리에서 배울 “set state”가 필요할 것입니다.</p>
         </section>
         <section>
            <h3>timer</h3>
            {/*<Clock/>*/}
         </section>
      </main>)
}

