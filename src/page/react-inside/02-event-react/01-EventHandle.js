import {useState} from "react";

export default function EventHandle(){
  return(
      <main>
        <h1>이벤트에 응답하기</h1>
        <p>React에서는 JSX에 이벤트 핸들러를 추가할 수 있습니다. 이벤트 핸들러는 클릭, 마우스 호버, 폼 인풋 포커스 등 사용자 상호작용에 따라 유발되는 사용자 정의 함수입니다.</p>
        <section>
          <h2>Event Handler 추가하기</h2>
          <h4>올바른 사용: 클릭 시에만 실행됨</h4>
          <p>{`<button onClick={handleClick}`}</p>
          <p>{`<button onClick={() => alert(...)}`} </p>
          <h4>이렇게 하면 렌더링 중 클릭이 없어도 실행됨</h4>
          <p>{`<button onClick={handleClick()}`} </p>
          <p>{`<button onClick={alert(...)}`} </p>
          <p></p>
        </section>
        <section>
          <h2>이벤트 핸들러를 props로 전달</h2>
          <p>부모 컴포넌트로 자식의 이벤트 핸들러를 지정하기 원할 때</p>
          <Toolbar/>
          <p><b>부여된 JSX 태그 내에서만 실행되는 onScroll을 제외한 React 내의 모든 이벤트는 전파됩니다.</b></p>
          <p>이벤트 핸들러는 이벤트 오브젝트를 유일한 매개변수로 받습니다. 관습을 따르자면 “event”를 의미하는 e로 호출되는 것이 일반적입니다. 이 오브젝트를 이벤트의 정보를 읽어들이는데 사용할 수 있습니다.</p>
          <p>이러한 이벤트 오브젝트는 전파를 멈출 수 있게 해줍니다. 이벤트가 부모 컴포넌트에 닿지 못하도록 막으려면 아래 Button 컴포넌트와 같이 e.stopPropagation()를 호출합니다.e.stopPropagation()을 호출하면 이벤트가 더 이상 bubbling 되지 않도록 방지합니다.</p>
<code>{`
function Button({onClick,children}) {
   return(
       <button
            onClick={e => {
              e.stopPropagation();
              onClick();
            }}}
       >
      {children}</button>
   );
 }
 `}</code>
        </section>
        <section>
          <h2>prevent default</h2>
          <p>e.stopPropagation()와 e.preventDefault()를 혼동하지 마세요. 둘 다 유용하지만, 서로 전혀 관련 없는 기능입니다.</p>
          <ul>
            <li>e.stopPropagation()은 이벤트 핸들러가 상위 태그에서 실행되지 않도록 멈춥니다.</li>
            <li>e.preventDefault() 는 기본 브라우저 동작을 가진 일부 이벤트가 해당 기본 동작을 실행하지 않도록 방지합니다.</li>
          </ul>
        </section>
        <section>
          <h2>이벤트 핸들러는 사이드 이펙트를 위한 최고의 위치입니다.</h2>
          <p>함수를 렌더링하는 것과 다르게 이벤트 핸들러는 순수할 필요가 없기에 무언가를 변경하는데 최적의 위치입니다. 예를 들어 타이핑에 반응해 입력 값을 수정하거나, 버튼 입력에 따라 리스트를 변경할 때 적절합니다. 그러나 일부 정보를 수정하기 위해서는 먼저 그 정보를 저장하기 위한 수단이 필요합니다. React에서는 컴포넌트의 기억 역할을 하는 state를 이용할 수 있습니다. 해당 기능의 모든 것에 대해 다음 페이지에서 배울 것입니다.</p>
        </section>
      </main>
  )
}
function Button({onClick, children}){
  return(
      <button onClick={onClick}>{children}</button>
  )
}
function PlayButton({message}){
  const [msg, setMsg] = useState(message);

  function handleClick() {
    setMsg(`놀아보아요 ${msg}`);
  }
  return(
      <div>
        <button onClick={handleClick}>{msg}</button>
      </div>
  )
}
function UploadButton(){
  return(
      <Button onClick={() => console.log("clicked")}>
      Upload video!!
      </Button>
  )
}
function Toolbar() {
  return(
      <div>
        <PlayButton message="매우 즐겁게"/>
        <UploadButton/>
      </div>
  )
}