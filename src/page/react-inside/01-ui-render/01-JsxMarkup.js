export default function JsxMarkup(){
  return(
      <main>
        <h1>Jsx Markup 관련</h1>
        <p>JSX는 JavaScript를 확장한 문법으로, JavaScript 파일을 HTML과 비슷하게 마크업을 작성할 수 있도록 해줍니다. 컴포넌트를 작성하는 다른 방법도 있지만, 대부분의 React 개발자는 JSX의 간결함을 선호하며 대부분의 코드 베이스에서 JSX를 사용합니다.</p>
        <p><b>JSX와 React는 서로 다른 별개의 개념입니다. 종종 함께 사용되기도 하지만 독립적으로 사용할 수도 있습니다. JSX는 확장된 문법이고, React는 JavaScript 라이브러리입니다.</b></p>
        <section>
          <h2>tag 닫기</h2>
          <p>JSX에서는 태그를 명시적으로 닫아야 합니다. &lt;img&gt;처럼 자체적으로 닫아주는 태그는 반드시 &lt;img /&gt; 형태로 작성해야 하며, &lt;li&gt;oranges와 같은 래핑 태그도 &lt;li&gt;oranges&lt;/li&gt; 형태로 작성해야 합니다.</p>
        </section>
        <section>
          <h2>대부분 캐멀 케이스로</h2>
          <p>React에서 HTML과 SVG의 어트리뷰트 대부분이 캐멀 케이스로 작성.
            예를 들면, stroke-width 대신 strokeWidth로 사용합니다. class는 예약어이기 때문에, React에서는 DOM의 프로퍼티의 이름을 따서 className으로 대신 작성합니다.</p>
          <p><b>역사적인 이유로, aria-*와 data-*의 어트리뷰트는 HTML에서와 동일하게 대시를 사용하여 작성합니다.</b></p>
          <h3>tip : JSX 변환기 사용하기</h3>
          <a href="https://transform.tools/html-to-jsx"> jsx to HTML 변화기</a>
        </section>
        <section>
          <h2>중괄호 사용하기</h2>
          <p>중괄호를 사용하면 마크업에서 바로 JavaScript를 사용할 수있음.</p>
          <p>이중 중괄호 사용 : JSX의 CSS와 다른 객체</p>
          <p>여러 스트링 객체를 합쳐서 지정하기</p>
          <code>{`<img className="avatar" src={baseUrl + person.imageId + '.jpg'}>`}</code>
        </section>
      </main>
  )
}

