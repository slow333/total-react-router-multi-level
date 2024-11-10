import {useState} from "react";

export default function StateHoisting() {
   return (<main>
      <h2>State 끌어올리기</h2>
      <p>때때로 두 컴포넌트의 state가 항상 함께 변경되기를 원할 수 있습니다. 그렇게 하려면 각 컴포넌트에서 state를 제거하고 가장 가까운 공통 부모 컴포넌트로 옮긴 후 props로 전달해야 합니다.
         이 방법을 State 끌어올리기라고 하며 React 코드를 작성할 때 가장 흔히 하는 일 중 하나입니다.</p>
      <section>
         <h3>Sample</h3>
         <Accordion/>
      </section>
      <section>
         <h3>search sample</h3>
         <Search/>
      </section>
      <h2>State를 보존하고 초기화하기</h2>
      <ul>
         <li>React는 같은 컴포넌트가 같은 자리에 렌더링되는 한 state를 유지합니다.</li>
         <li>state는 JSX 태그에 저장되지 않습니다. state는 JSX으로 만든 트리 위치와 연관됩니다.</li>
         <li>컴포넌트에 다른 key를 주어서 그 하위 트리를 초기화하도록 강제할 수 있습니다.</li>
         <li>중첩해서 컴포넌트를 정의하면 원치 않게 state가 초기화될 수 있기 때문에 그렇게 하지 마세요.</li>
      </ul>
      <section>
         <p>경험상(rule of thumb) 리렌더링할 때 state를 유지하고 싶다면, 트리 구조가 “같아야” 합니다. 만약 구조가 다르다면 React가 트리에서 컴포넌트를 지울 때 state로 지우기 때문에 state가 유지되지 않습니다.</p>
         <p>같은 함수에서 다른 컴포넌트를 렌더링할 때마다 React는 그 아래의 모든 state를 초기화합니다. 이런 문제를 피하려면 항상 컴포넌트를 중첩해서 정의하지 않고 최상위 범위에서 정의해야 합니다.</p>
         <p>key를 명시하면 React는 부모 내에서의 순서 대신에 key 자체를 위치의 일부로 사용합니다. 이것이 컴포넌트를 JSX에서 같은 자리에 렌더링하지만 React 관점에서는 다른 카운터인 이유입니다. 결과적으로 그들은 절대 state를 공유하지 않습니다. 카운터가 화면에 나타날 때마다 state가 새로 만들어집니다. 그리고 카운터가 제거될 때 마다 state도 제거됩니다. 그들을 토글할 때마다 state가 계속 초기화됩니다.</p>
      </section>
   </main>)
}

function Accordion() {
   const [activeIndex, setActiveIndex] = useState(0);

   return(
      <>
         <Panel title="t one" 
                onShow={() => setActiveIndex(0)} 
                isActive={activeIndex === 0}>
            첫번째 칠드런에 대한 내용
         </Panel>
         <Panel title="두번째 제목"
                onShow={() => setActiveIndex(1)}
                isActive={activeIndex === 1}>
            두번째 내용
         </Panel>
      </>
   )
}

function Panel({title, isActive, onShow, children}) {
   return (<div>
      <h3>{title}</h3>
      <div>{isActive ? children : <button onClick={onShow}>show</button>}</div>

   </div>)
}

// let panelItems = [{id: 0, title: "손오공", content: "계속오르고 있어", show: false}, {
//    id: 1,
//    title: "피콜로",
//    content: "신무기를 개발 했다. 전투력이 1330, 마광찬탈포",
//    show: false
// },{
//    id: 2,
//    title: "국제수사",
//    content: "더러운돈에 손대지 마라",
//    show: true,
// }]
//
// function Accordion() {
//    const [items, setItems] = useState(panelItems);
//    // console.log(items);
//    const [isShow, setIsShow] = useState(false);
//
//    function handleShow(id) {
//       setItems(items =>
//          items.map((item) =>
//             (id === item.id) ? {...item, show: true} : {...item, show: false}
//          )
//       )
//    }
//
//    return <div>
//       <button onClick={() => setIsShow(!isShow)}>{isShow ? "hide": "show"}</button>
//       {isShow ?
//       items.map(item =>
//          // noinspection BadExpressionStatementJS
//          <Panel panelItem={item} key={item.id} toggleShow={handleShow}/>
//       ) : null}
//    </div>
// }
//
// function Panel({panelItem, toggleShow}) {
//
//    return (<div>
//       <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
//       <h2>{panelItem.title}</h2>
//       <button onClick={() => toggleShow(panelItem.id)}>
//          {panelItem.show ? "Hide" : "Show"}</button>
//
//       </div>
//       <div>
//          {panelItem.show && panelItem.content}
//       </div>
//
//    </div>)
// }


function Search() {
   const [query, setQuery] = useState("");

   let result = foods.filter(food =>
      food.name.toLowerCase().includes(query.toLowerCase())
   );

   return (<>
   <Input value={query} onChange={(e) => setQuery(e.target.value)} />
   <FoodsList foods={result}   />
   </>)
}

function FoodsList({foods}) {
   return (<div>
      {foods.map(food => <table key={food.name} className="table">
         <tbody>
            <tr>
               <td width={200}><h4>{food.name} : </h4></td>
               <td><p>{food.description}</p></td>
            </tr>
         </tbody>
      </table>)}
   </div>)
}
function Input({value, onChange}) {
      return (
         <input value={value} onChange={onChange} />)
   }

const foods = [
{
   id: 0,
   name: 'Sushi',
   description: 'Sushi is a traditional Japanese dish of prepared vinegared rice'
}, {
   id: 1,
   name: 'Dal',
   description: 'The most common way of preparing dal is in the form of a soup to which onions, tomatoes and various spices may be added'
}, {
   id: 2,
   name: 'Pierogi',
   description: 'Pierogi are filled dumplings made by wrapping unleavened dough around a savoury or sweet filling and cooking in boiling water'
}, {
   id: 3,
   name: 'Shish kebab',
   description: 'Shish kebab is a popular meal of skewered and grilled cubes of meat.'
}, {
   id: 4,
   name: 'Dim sum',
   description: 'Dim sum is a large range of small dishes that Cantonese people traditionally enjoy in restaurants for breakfast and lunch'
}];