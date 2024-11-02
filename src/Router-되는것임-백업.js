import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./page/common/Home";
import OutletInput from "./page/OutletInput";
import Memos from "./page/common/memos";
import JsxMarkup from "./page/ui-render/JsxMarkup";
import PropsInjection from "./page/ui-render/PropsInjection";
import {useRef, useState} from "react";
import HowRendering from "./page/ui-render/HowRendering";
import UiTree from "./page/ui-render/UiTree";
import EventHandle from "./page/event-react/EventHandle";
import HandleState from "./page/event-react/HandleState";
import RenderingCommit from './page/event-react/RenderingCommit';
import ObjectStateUpdate from "./page/event-react/ObjectStateUpdate";
import ArrayStateUpdate from "./page/event-react/ArrayStateUpdate";
import HandleUseState from "./page/state-mgmt/HandleUseState";
import StateArchitecture from "./page/state-mgmt/StateArchitecture";
import StateHoisting from "./page/state-mgmt/StateHoisting";
import StateReducer from "./page/state-mgmt/StateReducer";
import ContextPropDelivery from "./page/state-mgmt/ContextPropDelivery";
import UsingRef from "./page/ref-effect/UsingRef";
import DOMByRef from "./page/ref-effect/DOMByRef";
import EffectBasic from "./page/ref-effect/EffectBasic";
import './css/menu.css';
import {links, subs} from "./data/navData";

export default function Router() {
   return (<div>
      <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="ui-render" element={<OutletInput/>}>
               <Route index element={<JsxMarkup/>}/>
               <Route path='jsx-markup' element={<JsxMarkup/>}/>
               <Route path='props-injection' element={<PropsInjection/>}/>
               <Route path='how-rendering' element={<HowRendering/>}/>
               <Route path='ui-tree' element={<UiTree/>}/>
            </Route>
            <Route path="react-event" element={<OutletInput/>}>
               <Route index element={<EventHandle/>}/>
               <Route path='event-handle' element={<EventHandle/>}/>
               <Route path='handle-state' element={<HandleState/>}/>
               <Route path='rendering-commit' element={<RenderingCommit/>}/>
               <Route path='object-state-update' element={<ObjectStateUpdate/>}/>
               <Route path='array-state-update' element={<ArrayStateUpdate/>}/>
            </Route>
            <Route path="state-mgmt" element={<OutletInput/>}>
               <Route index element={<HandleUseState/>}/>
               <Route path='handle-input-useState' element={<HandleUseState/>}/>
               <Route path='state-architecture' element={<StateArchitecture/>}/>
               <Route path='state-hoisting' element={<StateHoisting/>}/>
               <Route path='state-reducer' element={<StateReducer/>}/>
               <Route path='context-prop-delivery' element={<ContextPropDelivery/>}/>
            </Route>
            <Route path="ref-effect" element={<OutletInput/>}>
               <Route index element={<UsingRef/>}/>
               <Route path="using-ref" element={<UsingRef/>}/>
               <Route path="dom-by-ref" element={<DOMByRef/>}/>
               <Route path="effect-basic" element={<EffectBasic/>}/>
            </Route>
            <Route path="/memo" element={<Memos/>}/>
         </Route>
      </Routes>
   </div>);
}

function Layout() {
   const [isShow, setIsShow] = useState([]);
   const [navUrl, setNavUrl] = useState('');
   const [currentUrl, setCurrentUrl] = useState('');
   const scrollRef = useRef(null);

   function handleClick(e, addArr, url) {
      e.preventDefault();
      let urlList = addArr.map(arr => arr.url);
      setNavUrl(url);
      if(isShow[0] === urlList[0]){
         setIsShow([]);
      } else {
         setIsShow(urlList);
      }
   }
   function handleNavMenu(url) {
      setNavUrl(url)
      setIsShow([]);
   }
   function styleSet(url) {
      if (navUrl === url) {
         return {backgroundColor: 'white', color: '#333'};
      } else {
         return {};
      }
   }
   function handleScroll() {
      return scrollRef.current.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
         // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
   }

   return (<>
      <nav>
         <ul>
            <li>
               <Link
                  to="/"
                  onClick={() => handleNavMenu('/')}
                  style={styleSet('/')}
               > HOME
               </Link>
            </li>
            <li style={{display: "flex"}} >
               {subs.map(sub => {
                  let navArr = links.filter(link => link.url.includes(sub.url));

                  return <>
                     <Link key={sub.url} to={sub.url}
                           onClick={(e) => handleClick(e, navArr, sub.url)}
                           style={styleSet(sub.url)}
                     > {sub.name} </Link>
                     <ul style={{display: 'flex', justifyContent: 'left'}} >
                        {navArr.map(link =>
                           <li key={link.url}
                             style={ !isShow.includes(link.url) ? {display:'none'}
                                : (link.url === currentUrl)
                                   ? {backgroundColor: '#333'} :{} } >
                              <Link to={link.url} onClick={() => setCurrentUrl(link.url)} >
                                {link.name} </Link>
                           </li>)}
                     </ul>
                  </>;
               })}
            </li>
            <li>
               <Link to="/memo" onClick={() => handleNavMenu('/memo')}
                  style={styleSet("/memo")} > Memos </Link>
            </li>
            <li>
               <button className='btn' ref={scrollRef}
               onClick={() => handleScroll}
                  // window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
               >
                  {/*window.scrollTo({ top: 0, behavior: "smooth" })}>*/}
                  END</button>
            </li>
         </ul>
      </nav>
      <Outlet/>
      <footer>copyright @right; ok</footer>
   </>);
}
