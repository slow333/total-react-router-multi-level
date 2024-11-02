import {forwardRef, useRef, useState} from "react";
import {flushSync} from "react-dom";

export default function DOMByRef() {
   return (<main>
      <h2>Ref로 DOM 조작하기</h2>
      <p><b>React에서 렌더링을 마치고 난 후에 화면 갱신없이 화면을 조작하기 위한 하나의 변수로 저장해서 사용.</b></p>
      <p>React는 렌더링 결과물에 맞춰 렌더링 결과물에 맞춰 DOM 변경을 자동으로 처리하기 때문에 컴포넌트에서 자주 DOM을 변경할 필요가 없다. 하지만 가끔 특정 노드에 포커스를 옮기거나, 스크롤 위치를 옮기거나, 위치와 크기를 측정하기 위해서 React가 관리하는 DOM 요소에 접근해야 할 때가 있습니다. React는 이런 작업을 수행하는 내장 방법을 제공하지 않기 때문에 DOM 노드에 접근하기 위한 ref가 필요할 것입니다.</p>
      <h3>요약</h3>
      <ul>
         <li>Ref는 범용적인 개념이지만 많은 경우 DOM요소를 참조하기 위해사용</li>
         <li>{`<div ref={myRef}>`}로 React가 myRef.current에 DOM Node를 대입하도록 지시할 수 있습니다.</li>
         <li>많은 경우 ref는 포커싱, 스크롤링, DOM요소 크기 혹은 위치 측정 등 비 파괴적인 행동을 위해 사용됩니다.</li>
         <li>컴포넌트는 기본적으로 DOM노드를 노출하지 않습니다. forwardRef와 두 번째 ref 인자를 특정 노드에 전달하는 것으로 선택적으로 누출할 수 있습니다.</li>
         <li>React가 관리하는 DOM 노드를 직접 바꾸려 하지 마세요</li>
         <li>React가 관리하는 DOM 노드를 수정하려 한다면, React가 변경할 이유가 없는 부분만 수정하세요.</li>
      </ul>
      <section>
         <h3>ref로 노드 가져오기</h3>
         <code>const myRef = useRef(null)</code>
         <code>{`<div ref={myRef}`} // 조작하기 원하는 곳에 넣음</code>
         <code>사용사례{`
   function Form() {
      const inputRef = useRef(null);
      function handleClick() { inputRef.current.focus(); }
      return (
         <>
            <input ref={inputRef}/>
            <button onClick={handleClick}> Focus the input </button>
         </>
      );
   }`}</code>
         <Form/>
      </section>
      <section>
         <h3>ref로 DOM을 조작하는 모범 사례</h3>
         <p>Ref는 탈출구. "React에서 벗아나야 할 때"만 사용해야합니다. 포커스 혹은 스크롤 위치를 관리하거나, React가 노출하지 않는 브라우저 API를 호출하는 등의 작업이 포함됩니다.</p>
         <p>포커스 및 스크롤 관리 같은 비 파괴적인 행동을 고수한다면 어떤 문제도 마주치지 않을 것입니다. 하지만 DOM을 직접 수정하는 시도를 한다면 React가 만들어 내는 변경 사항과 충돌을 위험을 감수해야 합니다.</p>
         <p>이 문제를 이해하기 위해 환영문구와 두 버튼을 포함하는 예. 첫 버튼은 일반적인 React 조건부 렌더링과 state를 사용하여 노드 존재 여부를 토클합니다. 두 번째 버튼은 DOM API의 remove()를 사용하여 React의 제어 빡에서 노드를 강제적으로 삭제합니다.</p>
         <Counter/>
         <p>DOM 요소를 직접 삭제한 뒤 setState를 사용하여 다시 DOM 노드를 노출하는 것은 충돌을 발생시킵니다. DOM을 직접 변경했을 때 React는 DOM 노드를 올바르게 계속 관리할 방법을 모르기 때문입니다.</p>
         <p>React가 관리하는 DOM 노드를 직접 바꾸려 하지 마세요. React가 관리하는 DOM 요소에 대한 수정, 자식 추가 혹은 자식 삭제는 비일관적인 시각적 결과 혹은 위 예시처럼 충돌로 이어집니다.</p>
         <p>하지만 항상 이것을 할 수 없다는 의미는 아닙니다. 주의 깊게 사용해야 합니다. 안전하게 React가 업데이트할 이유가 없는 DOM 노드 일부를 수정할 수 있습니다. 예를 들어 몇몇 &lt;div&gt;가 항상 빈 채로 JSX에 있다면, React는 해당 노드의 자식 요소를 건드릴 이유가 없습니다. 따라서 빈 노드에서 엘리먼트를 추가하거나 삭제하는 것은 안전합니다.</p>
      </section>
      <section>
         <h3>예제</h3>
         <h4>비디오 제생과 멈춤</h4>
         <VideoPlayer/>
         <h4>이미지에 강조 표시하기</h4>
         <CatFriends/>
         <h4>별개의 컴포넌트에서 검색 필드에 포커스 이동하기</h4>
         <Page/>
      </section>
   </main>)
}

function Page() {
   const inputRef = useRef(null);
   return (
      <>
         <SearchButton onClick={() => {
            inputRef.current.focus();
         }} />
         <SearchInput ref={inputRef} />
      </>
   );
}
const SearchInput = forwardRef(
   function (props, ref) {
      return (
         <input
            ref={ref}
            placeholder="Looking for something?"
         />
      );
   }
);
function SearchButton({ onClick }) {
   return (
      <button onClick={onClick}>
         Search
      </button>
   );
}

function CatFriends() {
   const selectedRef = useRef(null);
   const [index, setIndex] = useState(0);

   const active = {backgroundColor: "rgba(0, 100, 150, 0.4)"}
   return (
      <>
         <button onClick={() => {
               flushSync(() => {
                  if (index < catList.length - 1) {
                     setIndex(index + 1);
                  } else {
                     setIndex(0);
                  }
               });
               selectedRef.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                  inline: 'center'
               });
            }}>
               Next
            </button>
         <div>
            <ul style={{display: "inline", whiteSpace:"nowrap"}}>
               {catList.map((cat, i) => (
                  <li key={cat.id} style={{display: "inline"}}
                      ref={index === i ? selectedRef : null }
                  >
                     <img
                        style={ index === i ? {backgroundColor: "rgba(0, 100, 150, 0.4)"} : {} }
                        src={cat.imageUrl}
                        alt={'Cat #' + cat.id}
                     />
                  </li>
               ))}
            </ul>
         </div>
      </>
   );
}

const catList = [];
for (let i = 0; i < 4; i++) {
   catList.push({
      id: i,
      imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i
   });
}

function Counter() {
   const [show, setShow] = useState(true);
   const ref = useRef(null);

   return (
      <div>
         <button
            onClick={() => {
               setShow(!show);
            }}>
            Toggle with setState
         </button>
         <button
            onClick={() => {
               ref.current.remove();
            }}>
            Remove from the DOM
         </button>
         {show && <p ref={ref}>Hello world</p>}
      </div>
   );
}

function Form() {
   const inputRef = useRef(null);

   function handleClick() {
      inputRef.current.focus();
      console.log(inputRef.current);
   }

   return (
      <>
         <input ref={inputRef}/> {/* input DOM 노드를 inputRef로 넣어줘요.*/}
         <button onClick={handleClick}>
            Focus the input
         </button>
      </>
   );
}

function VideoPlayer() {
   const [isPlaying, setIsPlaying] = useState(false);
   const control = useRef(null);

   function handleClick() {
      const nextIsPlaying = !isPlaying;
      setIsPlaying(nextIsPlaying);
      if(isPlaying) {
         control.current.pause();
      } else {
         control.current.play();
      }
   }

   return (
      <>
         <button onClick={handleClick}>
            {isPlaying ? 'Pause' : 'Play'}
         </button>
         <video width="250" ref={control}>
            <source
               src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
               type="video/mp4"
            />
         </video>
      </>
   )
}