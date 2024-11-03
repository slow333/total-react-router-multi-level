import {useState} from "react";

export default function StateArchitecture() {
   return (<main>
         <h1>State 구조화 하기</h1>
         <h4>State를 잘 구조화 해야한다."당신의 state를 가능한 한 단순하게 만들어야 한다, 더 단순하게 가 아니라." </h4>
         <section>
            <h2>State 구조화 원칙</h2>
            <ol>
               <li><b>연관된 State 그룹화하기 : </b> 두개 이상의 State 변수를 항상 동시에 업데이트한다면, 단일 state 변수로 병합을 고려</li>
               <li><b>State의 모순 피하기 : </b> 여러 state 조각이 서로 모순되고 “불일치”할 수 있는 방식으로 state를 구성하는 것은 실수가 발생할 여지를 만듭니다. 이를
                  피하세요.
               </li>
               <li><b>불필요한 state 피하기 : </b>렌더링 중에 컴포넌트의 props나 기존 state 변수에서 일부 정보를 계산할 수 있다면, state를 생성하지 않는게 좋습니다.
               </li>
               <li><b>State의 중복 피하기 : </b>여러 상태 변수 간 또는 중첩된 객체 내에서 동일한 데이터가 중복될 경우 동기화를 유지하기가 어렵습니다. 가능하다면 중복을 줄이세요.
               </li>
               <li><b>깊게 중첩된 state 피하기 : </b>깊게 계층화된 state는 업데이트하기 쉽지 않습니다. 가능하면 state를 평탄한 방식으로 구성하는 것이 좋습니다.</li>
            </ol>
         </section>
         <section>
            <h2>1. 연관된 state 그룹화하기</h2>
            <p>항상 같이 움직이는 x ,y 를 따로 구성하기 보다는 하나의 position status에서 {`{x:0, y:0}`}을 구현함</p>
            {/*<MovingDot/>*/}
         </section>
         <section>
            <h2>2. State의 모순 피하기</h2>
            <p>sending, sent, typing 을 개별 state로 정의하면 모두 true를 갖을 수 있으므로 status state를 정의해서 값으로 관리 </p>
            <FeedbackForm/>
         </section>
         <section>
            <h2>3. 불필요한 State 피하기</h2>
            <p>렌더링 중에 컴포넌트의 props나 기존 state 변수에서 일부 정보를 계산할 수 있다면, 컴포넌트의 state에 해당 정보를 넣지 않아야 합니다.</p>
            <NameForm/>
         </section>
         <section>
            <h2>4. State 중복 피하기</h2>
            <Menu/>
         </section>
         <section>
            <h2>예제(checkbox)</h2>
            <CheckBoxs/>
         </section>
      </main>)
}

function MovingDot() {
   const [position, setPosition] = useState({
      x: 0, y: 0
   })
   return (<div
         onPointerMove={(e) => {
            setPosition({x: e.clientX, y: e.clientY});
         }}
         style={{position: "relative", width: "80vw", height: "20vh", border: "2px solid red"}}
      >
         <div style={{
            position: "absolute",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "red",
            transform: `translate(${position.x - 40}px, ${position.y - 530}px)`,
         }}>

         </div>

      </div>)
}

function FeedbackForm() {
   const [text, setText] = useState('');
   const [status, setStatus] = useState('typing');

   async function handleSubmit(e) {
      e.preventDefault();
      setStatus('sending');
      await sendMessage(text);
      setStatus('sent');
   }

   const isSending = status === 'sending';
   const isSent = status === 'sent';

   if (isSent) {
      return <h1>Thanks for feedback! : {text}</h1>
   }

   return (<form onSubmit={handleSubmit}>
         <p>How was your stay at The Prancing Pony?</p>
         <textarea
            disabled={isSending}
            value={text}
            onChange={e => setText(e.target.value)}
         />
         <br/>
         <button
            disabled={isSending}
            type="submit"
         >
            Send
         </button>
         {isSending && <p>Sending...</p>}
      </form>);
}

// Pretend to send a message.
function sendMessage(text) {
   return new Promise(resolve => {
      setTimeout(resolve, 2000);
   });
}

function NameForm() {
   const [fullName, setFullName] = useState({
      firstName: "abc", lastName: "cde"
   });

   const krStyle = fullName.lastName + " " + fullName.firstName;

   function handleNameChange(e) {
      e.preventDefault();
      setFullName({...fullName, [e.target.name]: e.target.value});
   }

   return (<>
         <h2>Let’s check you in</h2>
         <label>
            First name:{' '}
            <input
               name="firstName"
               value={fullName.firstName}
               onChange={handleNameChange}
            />
         </label>
         <label>
            Last name:{' '}
            <input
               name='lastName'
               value={fullName.lastName}
               onChange={handleNameChange}
            />
         </label>
         <p>
            Your ticket will be issued to: <b>{krStyle}</b>
         </p>
      </>);
}

const initialItems = [
   {title: 'pretzels', id: 0}, {title: 'crispy seaweed', id: 1}, {title: 'granola bar', id: 2},
];

function Menu() {
   const [items, setItems] = useState(initialItems);
   const [num, setNum] = useState(0);

   const selectedItem = {id: num, title: items[num].title};

   function handleItemChange(e, id) {
      setItems(items.map(item => {
         if (item.id === id) return {...item, title: e.target.value}
         else return item
      }));
   }

   return (<>
         <h2>What's your travel snack?</h2>
         <ul>
            {items.map(item => (<li key={item.id}>
                  <input
                     value={item.title}
                     onChange={e => handleItemChange(e, item.id)}
                  />
                  {' '}
                  <button onClick={() => { setNum(item.id); }}>
                     Choose
                  </button>
               </li>))}
         </ul>
         <p>You picked {selectedItem.title}.</p>
      </>);
}

function CheckBoxs() {
   const [selectedIds, setSelectedIds] = useState([]);
   const selectCount = selectedIds.length;

   function handleToggle(id) {
      if(selectedIds.includes(id)){
         setSelectedIds(selectedIds.filter(selectedId => id !== selectedId))
      } else {
         setSelectedIds([...selectedIds, id])
      }
   }
   return<div>
      <h1>Inbox</h1>
      <ul>
         {letters.map(letter =>
            <Letter
               key={letter.id}
              isSelected={selectedIds.includes(letter.id)}
              onToggle={handleToggle}
              letter={letter}
            />
         )}
      </ul>
      <div>선택한 수는 : {selectCount}</div>
   </div>
}

function Letter({ isSelected, onToggle, letter }){
   let selected = "orange";
   return (
      <li style={{backgroundColor: isSelected ? selected : ""}}>
         <label>
            <input type='checkbox' checked={isSelected}
            onChange={() => onToggle(letter.id)} />
            {letter.subject}
         </label>
      </li>
   )
}

const letters = [
   {
   id: 0,
   subject: 'Ready for adventure?',
   isStarred: true,
},
   {
   id: 1,
   subject: 'Time to check in!',
   isStarred: false,
}, {
   id: 2,
   subject: 'Festival Begins in Just SEVEN Days!',
   isStarred: false,
}
];