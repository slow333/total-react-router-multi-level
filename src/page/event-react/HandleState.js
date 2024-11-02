import {sculptureList} from "../../data/data";
import {useState} from "react";

export default function HandleState(){
  return(
      <main>
        <h1>State : 컴포넌트의 기억 저장소</h1>
        <p>컴포넌트는 상호 작용의 결과로 화면의 내용을 변경해야 하는 경우가 많습니다. 폼에 입력하면 입력 필드가 업데이트되어야 하고, 이미지 캐러셀에서 “다음”을 클릭할 때 표시되는 이미지가 변경되어야 하고, “구매”를 클릭하면 상품이 장바구니에 담겨야 합니다. 컴포넌트는 현재 입력값, 현재 이미지, 장바구니와 같은 것들을 “기억”해야 합니다. React는 이런 종류의 컴포넌트별 메모리를 state라고 부릅니다.</p>
        <section>
          <h2>일반변수로 충분하지 않은 경우</h2>
          <p>다음은 조각상 이미지를 렌더링하는 컴포넌트입니다. “Next” 버튼을 클릭하면 index를 1, 2로 변경하여 다음 조각상을 표시해야 합니다. 그러나 이것은 작동하지 않습니다 (시도해 보세요!)</p>
          <p>handleClick 이벤트 핸들러는 지역 변수 index를 업데이트하고 있습니다. 하지만 이러한 변화를 보이지 않게 하는 두 가지 이유가 있습니다.</p>
          <ol>
            <li>지역 변수는 렌더링 간에 유지되지 않습니다. React는 이 컴포넌트를 두 번째로 렌더링할 때 지역 변수에 대한 변경 사항은 고려하지 않고 처음부터 렌더링 합니다.</li>
            <li>지역 변수를 변경해도 렌더링을 일으키지 않습니다. React는 새로운 데이터로 컴포넌트를 다시 렌더링해야 한다는 것을 인식하지 못합니다.</li>
          </ol>
          <p>컴포넌트를 새로운 데이터로 업데이트하기 위해선 다음 두 가지가 필요합니다.</p>
          <ol>
            <li>렌더링 사이에 데이터를 유지합니다.</li>
            <li>React가 새로운 데이터로 컴포넌트를 렌더링하도록 유발합니다.</li>
          </ol>
          <p><b>useState 훅은 렌더링 간에 데이터를 유지하기 위한 state 변수와
            변수를 업데이트하고 React가 컴포넌트를 다시 렌더링하도록 유발하는 state setter 함수를 제공</b></p>
           <SculptureList/>
           <Form/>
           <FeedbackForm/>
        </section>
      </main>
  )
}

function SculptureList(){
   const [index, setIndex] = useState(0);
   const sculpture = sculptureList[index];

   let hasNext = index < sculptureList.length -1;
   let hasPrev = index > 0;

   function handleNext() {
    if(hasNext) setIndex(index +1);
   }
  function handlePrev() {
    if(hasPrev) setIndex(index -1);
  }
   return (
      <div>
         <button onClick={handleNext} disabled={!hasNext} > 
          next</button>
         <button onClick={handlePrev} disabled={!hasPrev}> 
          Previous</button>
         <h3>{sculpture.name} by {sculpture.artist}</h3>
         <p>({index+1} of {sculptureList.length})</p>
         <img src={sculpture.url} alt={sculpture.alt}/>
         <p>{sculpture.description}</p>
      </div>
   )
}

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(pre => e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(pre => e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');
  if (isSent) {
    return <h1>Thank you!</h1>;
  } 
   return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
}

















