export default function JsBasic() {
   return (<main>
      <h2>Javascript 란 ?</h2>
      <section>
         <ul>
            <li>HTML은 문단, 제목, 데이터 표를 정의하거나 페이지에 이미지와 동영상을 삽입하는 등 웹 콘텐츠를 구성하고 의미를 부여하는 데 사용하는 마크업 언어입니다.</li>
            <li>CSS는 배경색과 글꼴을 설정하고 콘텐츠를 여러 열에 배치하는 등 HTML 콘텐츠에 스타일을 적용하는 데 사용하는 스타일 규칙 언어입니다.</li>
            <li>JavaScript는 동적으로 변경되는 콘텐츠를 만들고, 멀티미디어를 제어하고, 이미지에 애니메이션을 적용하는 등 거의 모든 작업을 수행할 수 있는 스크립팅 언어입니다. (모든 것이
               가능한 것은 아니지만 몇 줄의 JavaScript 코드로 달성할 수 있는 것은 놀랍습니다.)
            </li>
         </ul>
      </section>
      <section>
         <p>
            하지만 더욱 흥미로운 것은 클라이언트 측 JavaScript 언어 위에 구축된 기능입니다. 애플리케이션 프로그래밍 인터페이스(API)라고 부르는 이 기능들은 JavaScript 코드에서 사용할
            수 있는 강력한 마법을 추가로 제공합니다.
         </p>
         <p>
            API는 개발자가 구현하기 어렵거나 불가능한 프로그램을 구현할 수 있도록 미리 만들어서 제공하는 것입니다.
         </p>
      </section>
      <section>
         <h3>브라우저 API</h3>
         <p>브라우저 API는 웹 브라우저에 내장되어 있으며, 주변 컴퓨터 환경의 데이터를 노출하거나 유용한 복잡한 작업을 수행할 수 있습니다.</p>
         <ul>
            <li>DOM (Document Object Model) API를 사용하면 HTML과 CSS를 조작하여 HTML을 생성, 제거 및 변경하고 페이지에 새 스타일을 동적으로 적용하는 등의 작업을
               수행할 수 있습니다. 예를 들어 페이지에 팝업 창이 나타나거나 새로운 콘텐츠가 표시될 때마다(위의 간단한 데모에서 보았듯이) DOM이 작동하는 것입니다.
            </li>
            <li>Geolocation API로 지리정보를 가져올 수 있습니다. 이것이 Google 지도가 사용자의 위치를 찾아 지도에 표시하는 방법입니다.</li>
            <li>Canvas와 WebGL API를 사용하면 애니메이션 2D 및 3D 그래픽을 만들 수 있습니다. 두 웹 기술을 사용해서 만들 수 있는 놀라운 결과를 엿보려면 Chrome
               Experiments와 webglsamples를 방문하세요.
            </li>
            <li>HTMLMediaElement와 WebRTC를 포함하는 오디오와 비디오 API를 사용하면 웹 페이지에서 바로 오디오 및 비디오를 재생하거나 웹 카메라에서 비디오를 가져와 다른 사람의
               컴퓨터에 표시하는 등 멀티미디어로 정말 흥미로운 작업을 할 수 있습니다. (간단한 스냅샷 데모를 방문해서 감을 잡아보세요.)
            </li>
         </ul>
         <h3>서트파티 API</h3>
         <p>서드파티 API는 기본적으로 브라우저에 내장되어 있지 않으며, 일반적으로 웹 어딘가에서 해당 코드와 정보를 가져와야 합니다.</p>
         <ul>
            <li>Twitter API로 여러분의 최신 트윗을 웹 사이트가 보여주도록 구현할 수 있습니다.</li>
            <li>Google 지도 API와 OpenStreetMap API로 웹 사이트에 지도를 삽입하고, 지도 관련 기능을 추가할 수 있습니다.</li>
         </ul>
      </section>
      <section>
         <h3>브라우저 보안</h3>
         <p>각 브라우저 탭에는 코드를 실행할 수 있는 별도의 그릇이 있습니다. (전문 용어로 '실행 환경'이라고 부릅니다.) 대부분의 경우 각 탭의 코드는 완전히 독립적으로 실행되며 한 탭의 코드가 다른
            탭이나 다른 웹사이트의 코드에 직접적인 영향을 미칠 수 없습니다. 이건 중요한 보안 절차입니다. 이런 제약이 없으면 해커들이 다른 웹사이트의 정보를 훔치는 코드를 작성하는 등 나쁜 짓을 할 수
            있기 때문입니다.</p>
      </section>
      <p>Thanks! <span className="text-danger">♥</span></p>
      <p className="fs-2" aria-hidden="true">bootstrap 적용</p>
      <button id="addElement" className="btn btn-primary">ADD ELEMENT</button>
      <button id="removeElement" className="btn btn-danger">REMOVE ELEMENT</button>
   </main>)
}