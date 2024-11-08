export default function CssAttribute() {
   return(<main>
      <h1 className="h1">MDN CSS 공부 페이지</h1>
      <section>
         <h2>CSS 속성 선택 방법</h2>
         <ul>
            <li> a[title] ; title을 포함하고 있는</li>
            <li>li[class^="a"] ;a로 시작</li>
            <li>li[class$="a"] ; a로 끝나는 것</li>
            <li>li[class*="a"] ; a를 포함하고 있는...</li>
            <li>li[class~="a"] ; 정확히 a이거나(공백으로 구분) a를 포함</li>
            <li>li[class^="a" i] ; 대소문자 구분 무시 i</li>
            <li>p::first-line ; p의 첫번째 줄</li>
            <li>p::first-letter ; p의 첫번째 글자</li>
            <li>p *:first-child ; p의 첫번째 요소</li>
         </ul>
         <h2>결합자 하위, 동등 계위 선택</h2>
         <ul>
            <li>article p ; article 밑에 있는 모든 요소 선택(deepth가 1보다 커도 적용됨)</li>
            <li>article > p ; 직계 자식 요소만 선택(deepth가 1보다 크면 적용안됨)</li>
            <li>p + img ; p에 대해 첫번째 형제 관계인 img에 적용됨</li>
            <li>p ~ img ; p에 대해 모든 형제 관계 img에 적용됨</li>
         </ul>
         <h2>속성 상속 제어기</h2>
         <ul>
            <li>inherit ; 부모 요소의 속성 값과 동일</li>
            <li>initial ; 브라우저의 기본</li>
            <li>unset ;속성이 자연적으로 상속되면 inherit 된 것처럼 작동하고 그렇지 않으면 initial 처럼 작동</li>
         </ul>
         <p> className {`{all: unset}`} 하면 모든 속성을 지움 </p>
         <h3>CSS 적용시 우선 순위 계산하는 법</h3>
         <table>
            <thead>
            <tr>
               <th>선택자</th>
               <th>Thousands</th>
               <th>Hundreds</th>
               <th>Tens</th>
               <th>Ones</th>
               <th>Total specificity</th>
            </tr>
            </thead>
            <tbody>
            <tr>
               <th>h1</th>
               <td>0</td>
               <td>0</td>
               <td>0</td>
               <td>1</td>
               <td>0001</td>
            </tr>
            <tr>
               <th>h1 + p::first-letter</th>
               <td>0</td>
               <td>0</td>
               <td>0</td>
               <td>3</td>
               <td>0003</td>
            </tr>
            <tr>
               <th>li > a[href*="en-US"] > .inline-warning</th>
               <td>0</td>
               <td>0</td>
               <td>2</td>
               <td>2</td>
               <td>0022</td>
            </tr>
            <tr>
               <th>#identifier</th>
               <td>0</td>
               <td>1</td>
               <td>0</td>
               <td>0</td>
               <td>0100</td>
            </tr>
            <tr>
               <th>inline 요소</th>
               <td>1</td>
               <td>0</td>
               <td>0</td>
               <td>0</td>
               <td>1000</td>
            </tr>
            </tbody>
         </table>
         <p id="firstLine">화면에 보이는 첫번째 줄에 적용됨. <em>이 것은 첫번째 요소(em)</em> <br/>Veggies es bonus vobis, proinde vos postulo
            essum
            onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.soi pea sprouts.</p>
         <p className="box-pheudo-style">Content in the box in my HTML page</p>
         <h2>overflow: hidden ; overflow-x:scroll ; overflow-y: scroll; overflow: auto;</h2>
         <h2>Attribute substring matching selectors</h2>
         <ul>
            <li className="a">Item 1</li>
            <li className="ab">Item 2</li>
            <li className="bca">Item 3</li>
            <li className="bcabc">Item 4</li>
            <li className="Abc">Case insensitivity</li>
         </ul>
         <blockquote cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/blockquote">
            <p><strong>HTML <code>&lt;blockquote&gt;</code> 요소</strong>
               <em>(또는HTML 인용 블록 요소)는 안쪽의 텍스트가 긴 인용문임을 나타냅니다.</em>
            </p>
         </blockquote>

         <p> 인용구 요소 — <code>&lt;q&gt;</code> — 는
            <q cite="https://developer.mozilla.org/ko/docs/Web/HTML/Element/q">
               단락 나누기가 필요 없는 짧은 인용구를 위한 것입니다. </q>
            — <a href="/ko/docs/Web/HTML/Element/q"><cite>MDN q 페이지</cite></a>.
         </p>
         <p> 제 생각에는 그린 <abbr title="목사">목사</abbr>가 전기톱으로 부엌에서 한 것 같아요. </p>
      </section>
   </main>)
}