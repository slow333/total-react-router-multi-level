export default function Memos() {
  return (
     <main>
        <h2>메모들 입니다.</h2>
        <section>
           <h3>인텔리제이 단축기:</h3>
           <ul>
              <li>한줄 지우기 : ctrl + y</li>
              <li>한줄 이동 : alt + shift + 화살표</li>
              <li>한줄 복사 : ctrl + D</li>
              <li>코드자동 정렬 ; ctrl + alt + shift + L</li>
           </ul>
           <p>한줄 복사 Shift + Alt + ↑ Shift + Alt + ↓, 한줄 삭제 Ctrl + shift + k, 한줄 이동 Alt + ↑ Alt + ↓</p>
        </section>
        <section>
           <h2>vs code 단축키</h2>
           <h4>한줄 지우기 ; ctrl + shift + K</h4>
           <h4>여러 단어 한번에 변경하기 ; ctrl + shift + L </h4>
           <h4>한줄 이동 ; alt + 위아래 화살표</h4>
           <h4>한줄 복사 ; alt + shift + 화살표</h4>
           <h4>코드 정렬 : alt + shift + F</h4>
        </section>
        <section>
           <h3>git 생성 및 업데이트</h3>
           <code>{`echo "# 2024-react-study" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin git@github.com:slow333/2024-react-study.git
  git push -u origin main`}</code>
        </section>
        <section>
           <h3>관련 홈페이지 :MDN, W3C, JS 튜토리얼 홈페이지</h3>
           <ul>
              <li><a href="https://developer.mozilla.org/ko/docs/Learn/HTML">MDN HTML 공부 페이지</a></li>
              <li><a href="https://developer.mozilla.org/ko/docs/Learn/CSS">MDN CSS 공부 페이지</a></li>
              <li><a href="https://developer.mozilla.org/ko/docs/Learn/JavaScript/">MDN JS 공부 페이지</a></li>
              <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects">JS 표준 내장
                 객체</a></li>
              <li><a href="https://www.w3.org/TR/">W3C 표준화 페이지</a></li>
              <li><a href="https://ko.javascript.info/">모던 JavaScript 튜토리얼</a></li>
           </ul>
        </section>
     </main>
  )
}