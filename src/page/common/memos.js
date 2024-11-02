import {Link} from "react-router-dom";

export default function Memos() {
  return (
    <main>
      <h2>메모들 입니다.</h2>
      <section>
      <h3>인텔리제이 단축기:</h3>
        <ul>
          <li>한줄 지우기 : ctrl + y</li>
          <li>한줄 이동   : alt + shift + 화살표</li>
          <li>한줄 복사   : ctrl + D</li>
        </ul>
        <p>한줄 복사 Shift + Alt + ↑ Shift + Alt + ↓, 한줄 삭제 Ctrl + shift + k, 한줄 이동 Alt + ↑ Alt + ↓</p>
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
    </main>
  )
}