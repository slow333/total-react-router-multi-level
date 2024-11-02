import {createContext, useContext, useState} from "react";
import ContextUseReducer from "./ContextUseReducer";

export default function ContextPropDelivery() {
   return (<main>
      <h2>Contenxt를 사용해 데이터 깊게 전달하기</h2>
      <p>Prop drilling 방지하기</p>
      <img src="/images/passing_data_prop_drilling.webp"
           width="200" height="200" />
      <section>
         <h3>사용 방법</h3>
         <ul>
            <li>Context를 사용하기 전에 props를 전달하거나 JSX를 children으로 전달하는 것을 먼저 시도해보세요.</li>
            <li>Context는 컴포넌트가 트리 상 아래에 위치한 모든 곳에 데이터를 제공하도록 합니다.</li>
            <li>Context를 전달 방법
               <ol>
                  <li><code>export const MyContext = createContext(defaultValue)</code> context를 생성</li>
                  <li>useContext(MyContext) Hook에 전달해 얼마나 깊이 있든 자식 컴포넌트가 읽을 수 있도록 합니다.</li>
                  <li>자식을 {`<MyContext.Provider value={...}>`}로 감싸 부모로부터 context를 받도록 합니다.</li>
               </ol>
            </li>
            <li>Context는 중간의 어떤 컴포넌트도 지나갈 수 있습니다.</li>
            <li>Context를 활용해 “주변에 적응하는” 컴포넌트를 작성할 수 있습니다.</li>
         </ul>
      </section>
      <section>
         <h3>Context를 사용하기 전에 고려할 것</h3>
         <p>어떤 props를 여러 레벨 깊이 전달해야 할 때 해당 정보를 context에 넣어야 하는 것은 아닙니다.</p>
         <p>context를 사용하기 전에 고려해볼 대안들</p>
         <ul>
            <li><span className='green'>Props 전달하기</span> : 사소한 컴포넌트들이 아니라면 여러 개의 props가 여러 컴포넌트를 거쳐 가는 것은 그리 이상한 일이 아닙니다. 힘든 일처럼 느껴질 수 있지만 어떤 컴포넌트가 어떤 데이터를 사용하는지 매우 명확히 해줍니다. 데이터의 흐름이 props를 통해 분명해져 코드를 유지보수 하기에도 좋습니다.</li>
            <li>컴포넌트를 추출하고 <span className='red'>JSX를 children으로 전달하기</span> : {`데이터를 사용하지 않는 많은 중간 컴포넌트 층을 통해 어떤 데이터를 전달하는 (더 아래로 보내기만 하는) 경우에는 컴포넌트를 추출하는 것을 잊은 경우가 많습니다. 예를 들어 posts처럼 직접 사용하지 않는 props를 <Layout posts={posts} />와 같이 전달할 수 있습니다. 대신 Layout은 children을 prop으로 받고 <Layout><Posts posts={posts} /><Layout>을 렌더링하세요. 이렇게 하면 데이터를 지정하는 컴포넌트와 데이터가 필요한 컴포넌트 사이의 층수가 줄어듭니다.`}</li>
         </ul>
      </section>
      <section>
         <h3>Context 사용 예시</h3>
         <ul>
            <li>테마 지정하기: 사용자가 모양을 변경할 수 있는 애플리케이션의 경우에 (e.g. 다크 모드) context provider를 앱 최상단에 두고 시각적으로 조정이 필요한 컴포넌트에서 context를 사용할 수 있습니다.</li>
            <li>현재 계정: 로그인한 사용자를 알아야 하는 컴포넌트가 많을 수 있습니다. Context에 놓으면 트리 어디에서나 편하게 알아낼 수 있습니다. 일부 애플리케이션에서는 동시에 여러 계정을 운영할 수도 있습니다(e.g. 다른 사용자로 댓글을 남기는 경우). 이런 경우에는 UI의 일부를 서로 다른 현재 계정 값을 가진 provider로 감싸 주는 것이 편리합니다.</li>
            <li>라우팅: 대부분의 라우팅 솔루션은 현재 경로를 유지하기 위해 내부적으로 context를 사용합니다. 이것이 모든 링크의 활성화 여부를 “알 수 있는” 방법입니다. 라우터를 만든다면 같은 방식으로 하고 싶을 것입니다.</li>
            <li>상태 관리: 애플리케이션이 커지면 결국 앱 상단에 수많은 state가 생기게 됩니다. 아래 멀리 떨어진 많은 컴포넌트가 그 값을 변경하고싶어할 수 있습니다. 흔히 reducer를 context와 함께 사용하는 것은 복잡한 state를 관리하고 번거로운 작업 없이 멀리 있는 컴포넌트까지 값을 전달하는 방법입니다.</li>
         </ul>
      </section>
      <section>
         <ContextUseReducer/>
      </section>
      <section>
         <ToggleImageSize/>
      </section>
   </main>)
}

const SizeContext = createContext(100);

function ToggleImageSize() {
   const [isLarge, setIsLarge] = useState(false);
   const imageSize = isLarge ? 150 : 100;
   const size = useContext(SizeContext);

   return (
      <SizeContext.Provider value={imageSize}>
         <label>
            <input
               type="checkbox"
               checked={isLarge}
               onChange={e => {
                  setIsLarge(e.target.checked);
               }}
            />
            Use large images
         </label>
         <hr />
            <List />
      </SizeContext.Provider>
   )
}

function List() {
   return <ul  style={{listStyle:"none", padding:"0"}}>
      { imageData.map(place =>
      <li key={place.id}>
         <Place place={place}/>
      </li>)}
   </ul>;
}
const imageData = [
   {
      id: 0,
      name: 'Bo-Kaap in Cape Town, South Africa',
      description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
      imageId: 'K9HVAGH'
   }, {
      id: 1,
      name: 'Rainbow Village in Taichung, Taiwan',
      description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
      imageId: '9EAYZrt'
   }, {
      id: 2,
      name: 'Macromural de Pachuca, Mexico',
      description: 'One of the largest murals in the world covering homes in a hillside neighborhood.',
      imageId: 'DgXHVwu'
   }, {
      id: 3,
      name: 'Selarón Staircase in Rio de Janeiro, Brazil',
      description: 'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
      imageId: 'aeO3rpI'
   }, {
      id: 4,
      name: 'Burano, Italy',
      description: 'The houses are painted following a specific color system dating back to 16th century.',
      imageId: 'kxsph5C'
   }, {
      id: 5,
      name: 'Chefchaouen, Marocco',
      description: 'There are a few theories on why the houses are painted blue, including that the color repels mosquitos or that it symbolizes sky and heaven.',
      imageId: 'rTqKo46'
   }, {
      id: 6,
      name: 'Gamcheon Culture Village in Busan, South Korea',
      description: 'In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.',
      imageId: 'ZfQOOzf'
   }
   ];
function Place({ place }) {
   return (
      <>
         <PlaceImage place={place} />
         <span>
            <b>{place.name}</b>
            {': ' + place.description}
         </span>
      </>
   );
}

function PlaceImage({ place }) {
   const imageSizeContext = useContext(SizeContext);
   return (
      <img
         src={getImageUrl(place)}
         alt={place.name}
         width={imageSizeContext}
         height={imageSizeContext}
      />
   );
}

function getImageUrl(imageData) {
   return (
      'https://i.imgur.com/' + imageData.imageId + 'l.jpg'
   )
}

