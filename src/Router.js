import './css/menu.css';
import {Routes, Route, Outlet, Link} from "react-router-dom";
import {mainNav, links, subs} from "./navData";
import Home from "./page/common/Home";
import OutletInput from "./page/OutletInput";
import Memos from "./page/common/memos";
import JsxMarkup from "./page/react-inside/ui-render/01-JsxMarkup";
import PropsInjection from "./page/react-inside/ui-render/02-PropsInjection";
import React, { useState} from "react";
import HowRendering from "./page/react-inside/ui-render/03-HowRendering";
import UiTree from "./page/react-inside/ui-render/04-UiTree";
import EventHandle from "./page/react-inside/event-react/01-EventHandle";
import HandleState from "./page/react-inside/event-react/02-HandleState";
import RenderingCommit from './page/react-inside/event-react/03-RenderingCommit';
import ObjectStateUpdate from "./page/react-inside/event-react/04-ObjectStateUpdate";
import ArrayStateUpdate from "./page/react-inside/event-react/05-ArrayStateUpdate";
import HandleUseState from "./page/react-inside/state-mgmt/01-HandleUseState";
import StateArchitecture from "./page/react-inside/state-mgmt/02-StateArchitecture";
import StateHoisting from "./page/react-inside/state-mgmt/03-StateHoisting";
import StateReducer from "./page/react-inside/state-mgmt/04-StateReducer";
import ContextPropDelivery from "./page/react-inside/state-mgmt/05-ContextPropDelivery";
import UsingRef from "./page/react-outside/ref-effect/01-UsingRef";
import DOMByRef from "./page/react-outside/ref-effect/02-DOMByRef";
import EffectBasic from "./page/react-outside/ref-effect/03-EffectBasic";
import HtmlBasic from "./page/html-css/01-HtmlBasic";
import {CssTips} from "./page/html-css/02-CssTips";
import CssAttribute from "./page/html-css/03-CssAttribute";
import FormIntro from "./page/html-css/04-FormIntro";
import FormTypes from "./page/html-css/05-FormTypes";
import InputTypes from "./page/html-css/06-InputTypes";
import JsBasic from "./page/javascript/js/01-JsBasic";
import JsObjectBasic from "./page/javascript/object/01-JsObjectBasic";
import AsyncBasic from "./page/javascript/async/01-AsyncBasic";
import AsyncEventHandler from "./page/javascript/async/02-AsyncEventHandler";
import ContextUseReducer from "./page/react-inside/state-mgmt/06-ContextUseReducer";
import JsArrayIfLoop from "./page/javascript/js/02-JsArrayIf";
import FuncExample from "./page/javascript/js/03-Func";
import EventHandling from "./page/javascript/js/04-EventHandling";
import Blob from "./page/javascript/js/05-Blob";
import ObjectPrototype from "./page/javascript/object/02-ObjectPrototype";
import Inheritance from "./page/javascript/object/03-Inheritance";
import JsonExample from "./page/javascript/object/04-Json";
import PromisesEx from "./page/javascript/async/03-PromisesEx";
import PromisesMultiple from "./page/javascript/async/05-PromisesMultiple";
import CustomPromises from "./page/javascript/async/06-CustomPromises";
import PromisesApi from "./page/javascript/async/07-PromisesApi";
import JsWorker from "./page/javascript/async/08-JsWorker";

export default function Router() {
   return (<div>
      <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='react-inside'  element={<OutletInput/>}>
               <Route path="rendering" element={<OutletInput/>}>
                  <Route index element={<JsxMarkup/>}/>
                  <Route path='jsx-markup' element={<JsxMarkup/>}/>
                  <Route path='props-injection' element={<PropsInjection/>}/>
                  <Route path='how-rendering' element={<HowRendering/>}/>
                  <Route path='ui-tree' element={<UiTree/>}/>
               </Route>
               <Route path="event" element={<OutletInput/>}>
                  <Route index element={<EventHandle/>}/>
                  <Route path='event-handle' element={<EventHandle/>}/>
                  <Route path='handle-state' element={<HandleState/>}/>
                  <Route path='rendering-commit' element={<RenderingCommit/>}/>
                  <Route path='object-state-update' element={<ObjectStateUpdate/>}/>
                  <Route path='array-state-update' element={<ArrayStateUpdate/>}/>
               </Route>
               <Route path="state" element={<OutletInput/>}>
                  <Route index element={<HandleUseState/>}/>
                  <Route path='handle-useState' element={<HandleUseState/>}/>
                  <Route path='state-architecture' element={<StateArchitecture/>}/>
                  <Route path='state-hoisting' element={<StateHoisting/>}/>
                  <Route path='state-reducer' element={<StateReducer/>}/>
                  <Route path='context-prop-delivery' element={<ContextPropDelivery/>}/>
                  <Route path='context-useReducer' element={<ContextUseReducer/>}/>
               </Route>
            </Route>
            <Route path='react-outside' element={<OutletInput/>}>
               <Route path="ref-effect" element={<OutletInput/>}>
                  <Route index element={<UsingRef/>}/>
                  <Route path="using-ref" element={<UsingRef/>}/>
                  <Route path="dom-by-ref" element={<DOMByRef/>}/>
                  <Route path="effect-basic" element={<EffectBasic/>}/>
               </Route>
            </Route>
            <Route path='html-css' element={<OutletInput/>}>
               <Route index element={<HtmlBasic/>}/>
               <Route path="html-basic" element={<HtmlBasic/>}/>
               <Route path="css-tips" element={<CssTips/>}/>
               <Route path="css-attribute" element={<CssAttribute/>}/>
               <Route path="form-basic" element={<FormIntro/>}/>
               <Route path="form-types" element={<FormTypes/>}/>
               <Route path="input-types" element={<InputTypes/>}/>
            </Route>
            <Route path='javascript'  element={<OutletInput/>}>
               <Route path="js" element={<OutletInput/>}>
                  <Route index element={<JsBasic/>}/>
                  <Route path='js-basic' element={<JsBasic/>}/>
                  <Route path='js-array-if-loop' element={<JsArrayIfLoop/>}/>
                  <Route path='function' element={<FuncExample/>}/>
                  <Route path='event-handling' element={<EventHandling/>}/>
                  <Route path='blob' element={<Blob/>}/>
               </Route>
               <Route path="object" element={<OutletInput/>}>
                  <Route index element={<JsObjectBasic/>}/>
                  <Route path='object-basic' element={<JsObjectBasic/>}/>
                  <Route path='object-prototype' element={<ObjectPrototype/>}/>
                  <Route path='inheritance' element={<Inheritance/>}/>
                  <Route path='json' element={<JsonExample/>}/>
               </Route>
               <Route path="async" element={<OutletInput/>}>
                  <Route index element={<AsyncBasic/>}/>
                  <Route path='async-basic' element={<AsyncBasic/>}/>
                  <Route path='async-event-handler' element={<AsyncEventHandler/>}/>
                  <Route path='promises' element={<PromisesEx/>}/>
                  <Route path='promises-multiple' element={<PromisesMultiple/>}/>
                  <Route path='promises-custom' element={<CustomPromises/>}/>
                  <Route path='promises-api' element={<PromisesApi/>}/>
                  <Route path='js-worker' element={<JsWorker/>}/>
               </Route>
            </Route>
            <Route path='memo' element={<Memos/>} />
         </Route>
      </Routes>
   </div>);
}

export function Layout() {
   const [isShow, setIsShow] = useState([]);
   const [mainNavObj, setMainNavObj] = useState(mainNav);
   const [currentUrl, setCurrentUrl] = useState('');
   const [dropdownUrl, setDropdownUrl] = useState('')

   function handleLevelOne(e, sub) {
      e.preventDefault();
      setMainNavObj(sub);
      if(sub.url === currentUrl) {
        setIsShow([]);
        setCurrentUrl('');
      } else {
         setCurrentUrl(sub.url);
      }
   }

   function handleOnEnterDropdown(e, dropdownUrls, url) {
      e.preventDefault();
      let urlList = dropdownUrls.map(arr => arr.url);
      setIsShow(urlList);
      setCurrentUrl(url);
   }

   function handleOnLeaveDropdown(e) {
      e.preventDefault();
      setIsShow([]);
   }

   return (<div className='layout'>
      <nav>
         <ul>
            <li onClick={(e) => handleLevelOne(e, {url: '/home', name: 'home'})}>
               <Link key='homepage for nav' id='go-home'
                  to="/" style={currentUrl.includes('/home')
                    ? {backgroundColor: 'white', color: '#333'}
                  : {} }
               >
                  HOME </Link>
            </li>
            <li style={{display: "flex"}}>
               {mainNav.map(sub => {
                  return <>
                     <Link key={sub.url} to={sub.url}
                           onClick={(e) => handleLevelOne(e, sub)}
                           style={currentUrl.includes(sub.url)
                              ? {backgroundColor:'white', color:'black'} : {} }
                     > {sub.name} </Link> {/*level 1*/}
                     <ul style={{display: 'flex', justifyContent: 'left'}}>
                        {subs.filter(s => s.url.includes(mainNavObj.url))
                           .map(subLink => {
                           let dropdowns = links.filter(nav => nav.url.includes(subLink.url));

                           return (<li
                              key={subLink.name}
                              style={(subLink.url === currentUrl) ? {backgroundColor: '#333'} : {}}
                              onMouseEnter={(e) => handleOnEnterDropdown(e, dropdowns, subLink.url)}
                              onMouseLeave={handleOnLeaveDropdown}
                           >
                              <Link key={subLink.url} to={subLink.url}
                                    style={(currentUrl.includes(subLink.url))
                                       ? {backgroundColor: '#333'} : {} }
                              >  {subLink.name} </Link> {/*level 2*/}
                              <ul style={{display: 'flex', justifyContent: 'left'}}>
                                 {dropdowns.map(dropdown => {
                                    return(<li
                                       key={dropdown.url}
                                       style={!isShow.includes(dropdown.url)
                                          ? {display:'none'}
                                          : (dropdown.url === currentUrl)
                                             ? {backgroundColor:'orange', color:'white'} : {}  }
                                       onMouseEnter={() => setCurrentUrl(dropdown.url)}
                                       onClick={() => setDropdownUrl(dropdown.url)}
                                    >
                                          <Link to={dropdown.url}
                                                style={dropdown.url === dropdownUrl
                                          ? {backgroundColor:'white' , color:'black'} : {}}
                                          > {dropdown.name} </Link>{/*level 3*/}
                                       </li>);
                                 })}
                              </ul>
                           </li>)
                        })}
                     </ul>
                  </>;
               })}
            </li>
            <li onClick={(e) => handleLevelOne(e,{url: '/memo', name: 'memo'})}>
               <Link to="/memo"
                     style={currentUrl.includes('/memo')
                        ? {backgroundColor: 'white', color: '#333'} : {} }> Memos </Link>
            </li>
            <li>
               <a id='go-js-home'
                  href="/pages/index.html"
               >JS</a>
            </li>
         </ul>
      </nav>
      <Outlet/>
   </div>);
}
