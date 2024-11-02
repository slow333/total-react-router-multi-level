import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./page/common/Home";
import OutletInput from "./page/OutletInput";
import Memos from "./page/common/memos";
import JsxMarkup from "./page/ui-render/JsxMarkup";
import PropsInjection from "./page/ui-render/PropsInjection";
import React, { useState} from "react";
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
import {mainNav, links, subs} from "./data/navData";

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
            <Route path='memo' element={<Memos/>} />
         </Route>
      </Routes>
   </div>);
}

export function Layout() {
   const [isShow, setIsShow] = useState([]);
   const [mainNavObj, setMainNavObj] = useState(mainNav);
   const [currentUrl, setCurrentUrl] = useState('');

   function styleSet(url) {
      return (currentUrl.includes(url))
         ? {backgroundColor: 'white', color: '#333'} : {};
   }

   function handleDropdown(e, dropdownUrls, url) {
      e.preventDefault();
      let urlList = dropdownUrls.map(arr => arr.url);
      setIsShow(urlList);
      setCurrentUrl(url);
   }
   function handleLevelOne(e, sub) {
      e.preventDefault();
      setMainNavObj(sub);
      console.log(sub.url, currentUrl);
      if(sub.url === currentUrl) {
        setIsShow([]);
         setCurrentUrl('');
      } else {
         setCurrentUrl(sub.url);
      }
   }

   return (<div className='layout'>
      <nav>
         <ul>
            <li onClick={(e) => handleLevelOne(e, {url: '/home', name: 'home'})}>
               <Link key='homepage for nav'
                  to="/" style={styleSet('/home')}
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
                           .map(link => {
                           let dropdowns = links.filter(nav => nav.url.includes(link.url));

                           return (<li key={link.name}
                               style={(link.url === currentUrl)
                                     ? {backgroundColor: '#333'} : {}}
                           >
                              <Link key={link.url} to={link.url}
                                    style={(currentUrl.includes(link.url))
                                       ? {backgroundColor: '#333'} : {} }
                                    onClick={(e) => handleDropdown(e, dropdowns, link.url)}
                              >  {link.name} </Link> {/*level 2*/}
                              <ul style={{display: 'flex', justifyContent: 'left'}}>
                                 {dropdowns.map(dropdown => {
                                    return(<li key={dropdown.url}
                                          style={!isShow.includes(dropdown.url)
                                             ? {display:'none'}
                                             : (dropdown.url === currentUrl) ? {backgroundColor:'black'} : {}  } >
                                          <Link to={dropdown.url}
                                                onClick={() => setCurrentUrl(dropdown.url)}
                                          > {dropdown.name} </Link>
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
                     style={styleSet("/memo")}> Memos </Link>
            </li>
            <li>
               <button className='btn'>END</button>
            </li>
         </ul>
      </nav>
      <Outlet/>
   </div>);
}
