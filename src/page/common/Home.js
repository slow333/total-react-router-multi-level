import { Route, Routes} from "react-router-dom";
import OutletInput from "../OutletInput";
import JsxMarkup from "../react-inside/ui-render/01-JsxMarkup";
import PropsInjection from "../react-inside/ui-render/02-PropsInjection";
import HowRendering from "../react-inside/ui-render/03-HowRendering";
import UiTree from "../react-inside/ui-render/04-UiTree";
import EventHandle from "../react-inside/event-react/01-EventHandle";
import HandleState from "../react-inside/event-react/02-HandleState";
import RenderingCommit from "../react-inside/event-react/03-RenderingCommit";
import ObjectStateUpdate from "../react-inside/event-react/04-ObjectStateUpdate";
import ArrayStateUpdate from "../react-inside/event-react/05-ArrayStateUpdate";
import HandleUseState from "../react-inside/state-mgmt/01-HandleUseState";
import StateArchitecture from "../react-inside/state-mgmt/02-StateArchitecture";
import StateHoisting from "../react-inside/state-mgmt/03-StateHoisting";
import StateReducer from "../react-inside/state-mgmt/04-StateReducer";
import ContextPropDelivery from "../react-inside/state-mgmt/05-ContextPropDelivery";
import ContextUseReducer from "../react-inside/state-mgmt/06-ContextUseReducer";
import UsingRef from "../react-outside/ref-effect/01-UsingRef";
import DOMByRef from "../react-outside/ref-effect/02-DOMByRef";
import EffectBasic from "../react-outside/ref-effect/03-EffectBasic";
import HtmlBasic from "../html-css/01-HtmlBasic";
import {CssTips} from "../html-css/02-CssTips";
import CssAttribute from "../html-css/03-CssAttribute";
import FormIntro from "../html-css/04-FormIntro";
import FormTypes from "../html-css/05-FormTypes";
import InputTypes from "../html-css/06-InputTypes";
import JsBasic from "../javascript/js/01-JsBasic";
import JsArrayIfLoop from "../javascript/js/02-JsArrayIf";
import FuncExample from "../javascript/js/03-Func";
import EventHandling from "../javascript/js/04-EventHandling";
import Blob from "../javascript/js/05-Blob";
import JsObjectBasic from "../javascript/object/01-JsObjectBasic";
import ObjectPrototype from "../javascript/object/02-ObjectPrototype";
import Inheritance from "../javascript/object/03-Inheritance";
import JsonExample from "../javascript/object/04-Json";
import AsyncBasic from "../javascript/async/01-AsyncBasic";
import AsyncEventHandler from "../javascript/async/02-AsyncEventHandler";
import PromisesEx from "../javascript/async/03-PromisesEx";
import PromisesMultiple from "../javascript/async/05-PromisesMultiple";
import CustomPromises from "../javascript/async/06-CustomPromises";
import PromisesApi from "../javascript/async/07-PromisesApi";
import JsWorker from "../javascript/async/08-JsWorker";
import Memos from "./memos";
import React from "react";
import {Layout} from "../../Router";

export default function Home() {
   return (<main>
      <section>
         <h2>관련 내용은 MDN 페이지를 참조함</h2>
         <ul>
            <li><a href="https://developer.mozilla.org/ko/docs/Learn/HTML">MDN HTML 공부 페이지</a></li>
            <li><a href="https://developer.mozilla.org/ko/docs/Learn/CSS">MDN CSS 공부 페이지</a></li>
            <li><a href="https://developer.mozilla.org/ko/docs/Learn/JavaScript/">MDN JS 공부 페이지</a></li>
            <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects">JS 표준 내장
               객체</a></li>
         </ul>
         <h3>페이지 구성</h3>
         <p>home은 main 밑에 article, aside를 구성해서 grid를 적용</p>
         <p>그외 페이지는 일반적으로 article 로만 구성</p>
         <h3>Nav bar 구성</h3>
         <p>Nav Menu는 기본적으로 CSS를 통해 구성</p>
         <h4>&nbsp; 🎁 전체 구조</h4>
         <code>
   {`.nav
   ⁝-- a tag : go to Home
   ⁝-- .subnav : for group have sub menu
     ⁝-- .subnavbtn : for handle sub menu
     ⁝-- .subnav-content : display none(hover display block)
       ⁝-- a tag : go to sub menu
       ⁝-- a tag : go to sub menu
       ⁝-- a tag : go to sub menu
   ⁝-- .subnav
     ⁝-- .subnavbtn : for handle sub menu
     ⁝-- .subnav-content : display none(hover display block)
       ⁝-- a tag : go to sub menu
       ⁝-- a tag : go to sub menu
       ⁝-- a tag : go to sub menu
   ⁝-- a tag : go to somewhere`}
        </code>
            <h4>&nbsp; 🎁 javascript 구성</h4>
         <h5>Menu 파일을 만들고 불러와서 사용하기</h5>
         <ol>
            <li>window.addEventListener("load", fuction() {}</li>
            <li>document.getElementsByTagName("*");</li>
            <li>Array.prototype.forEach.call(전체테그, function (el) {}</li>
            <li>내부에서 html tag의 data 중 data-include-path(el.dataset.includePath)가 있으면 찾음</li>
            <li>let xhttp = new XMLHttpRequest(); 를 생성하고</li>
            <li>xhttp.onreadystatechange = function() {}</li>
            <li>에러가 없으면 찾은 el의 outerHTML에 xhttp에서 받은 것을 text로 넣어줌</li>
            <li>el.outerHTML = this.responseText;</li>
            <li>xhttp.open("GET", includePath, true);
               xhttp.send(); 해줌
            </li>
         </ol>
         <h5>nav click 시 submenu를 보이게 하고 클릭한 nav link나 button에 디자인을 함</h5>
         <ul>
            <li>menu의 전체 button, a tag를 모두 찾음(querySelectorAll)</li>
            <li>개별 링크나 버튼에 대해 클릭 시 action을 정의</li>
            <li>window.location.href를 이용 현재 페이지와 비교해서 디자인 적용</li>
            <li>위치 정보나 클릭 이벤트에 대해 display none 또는 block을 적용하여 숨기고, 표시하기</li>
            <li>현재 위치에서 위, 아래, 옆으로 이동하는 방법</li>
            <li>nextSibling(같은 계위), e.target(클릭 발생한 element), parentNode, firstElementChild, lastElementChild,
               parentElement
            </li>
         </ul>
         <h4>sub menu가 겹치는 경우에는 z-index를 조정해서 보이게 하는 것도 방법임</h4>
<code>{`.subnav:hover .subnav-content {
     display: block;
     z-index: 20;
  }`}</code>
         <h3>section 의 타이틀</h3>
         <p> code에 줄바꿈 적용은 css에서 white-space: pre; 적용 </p>
      </section>

      <h1>React</h1>
      <p>React는 사용자 인터페이스(UI)를 렌더링하기 위한 JavaScript 라이브러리입니다. UI는 버튼, 텍스트, 이미지와 같은 작은 요소로 구성됩니다. React를 통해 작은 요소들을 재사용
         가능하고 중첩할 수 있는 컴포넌트로 조합할 수 있습니다. 웹 사이트에서 휴대전화 앱에 이르기까지 화면에 있는 모든 것을 컴포넌트로 나눌 수 있습니다. </p>
      <p>여전히 많은 웹사이트들은 React를 약간의 상호작용을 추가하는 용도로만 사용합니다. 이러한 웹사이트에는 전체 페이지에 하나의 root 컴포넌트가 아닌 여러 개의 root 컴포넌트가 있습니다.
         필요한 만큼
         React를 많이 또는 적게 사용할 수 있습니다.</p>
      <section>
         <h3>본 페이 구성(react rout 이용)</h3>
         <h4>Routes 구성</h4>
         <p>Routs 밑에 모든 Route를 두고 그 Route 밑에 또 라우트를 둠</p>
         <code> Routes(Route, Route(Route, --Route, ..., --Route(*), ...) )</code>
         <p>route에서 element에 대한 경로(path)를 정의 함.</p>
         <code>{`다단계로 구성함
function Router() {
   return (<div>
      <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='react-inside'  element={<OutletInput/>}>
               <Route path="rendering" element={<OutletInput/>}>
                  <Route index element={<JsxMarkup/>}/>
                  <Route path='jsx-markup' element={<JsxMarkup/>}/>
                  <Route path='ui-tree' element={<UiTree/>}/>
               </Route>              
               <Route path="state" element={<OutletInput/>}>
                  <Route index element={<HandleUseState/>}/>
                  <Route path='handle-useState' element={<HandleUseState/>}/>
                  <Route path='context-prop-delivery' element={<ContextPropDelivery/>}/>
                  <Route path='context-useReducer' element={<ContextUseReducer/>}/>
               </Route>
            </Route>            
            <Route path='html-css' element={<OutletInput/>}>
               <Route index element={<HtmlBasic/>}/>
               <Route path="html-basic" element={<HtmlBasic/>}/>
               <Route path="css-tips" element={<CssTips/>}/>
               <Route path="input-types" element={<InputTypes/>}/>
            </Route>            
            <Route path='memo' element={<Memos/>} />
         </Route>
      </Routes>
   </div>);
}`}</code>
         <p>sub menu 구성은 root의 Layout 구성하듯,
            <br/>특정 route path에 children을 route로 넣고, element로 Layout을 정의</p>
         <h4>Layout-Outlet 정의</h4>
         <ol>
            <li>element Layout에서 nav를 정의 : Link to는 route path</li>
            <li>Outlet : Link to의 내용이 변경되면서 표시되는 곳</li>
            <li>주의 사항: Link에 onClick하면 경로로 이동하지 않음(감싼 태그에 onClick 넣어야함)</li>
            <li>onHover => onMouseEnter, onMouseLeave</li>
         </ol>
   <code>{`<div>
    <nav>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        <li> <Link to="/dashboard">Dashboard</Link> </li>
        <li> <Link to="/nothing-here">Nothing Here</Link> </li>
      </ul>
    </nav>
  
    {/* <Outlet>으로 하면, child route를 클릭하면 아래 위치에표시됨 */}
    <Outlet />
  </div>`}</code>
            <p><b>이렇게 하면 nav는 고정되고 클릭된 내용만 표시됨</b></p>
      </section>
      <aside>
         <h2>Tips</h2>

         <ul style={{borderLeft: '1px solid rgb(65, 45, 45)'}}>
            <li><a href="/pages/tips/js-func-share.html">javascript function 분리 구성하기</a></li>
            <li><a href="/pages/tips/jsParentChild.html">dom에서 parent, child 찾아가기</a></li>
            <li><a href="/pages/tips/secondIndex.html">두번째 index 페이지 샘플</a></li>
         </ul>
      </aside>
      </main>)
}