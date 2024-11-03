export default function HtmlBasic() {
   return(<main>
      <p><a href="/ko/docs/Web/HTML/Element/blockquote">
         <cite>MDN 블록 인용구 페이지</cite></a>에 따르면 </p>

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
      <address>
         <p>
            크리스 밀스<br/>
            맨체스터<br/>
            그림노스<br/>
            영국
         </p>

         <ul>
            <li>전화: 01234 567 890</li>
            <li>이메일: me@grim-north.co.uk</li>
         </ul>
      </address>
<code>{`const para = document.querySelector('p');

   para.onclick = function() {
   alert('Owww, stop poking me!');
}`}</code>
      <p> You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
         <code>&lt;center&gt;</code>. </p>

      <p> In the above JavaScript example, <var>para</var> represents a paragraph
         element. </p>

      <p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

      <pre>$ <kbd>ping mozilla.org</kbd>
    <samp>PING mozilla.org (63.245.215.20): 56 data bytes
    64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
      <time dateTime="2016-01-20">20 January 2016</time>
      <section>
         <h2>Table 컬러, 컬럼 선택 등</h2>
         <code>{`table,
   td,
   th {
   border: 1px solid #444;
   border-collapse: collapse;
}
   th[colspan="2"] {
   color: red;
}
   th {
   padding: 2px 8px;
}
   ## table 내에서 컬럼별 선택 방법 ##
   <table>
   <group>
   <col style="background-color: yellow" />
   <col style="background-color: yellow" />
   <col style="background-color: yellow; border: 4px solid black;" />
   </colgroup> `}</code>
         <table>
            <colgroup>
               <col style={{backgroundCcolor: "yellow"}}/>
               <col style={{backgroundCcolor: "yellow"}}/>
               <col style={{backgroundCcolor: "yellow", border: '4px solid black'}}/>
            </colgroup>
            <thead>
            <tr>
               <th id="split" colSpan="2">&nbsp;</th>
               <th>Name</th>
               <th>Mass(10<sup>24</sup>)</th>
               <th>Diameter(km)</th>
               <th>Density(kg/m<sup>3</sup>)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
               <th rowSpan="4" colSpan="2">Terrestrial planets</th>
               <th>Mercury</th>
               <td>0.330</td>
               <td>4879</td>
               <td>5427</td>
            </tr>
            <tr>
               <th>Venus</th>
               <td>0.330</td>
               <td>4879</td>
               <td>5427</td>
            </tr>
            <tr>
               <th>Earth</th>
               <td>0.330</td>
               <td>4879</td>
               <td>5427</td>
            </tr>
            <tr>
               <th>Mars</th>
               <td>0.330</td>
               <td>4879</td>
               <td>5427</td>
            </tr>
            <tr>
               <th rowSpan="4">Jovian planets</th>
               <th rowSpan="2">Gas giants</th>
               <th>Jupiter</th>
               <td>1898</td>
               <td>142.894</td>
               <td>687</td>
            </tr>
            <tr>
               <th>Saturn</th>
               <td>1898</td>
               <td>142.894</td>
               <td>687</td>
            </tr>
            <tr>
               <th rowSpan="2">Ice giants</th>
               <th>Uranus</th>
               <td>1898</td>
               <td>142.894</td>
               <td>687</td>
            </tr>
            <tr>
               <th>Nepturne</th>
               <td>1898</td>
               <td>142.894</td>
               <td>687</td>
            </tr>
            <tr>
               <th colSpan="2">Pluto</th>
               <th>Pluto</th>
               <td>0.0146</td>
               <td>2370</td>
               <td>2095</td>
            </tr>
            </tbody>
         </table>
      </section>
   </main>)
}