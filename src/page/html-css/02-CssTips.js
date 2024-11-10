export function CssTips() {
   return(<main>
      <h1 className="h1">CSS 잘 잊어버리는 것</h1>
      <section>
         <h3>footer 하단에 고정하기 NOT fixed</h3>
         <ul>
            <li>우선 body의 height를 100%</li>
            <li>article의 min-height: calc(93.7vh - 4rem); 고정된 상단 navbar의 높이를 고려해서 vh를 적용하고 하단 footer의 높이를 뺌</li>
            <li>footer의 position: absolute 를 하고 height를 지정</li>
         </ul>
      </section>
      <section>
         <h3>CSS Box shadow</h3>
         <ul>
            <li>/* 첫번째 적용 : 우측이동, 아래이동, 3번째; 흐린정도 깊이, 4번째; 전체 깊이 그리고 색*/</li>
            <li>/* 2개를 적용하면 두개가 다 적용되어 그라데이션 효과가 있음 */</li>
            <li>box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 6px 0 0 rgba(0, 0, 0, 0.1);</li>
         </ul>
      </section>
      <section>
         <h3>transform</h3>
         <code>{`translate
  .box:hover{ 
    transform: translate(10px, 50px) 
  } // 해당 위치로 이동, translateX, Y도 있음, x,y좌표를 변수로 받아서 처리
  ## react
  const [position, setPosition] = useState({x:0,y:0})
  function onMove() {
   setPosition({x:0,y:0})
  }
  useEffect(() => {
     window.addEventListener('mousemove', onMove);
     return window.removeEventListener('mousemove', onMove);
  })
  <div styel={{ 
     position: 'absolute', top: -20, left: -20, width: '10px', height:'10px', 
     transform: \`translate(\${position.x}px, \${position.y}px)\` 
  }}"></div>
  transform: scale(2, 1.5) // 기존 크기의 2배(상하) 1.5배(최우) 늘림
  transform: rotate(30deg) // 30도 회선
  transform: skew(30deg, 20deg) // 뒤틀음`}</code>
      </section>
      <section>
         <h3>font size 폭이나 높이에 따라 자동 조절하기</h3>

         <p> vh 나 vw를 사용하면 화면이나 자기가 속한 dom의 크기에 따라 자동 조절됨 </p>
         <code>{`nav ul {
   display: flex;
   justify-items: center;

   justify-content: space-between;
   gap: 2rem;
   list-style-type: none;
   font-size: 1.6vw;
   font-weight: 600;
   padding: 1vh 20px 0 20px;
   text-align: center;
}`} </code>
      </section>
      <section>
         <h3>js에서 css를 다루기 위한 방법</h3>

         <h4> element에 style 적용하기 </h4>
         <p>style.css속성명 -기존에 정의된 style에 새로운 속성을 추가</p>
         <p>style.cssText - 기존에 정의된 style을 지우고, cssText로 덮어 씀</p>
         <code>{`#javascript file
   const el = document.getElementById("greeting");

   el.style.backgroundColor = "red";
   el.style.color = "red";
   el.style.fontWeight = "bold";
   el.style.backgroundImage = "url(/img/waring.png)";
   el.style.cssText = 'color:blue; background-color: yellow'; //기존 것 덮어 씀, 조심
   el.classList.add(newClassName);
   el.textContent ="new message";
   el.setAttribute("class","msgBox"); `}</code>
      </section>
      <section>
         <h4>element에서 style 속성 읽기</h4>
         <h5>style 속성과 getComputedStyle()을 사용하는 것에는 차이가 있습니다.</h5>

         <p>style 속성 : inline으로 정의된 style 속성만 읽어옵니다.</p>
         <p>getComputedStyle() : inline 뿐만 아니라, style 및 class속성,
            css 파일로 정의된 style 속성을 모두 읽어옵니다</p>

         <h5>style 속성 읽어 오기</h5>
         <code> Element.innerText += element.style + '\n';
            Element.innerText += element.style.color + '\n';
            Element.innerText += element.style.backgroundColor + '\n';
         </code>
         <h5>getComputedStyle() 하면 CSS 속성값을 답은 객체를 리턴</h5>
         <code>// 3. getComputedStyle (스타일 정보 읽어오기)
            const color = getComputedStyle(element).color;
            const bgColor = getComputedStyle(element).backgroundColor;

            // 4. Style 출력
            printElement.innerText = 'color : ' + color + '\n';
            printElement.innerText += 'background-color : ' + bgColor + '\n';
         </code>
      </section>
      <section>
         <h2>svg 이미지 선택 및 삽입 방법</h2>
         <svg version="1.1" baseProfile="full" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            {/*<rect width="100%" height="100%" fill="black" /> */}
            <circle cx="50" cy="50" r="30" fill="blue"/>
         </svg>
         <svg width="100%" height="100%">
            <rect width="100%" height="100%" fill="red"/>
            <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black"/>
            <polygon points="240,0 240,300 0,225 50,50" fill="green"/>
            <text x="50" y="100" font-family="Verdana" font-size="55" fill="white" stroke="white" stroke-width="3">
               Hello!
            </text>
         </svg>
      </section>
      <section>
         <h2>video, ifram 삽입 방법 등 </h2>
         <video src="rabbit320.webm" controls>
            <p>
               Your browser doesn't support HTML video. Here is a
               <a href="rabbit320.webm">link to the video</a> instead.
            </p>
         </video>
         <video controls>
            <source src="rabbit320.mp4" type="video/mp4"/>
            <source src="rabbit320.webm" type="video/webm"/>
            <p>
               Your browser doesn't support this video. Here is a
               <a href="rabbit320.mp4">link to the video</a> instead.
            </p>
         </video>
         <video controls width="200" height="auto" autoPlay loop muted preload="auto" poster="poster.png">
            <source src="rabbit320.mp4" type="video/mp4"/>
            <source src="rabbit320.webm" type="video/webm"/>
            <p>
               Your browser doesn't support this video. Here is a
               <a href="rabbit320.mp4">link to the video</a> instead.
            </p>
         </video>
         <iframe width="400" height="200" src="https://www.youtube.com/embed/KFQRA40mh0U?si=A_AxHou3dTgkw8pr"
                 title="YouTube video player" frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>
   </main>)
}