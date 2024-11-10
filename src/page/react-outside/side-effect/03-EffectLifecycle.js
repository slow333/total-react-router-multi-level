import {useEffect, useState} from "react";

export default function  EffectLifecycle() {
   return (<main>
      <h2>반응형 effects의 생명 주기</h2>
      <p>effects는 컴포넌트와 다른 생명주기를 가집니다. 컴포넌트는 마운트, 업데이트 또는 마운트 해제할 수 있습니다. effect는 동기화를 시작하고 나중에 동기화를 중지하는 두 가지 작업만 할 수 있습니다. 이 사이클은 시간이 지남에 따라 변하는 props와 state에 의존하는 effect의 경우 여러 번 발생할 수 있습니다. React는 effect의 의존성을 올바르게 지정했는지 확인하는 린터 규칙을 제공합니다. 이렇게 하면 effect가 최신 props와 state에 동기화됩니다.</p>
      <ul>
         <li>컴포넌트는 마운트, 업데이트, 마운트 해제할 수 있습니다. </li>
         <li>각 effect는 주변 컴포넌트와 별도의 생명주기를 가집니다.</li>
         <li>각 effect는 시작 및 중지할 수 있는 별도의 동기화 프로세스를 설명합니다.</li>
         <li>effect를 작성하고 읽을 때는 컴포넌트의 관점(마운트, 업데이트 또는 마운트 해제 방법)이 아닌 개별 effect의 관점(동기화 시작 및 중지 방법)에서 생각하세요.</li>
         <li>컴포넌트 본문 내부에 선언된 값은 “반응형”입니다.</li>
         <li>반응형 값은 시간이 지남에 따라 변경될 수 있으므로 effect를 다시 동기화해야 합니다.</li>
         <li>린터는 effect 내부에서 사용된 모든 반응형 값이 종속성으로 지정되었는지 확인합니다.</li>
         <li>린터에 의해 플래그가 지정된 모든 오류는 합법적인 오류입니다. 규칙을 위반하지 않도록 코드를 수정할 방법은 항상 있습니다.</li>
      </ul>
      <section>
         <h3>effect의 생명주기</h3>
         <p>이전에는 컴포넌트의 관점에서 생각했습니다. 컴포넌트의 관점에서 보면 effect를 ‘렌더링 후’ 또는 ‘마운트 해제 전’과 같은 특정 시점에 실행되는 ‘콜백’ 또는 ‘생명주기 이벤트’로 생각하기 쉬웠습니다. 이러한 사고방식은 매우 빠르게 복잡해지므로 피하는 것이 가장 좋습니다.</p>
         <p><b>대신 항상 한 번에 하나의 시작/중지 사이클에만 집중하세요. 컴포넌트를 마운트, 업데이트 또는 마운트 해제하는 것은 중요하지 않습니다. 동기화를 시작하는 방법과 중지하는 방법만 설명하면 됩니다. 이 작업을 잘 수행하면 필요한 횟수만큼 effect를 시작하고 중지할 수 있는 탄력성을 확보할 수 있습니다.</b></p>
         <ChatApp/>
         <hr/>
         <PoinMover/>
      </section>
      <section>
         <h3>select 해서 fetch data 가져오기</h3>
         <p>planetId가 변경되었을 때 placeId를 갱신하는 useEffect를 따로 정의해야 함</p>
         <Page/>
      </section>
   </main>)
}

function Page() {
   const [planetList, setPlanetList] = useState([])
   const [planetId, setPlanetId] = useState('');

   const [placeList, setPlaceList] = useState([]);
   const [placeId, setPlaceId] = useState('');

   useEffect(() => {
      let ignore = false;
      fetchData('/planets').then(result => {
         if (!ignore) {
            console.log('Fetched a list of planets.');
            setPlanetList(result);
            setPlanetId(result[0].id); // 첫 번째 행성을 선택합니다.
         }
      });
      return () => {
         ignore = true;
      }
   }, []);
   useEffect(() => {
      if (planetId === '') {
         // 첫 번째 상자에서는 아직 아무것도 선택되지 않았습니다.
         return;
      }

      let ignore = false;
      fetchData('/planets/' + planetId + '/places').then(result => {
         if (!ignore) {
            console.log('Fetched a list of places on "' + planetId + '".');
            setPlaceList(result);
            setPlaceId(result[0].id); // 첫 번째 장소를 선택합니다.
         }
      });
      return () => {
         ignore = true;
      }
   }, [planetId]);

   return (
      <>
         <label> Pick a planet:
            <select value={planetId} onChange={e => {  setPlanetId(e.target.value); }}>
               {planetList.map(planet =>
                  <option key={planet.id} value={planet.id}>{planet.name}</option> )}
            </select>
         </label>
         <label>
            Pick a place:
            <select value={placeId} onChange={e => { setPlaceId(e.target.value); }}>
               {placeList.map(place =>
                  <option key={place.id} value={place.id}>{place.name}</option> )}
            </select>
         </label>
         <hr />
         <p>You are going to: {placeId || '???'} on {planetId || '???'} </p>
      </>
   );
}

function fetchData(url) {
   if (url === '/planets') { return fetchPlanets(); }
   else if (url.startsWith('/planets/')) {
      const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/); // /planets/.../places
      console.log(match); // [/planets/earth/places, earth, ...]
      if (!match || !match[1] || !match[1].length) {
         throw Error('Expected URL like "/planets/earth/places". Received: "' + url + '".');
      }
      return fetchPlaces(match[1]);
   } else throw Error('Expected URL like "/planets" or "/planets/earth/places". Received: "' + url + '".');
}

async function fetchPlanets() {
   return new Promise(resolve => {
      setTimeout(() => {
         resolve([
            { id: 'earth', name: 'Earth' },
            { id: 'venus', name: 'Venus' },
            { id: 'mars', name: 'Mars' }
         ]);
      }, 1000);
   });
}

async function fetchPlaces(planetId) {
   if (typeof planetId !== 'string') {
      throw Error(
         'fetchPlaces(planetId) expects a string argument. ' +
         'Instead received: ' + planetId + '.'
      );
   }
   return new Promise(resolve => {
      setTimeout(() => {
         if (planetId === 'earth') {
            resolve([
               { id: 'laos',name: 'Laos'},
               { id: 'spain', name: 'Spain' },
               { id: 'vietnam', name: 'Vietnam' }
            ]);
         } else if (planetId === 'venus') {
            resolve([
               { id: 'aurelia', name: 'Aurelia' },
               { id: 'diana-chasma', name: 'Diana Chasma' },
               { id: 'kumsong-vallis', name: 'Kŭmsŏng Vallis' }
            ]);
         } else if (planetId === 'mars') {
            resolve([
               { id: 'aluminum-city', name: 'Aluminum City' },
               { id: 'new-new-york', name: 'New New York' },
               { id: 'vishniac', name: 'Vishniac' }
            ]);
         } else throw Error('Unknown planet ID: ' + planetId);
      }, 1000);
   });
}

function createConnection(serverUrl, roomId) {
      return {
         connect() {
            console.log(`${serverUrl} ✅ connected ${roomId}`)
         },
         disconnect() {
            console.log(`${serverUrl} ❌ OFF ${roomId}`)
         }
      }
}

function ChatRoom({ roomId, serverUrl }) {
   useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return () => connection.disconnect();
   }, [roomId, serverUrl]);
   return <h1>Welcome to the {roomId} room by {serverUrl}!</h1>;
}

function ChatApp() {
   const [serverUrl, setServerUrl ] = useState('https://localhost:1234')
   const [roomId, setRoomId] = useState('general');
   const [show, setShow] = useState(false);
   return (
      <>
         <label>
            Choose the chat room:{' '}
            <select
               value={roomId}
               onChange={e => setRoomId(e.target.value)}
            >
               <option value="general">general</option>
               <option value="travel">travel</option>
               <option value="music">music</option>
            </select>
         </label>
         <button onClick={() => setShow(!show)}>
            {show ? 'Close chat' : 'Open chat'}
         </button>
         {show && <hr />}
         <label>
            Server URL:
            <select
               value={serverUrl}
               onChange={e => setServerUrl(e.target.value)}
            >
               <option value="port3333">KOR</option>
               <option value="ip4.20">TUrki</option>
               <option value="ip4.20:20">US</option>
            </select>
         </label>
         {show && <ChatRoom roomId={roomId} serverUrl={serverUrl}/>}
      </>
   );
}

function PoinMover() {
   const [position, setPosition] = useState({ x: 0, y: 0 });
   const [canMove, setCanMove] = useState(false);

   useEffect(() => {
      function handleMove(e) {
         setPosition({x: e.clientX, y: e.clientY});
      }

      if (canMove) {
         window.addEventListener('pointermove', handleMove);
         return () => window.removeEventListener('pointermove', handleMove);
      }
   }, [canMove]);

   return (
      <>
         <label>
            <input type="checkbox"
                   checked={canMove}
                   onChange={e => setCanMove(e.target.checked)}
            />
            The dot is allowed to move
         </label>
         <hr />
         <div style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
         }} />
      </>
   );
}