export default function DOMByRef() {
   return (<main>
      <h2>Ref로 DOM 조작하기</h2>
      <p>React는 렌더링 결과물에 맞춰 렌더링 결과물에 맞춰 DOM 변경을 자동으로 처리하기 때문에 컴포넌트에서 자주 DOM을 변경할 필요가 없다. 하지만 가끔 특정 노드에 포커스를 옮기거나, 스크롤 위치를 옮기거나, 위치와 크기를 측정하기 위해서 React가 관리하는 DOM 요소에 접근해야 할 때가 있습니다. React는 이런 작업을 수행하는 내장 방법을 제공하지 않기 때문에 DOM 노드에 접근하기 위한 ref가 필요할 것입니다.</p>
      <mection>
      </mection>
   </main>)
}

function PlaySnd() {
   i++;
   if (i === sounds.length) return;
   sounds[i].addEventListener('ended', PlaySnd);
   sounds[i].play();
}

let sounds = [new Audio("/music/01.ChristinaPerri-AThousandYears.mp3"),
   new Audio("/music/02.ChristinaPerri-AThousandYears.mp3"),
   new Audio('/music/03.ChristinaPerri-AThousandYears.mp3')
];
let i = -1;
