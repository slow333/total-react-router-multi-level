import React, { useState} from "react";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./page/common/Home";
import OutletInput from "./page/OutletInput";
import Memos from "./page/common/memos";
import JsxMarkup from "./page/react-inside/01-ui-render/01-JsxMarkup";
import PropsInjection from "./page/react-inside/01-ui-render/02-PropsInjection";
import RenderMethode from "./page/react-inside/01-ui-render/03-ConditionalRender";
import EventHandle from "./page/react-inside/02-event-react/01-EventHandle";
import HandleState from "./page/react-inside/02-event-react/02-HandleState";
import RenderingCommit from './page/react-inside/02-event-react/03-RenderingCommit';
import ObjectStateUpdate from "./page/react-inside/02-event-react/04-ObjectStateUpdate";
import ArrayStateUpdate from "./page/react-inside/02-event-react/05-ArrayStateUpdate";
import HandleUseState from "./page/react-inside/03-state-mgmt/01-HandleUseState";
import StateArchitecture from "./page/react-inside/03-state-mgmt/02-StateArchitecture";
import StateHoisting from "./page/react-inside/03-state-mgmt/03-StateHoisting";
import StateReducer from "./page/react-inside/03-state-mgmt/04-StateReducer";
import ContextPropDelivery from "./page/react-inside/03-state-mgmt/05-ContextPropDelivery";
import ContextUseReducer from "./page/react-inside/03-state-mgmt/06-ContextUseReducer";
import UsingRef from "./page/react-outside/ref-effect/01-UsingRef";
import DOMByRef from "./page/react-outside/ref-effect/02-DOMByRef";
import EffectBasic from "./page/react-outside/side-effect/01-EffectBasic";
import NoNeedEffect from "./page/react-outside/side-effect/02-NoNeedEffect";
import EffectLifecycle from "./page/react-outside/side-effect/03-EffectLifecycle";
import EffectEvent from "./page/react-outside/side-effect/04-SeperateEventFromEffect";
import CustomHook from "./page/react-outside/side-effect/05-customHook";
import HtmlBasic from "./page/html-css/01-HtmlBasic";
import CssTips from "./page/html-css/02-CssTips";
import CssAttribute from "./page/html-css/03-CssAttribute";
import FormIntro from "./page/html-css/04-FormIntro";
import FormTypes from "./page/html-css/05-FormTypes";
import InputTypes from "./page/html-css/06-InputTypes";
import JsBasic from "./page/javascript/js/01-JsBasic";
import JsArrayIfLoop from "./page/javascript/js/02-JsArrayIf";
import FuncExample from "./page/javascript/js/03-Func";
import EventHandling from "./page/javascript/js/04-EventHandling";
import Blob from "./page/javascript/js/05-Blob";
import JsObjectBasic from "./page/javascript/object/01-JsObjectBasic";
import ObjectPrototype from "./page/javascript/object/02-ObjectPrototype";
import Inheritance from "./page/javascript/object/03-Inheritance";
import JsonExample from "./page/javascript/object/04-Json";
import AsyncBasic from "./page/javascript/async/01-AsyncBasic";
import AsyncEventHandler from "./page/javascript/async/02-AsyncEventHandler";
import PromisesEx from "./page/javascript/async/03-PromisesEx";
import PromisesMultiple from "./page/javascript/async/05-PromisesMultiple";
import CustomPromises from "./page/javascript/async/06-CustomPromises";
import PromisesApi from "./page/javascript/async/07-PromisesApi";
import JsWorker from "./page/javascript/async/08-JsWorker";
import Clock from "./util/Clock";
import {mainNav, links, subs} from "./navData";
import NavStyle from './css/Nav.module.css';

export default function Router() {
   return (<div>
      <Routes>
         <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='react-inside' element={<OutletInput/>}>
               <Route path="rendering" element={<OutletInput/>}>
                  <Route index element={<JsxMarkup/>}/>
                  <Route path='jsx-markup' element={<JsxMarkup/>}/>
                  <Route path='props-injection' element={<PropsInjection/>}/>
                  <Route path='how-rendering' element={<RenderMethode/>}/>
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
               <Route path="ref" element={<OutletInput/>}>
                  <Route index element={<UsingRef/>}/>
                  <Route path="using-ref" element={<UsingRef/>}/>
                  <Route path="dom-by-ref" element={<DOMByRef/>}/>
               </Route>
               <Route path="effect" element={<OutletInput/>}>
                  <Route index element={<EffectBasic/>}/>
                  <Route path="effect-basic" element={<EffectBasic/>}/>
                  <Route path="no-need-effect" element={<NoNeedEffect/>}/>
                  <Route path="effect-lifecycle" element={<EffectLifecycle/>}/>
                  <Route path="event-from-effect" element={<EffectEvent/>}/>
                  <Route path="custom-hook" element={<CustomHook/>}/>
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
            <Route path='javascript' element={<OutletInput/>}>
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
            <Route path='memo' element={<Memos/>}/>
         </Route>
      </Routes>
   </div>);
}

const MENU_LIST = Object.values(links).map(m => m.url);
const SUBS_LIST = Object.values(subs).map(m => m.url);
const GO_LIST = [...SUBS_LIST, ...MENU_LIST];

export function Layout() {
   const [urls, setUrls] = useState({ main:'', sub:'', dropdown:'', current:'' })

   const [movePage, setMovePage] = useState({prev:'', next:''});

   let currentIndex = GO_LIST.findIndex(url => url === urls.current);

   function goPrev() {
      setMovePage({...movePage, prev: GO_LIST[currentIndex - 1]})
      setUrls({...urls, current : GO_LIST[currentIndex - 1]});
   }
   function goNext() {
      setMovePage({...movePage, next: GO_LIST[currentIndex + 1]})
      setUrls({...urls, current : GO_LIST[currentIndex + 1]});
   }

   function handleClick(goto) {
      setUrls({...urls, main: goto})
   }

   let onSelect = { backgroundColor: 'white', color: 'black', width: 140};
   let homeMemo = { backgroundColor: 'royalblue', color: 'white'};

   let subMenu = (list, url) => list.filter(s => s.url.includes(url));

   return (<div className='layout'>
      <nav className={NavStyle.navStyle}>
         <ul>
            <MainLi url='/' onClick={() => handleClick('/home')}  onHover={() => handleClick('')}
                    linkStyle={urls.main === '/home' ? onSelect : {}} >
               <span style={{display: 'inline-block', width: '46px'}}>
                  <span className={NavStyle.loader}>↺</span> H
               </span>
            </MainLi>
            <li className={NavStyle.ulStyle} >
               {mainNav.map(sub =>
                  <MainMenuItem sub={sub} urls={urls} setUrls={setUrls} onSelect={onSelect} />
               )}
               { urls.main &&
                  <ul className={NavStyle.subMenuStyle}>
                     {subMenu(subs, urls.main).map(sub =>
                        <SubMenuItem sub={sub} onSelect={onSelect}
                                     urls={urls} setUrls={setUrls}>
                           {urls.sub === sub.url &&
                              <ul className={NavStyle.dropdownStyle}
                                  onMouseLeave={() => setUrls({...urls, sub: ''})}>
                              {subMenu(links, urls.sub).map(dropdown =>
                                 <DropdownItem dropdown={dropdown} onSelect={onSelect}
                                               urls={urls} setUrls={setUrls}/>)}
                              </ul>}
                        </SubMenuItem>
                     )}
                  </ul>
               }
            </li>
            <li>
               <BtnMove handleClick={goPrev} movePage={movePage.prev}> ← </BtnMove>
               <BtnMove handleClick={goNext} movePage={movePage.next}> → </BtnMove>
            </li>
            <MainLi url='/memo' onClick={() => handleClick('/memo')} onHover={() => handleClick('')}
                    linkStyle={urls.main === '/memo' ? onSelect : homeMemo} >
               <span className={NavStyle.neon}>MEMOs</span>
            </MainLi>
            <li><a id='go-js-home' href="/pages/index.html" >JS</a></li>
            <li style={{color: 'yellow',width:80, padding: "8px 20px", marginRight:20,}} >
               <Clock/>
            </li>
         </ul>
      </nav>
      <Outlet/>
   </div>);
}

function MainLi({children, url, onClick, onHover, linkStyle}) {
   return <li
      onClick={onClick}
      onMouseEnter={onHover}>
      <Link to={url} style={linkStyle}>
         {children}
      </Link>
   </li>
}

function MainMenuItem({sub, urls, setUrls, onSelect}) {
   return <Link key={sub.url} to={sub.url}
                onMouseEnter={() => {
                   setUrls({...urls, main: sub.url, sub: ''})
                }}
                style={urls.main === sub.url ? {...onSelect, width: 150} : {width: 150}}
   > {sub.name} </Link>
}

function SubMenuItem({children, sub, urls, setUrls, onSelect}) {
   return <>
      <li key={sub.url} style={{position: 'relative', width: 140}}
          onMouseEnter={() => {
             setUrls({...urls, sub:sub.url, current: sub.url})
          }}
          onClick={() => {
             setUrls({...urls, sub:'', current: sub.url})
          }}
      >
         <Link to={sub.url}
               style={sub.url === urls.sub ? onSelect : {width: 140}}
         > {sub.name}
         </Link>
         {children}
      </li>
      </>
}

function DropdownItem ({dropdown, urls, setUrls, onSelect}) {
   return <li
      key={dropdown.url}
      style={{fontSize: '1rem', padding: 0}}
      onClick={() => {
         setUrls({...urls, sub:'', dropdown: dropdown.url, current: dropdown.url})
      }}
   >
      <Link to={dropdown.url}
            style={dropdown.url === urls.dropdown
               ? { ...onSelect, fontSize: '0.9rem', width: 140 }
               : { fontSize: '0.9rem', width: 140 }}
      > {dropdown.name}</Link>
   </li>
}

function BtnMove({children, handleClick, movePage}) {
   return (
      <button
         className={NavStyle.btnMove}
         onClick={handleClick}>
         <Link
            to={movePage}
            className={NavStyle.link}>
            {children}
         </Link>
      </button>)
}