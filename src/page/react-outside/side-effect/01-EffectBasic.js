import {useEffect, useState} from "react";

export default function EffectBasic() {
   return (<main>
      <h2>Effect로 동기화하기</h2>
      <p>Effect를 사용하면 렌더링 후 특정 코드를 실행하여 React 외부의 시스템과 컴포넌트를 동기화할 수 있습니다.</p>
      <section>
         <h3>요약</h3>
         <ul>
            <li>이벤트와 달리 Effect는 특정 상호작용이 아닌 <b>렌더링 자체에 의해 발생</b>합니다.</li>
            <li>Effect를 사용하면 컴포넌트를 외부 시스템(타사 API, 네트워크 등)과 동기화할 수 있습니다.</li>
            <li>기본적으로 Effect는 모든 렌더링(초기 렌더링 포함) 후에 실행됩니다.</li>
            <li>React는 모든 의존성이 마지막 렌더링과 동일한 값을 가지면 Effect를 건너뜁니다.(의존성을 “선택”할 수 없습니다. 의존성은 Effect 내부의 코드에 의해 결정됩니다.)</li>
            <li>빈 의존성 배열([])은 컴포넌트 “마운팅”(화면에 추가됨)을 의미</li>
            <li>Strict Mode에서 React는 컴포넌트를 두 번 마운트합니다(개발 환경에서만!) 이는 Effect의 스트레스 테스트를 위한 것입니다.</li>
            <li>Effect가 다시 마운트로 인해 중단된 경우 클린업 함수를 구현해야 합니다.</li>
            <li>React는 Effect가 다시 실행되기 전에 정리 함수(return에 정의한 함수)를 호출하며, 마운트 해제 중에도 호출합니다.</li>
            <li><b>각각의 렌더링은 각각의 고유한 Effect를 갖습니다. </b> fetch를 적용하면 여러 fetching이 경쟁 상태가 되어 어떤게 먼저 올지 몰라서 이런 경우에는 return 해서 이전 rendering에 적용된 fetching을 중지하는 클린업을 넣어 줘야한다. - <em>맨 아래 예제 참조</em> </li>
         </ul>
      </section>
      <section>
         <h3>Effect와 event</h3>
         <p>Effect는 렌더링 자체에 의해 발생하는 부수 효과를 특정하는 것으로, 특정 이벤트가 아닌 렌더링에 의해 직접 발생합니다. 채팅에서 메시지를 보내는 것은 이벤트입니다. 왜냐하면 이것은 사용자가 특정 버튼을 클릭함에 따라 직접적으로 발생합니다.
            그러나 서버 연결 설정은 Effect입니다. 왜냐하면 이것은 컴포넌트의 표시를 주관하는 어떤 상호 작용과도 상관없이 발생해야 합니다. Effect는 커밋이 끝난 후에 화면 업데이트가 이루어지고 나서 실행됩니다.
            이 시점이 React 컴포넌트를 외부 시스템(네트워크 또는 써드파티 라이브러리와 같은)과 동기화하기 좋은 타이밍입니다.</p>
         <ol>
            <li>Effect 선언 : 컴포넌트가 렌더링 될 때마다 React는 화면을 업데이트한 다음 useEffect 내부의 코드를 실행합니다. 다시 말해, useEffect는 화면에 렌더링이 반영될 때까지 코드 실행을 “지연”시킵니다.
               <code>{`import {useEffec} from 'react'`}</code>
            DOM에 대해 제어하기 위해서는 수동으로 useRef를 활용해서 myRef.current.play(), pause()를 설정하는 것임
<code>{`function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  if (isPlaying) { ref.current.play();  }  // 렌더링 중에 이를 호출하는 것이 허용되지 않습니다.
  else { ref.current.pause(); }// 역시 이렇게 호출하면 바로 위의 호출과 충돌이 발생합니다.
  
  return <video ref={ref} src={src} loop playsInline />;
}
   
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '일시정지' : '재생'} </button>
      <VideoPlayer isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
    </>
  );
}`}</code>
               그러나 &lt;video /> 태그에는 isPlaying prop이 없습니다. 이를 제어하는 유일한 방법은 DOM 요소에서 수동으로 play() 및 pause() 메서드를 호출하는 것입니다. isPlaying prop의 값(현재 비디오가 재생 중인지 여부)을 play() 및 pause()와 같은 호출과 동기화해야 합니다. 먼저 &lt;video /> DOM 노드의 ref를 가져와야 합니다. play() 또는 pause()를 렌더링 중에 호출하려고 시도할 수 있겠지만, 이는 올바른 접근이 아닙니다.
<code>{`useEffect(() => {
   if (isPlaying) { ref.current.play(); } 
   else { ref.current.pause(); }
});`}</code>
            <p>처음으로 VideoPlayer가 호출될 때 해당 DOM이 아직 존재하지 않습니다! React는 컴포넌트가 JSX를 반환할 때까지 어떤 DOM을 생성할지 모르기 때문에 play() 또는 pause()를 호출할 DOM 노드가 아직 없습니다.
               <br/>DOM 업데이트를 Effect로 감싸면 React가 화면을 업데이트한 다음에 Effect가 실행됩니다.</p></li>
            <li>Effect에 의존성 지정: useEffect(fn, [dependencies]);
<code>{`useEffect(() => {
  // 모든 렌더링 후에 실행됩니다
});

useEffect(() => {
  // 마운트될 때만 실행됩니다 (컴포넌트가 나타날 때)
}, []);

useEffect(() => {
 // 마운트될 때 실행되며, *또한* 렌더링 이후에 a 또는 b 중 하나라도 변경된 경우에도 실행됩니다
}, [a, b]);`}</code>
               React는 지정한 모든 종속성이 이전 렌더링의 그것과 정확히 동일한 값을 가진 경우에만 Effect를 다시 실행하지 않습니다. </li>
            <li>필요하면 클린업을 추가
<code>{`function ChatRoom() {
  useEffect(() => {
  // 🚩 This won't fix the bug!!! 개발자 모드(2번실행) 안하게 함
    if (!connectionRef.current) {
   const connection = createConnection();
   connection.connect();
   return () => {
      connection.disconnect();
   };
  }, []);
   return <h1>채팅에 오신걸 환영합니다!</h1>;
}`}</code>
            </li>
         </ol>
      </section>
      <section>
         <h4>클린업 적용, fetching</h4>
         <Page/>
         <hr/>
         <p>오래된 API 호출의 결과를 무시하는 것 외에도 더 이상 필요하지 않은 요청을 취소하기 위해 AbortController를 사용할 수도 있습니다. 그러나 이것만으로는 경쟁 조건에 대한 충분한 보호가 이뤄지지 않습니다. 피치 못할 상황에서는 추가적인 비동기 작업이 후행할 수 있으므로 ignore와 같은 명시적 플래그를 사용하는 것이 이러한 종류의 문제를 가장 안전하게 해결하는 가장 신뢰할 수 있는 방법입니다.</p>
      </section>
   </main>)
}

function Page() {
   const [person, setPerson] = useState('Alice');
   const [bio, setBio] = useState(null);

   useEffect(() => {
      let ignore = false
      setBio(null);
      fetchBio(person).then(result => {
         if(!ignore){
            setBio(result);
         }
      });
      return () => {
         ignore = true;
      }
   }, [person]);

   return (
      <>
         <select value={person} onChange={e => {
            setPerson(e.target.value);
         }}>
            <option value="Alice">Alice</option>
            <option value="Bob">Bob</option>
            <option value="Taylor">Taylor</option>
         </select>
         <hr />
         <p><i>{bio ?? 'Loading...'}</i></p>
      </>
   );
}
async function fetchBio(person) {
   const delay = person === 'Bob' ? 2000 : 200;
   return new Promise(resolve => {
      setTimeout(() => {
         resolve('이것은 ' + person + '의 일대기입니다.');
      }, delay);
   })
}