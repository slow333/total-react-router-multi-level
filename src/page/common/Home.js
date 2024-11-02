import {Route, Routes} from "react-router-dom";

function Home() {
  return (
      <main>
        <h2>Home</h2>
        <p>React는 사용자 인터페이스(UI)를 렌더링하기 위한 JavaScript 라이브러리입니다. UI는 버튼, 텍스트, 이미지와 같은 작은 요소로 구성됩니다. React를 통해 작은 요소들을 재사용
          가능하고 중첩할 수 있는 컴포넌트로 조합할 수 있습니다. 웹 사이트에서 휴대전화 앱에 이르기까지 화면에 있는 모든 것을 컴포넌트로 나눌 수 있습니다. </p>
        <p>여전히 많은 웹사이트들은 React를 약간의 상호작용을 추가하는 용도로만 사용합니다. 이러한 웹사이트에는 전체 페이지에 하나의 root 컴포넌트가 아닌 여러 개의 root 컴포넌트가 있습니다. 필요한 만큼 React를 많이 또는 적게 사용할 수 있습니다.</p>
        <section>
          <h3>본 페이 구성(react rout 이용)</h3>
          <h4>Routes 구성</h4>
          <p>Routs 밑에 모든 Route를 두고 그 Route 밑에 또 라우트를 둠</p>
     <code> Routes(Route, Route(Route, --Route, ..., --Route(*), ...) )</code>
          <p>route에서 element에 대한 경로(path)를 정의 함.</p>
  <code className='cd'>{`[Routes]
    [Route path="/" element={<Layout />}]
      [Route index element={<Home />} /]
      [Route path="details" element={<Details />} ]
        [Route path="detail1" element={<Detail1 />} /]
        [Route path="detail2" element={<Detail2 />} /]
        [Route path="detail3" element={<Detail3 />} /]
      [/Route]
      [Route path="*" element={<NoMatch />} /]
    [/Route]
  [/Routes]`}</code>
          <p>sub menu 구성은 root의 Layout 구성하듯,<br/>특정 route path에 children을 route로 넣고, element로 Layout을 정의</p>
          <h4>Layout-Outlet 정의</h4>
          <p>element Layout에서 </p>
    <p>nav를 정의 : Link to는 route path</p>
    <p>Outlet : Link to의 내용이 변경되면서 표시되는 곳</p>
  <code className='cd'>{`[div]
    [nav]
      [ul]
        [li] [Link to="/"]Home[/Link] [/li]
        [li] [Link to="/about"]About[/Link] [/li]
        [li] [Link to="/dashboard"]Dashboard[/Link] [/li]
        [li] [Link to="/nothing-here"]Nothing Here[/Link] [/li]
      [/ul]
    [/nav]
  
    {/* [Outlet]으로 하면, child route를 클릭하면 아래 위치에표시됨 */}
    [Outlet /]
  [/div]`}</code>
    <p><b>이렇게 하면 nav는 고정되고 클릭된 내용만 표시됨</b></p>
        </section>
      </main>
  );
}

export default Home;