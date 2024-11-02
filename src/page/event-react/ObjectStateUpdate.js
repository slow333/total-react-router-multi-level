import {useState} from "react";
import BoxMoveSample from "../../util/BoxMoveSample";

export default function ObjectStateUpdate(props) {
  return(
      <main>
        <h1>객체 State 업데이트 하기</h1>
        <p>State는 객체를 포함한 <b><u>모든 종류의 자바스크립트 값을</u></b> 가질 수 있습니다. 하지만 React state가 가진 객체를 직접 변경해서는 안 됩니다. 객체를 업데이트하고 싶을 때는 새로운 객체를 생성하여 (또는 기존 객체의 복사본을 만들어), state가 복사본을 사용하도록 하세요.</p>
        <section>
          <h2>변경이란 ?</h2>
          <p>하지만 React state의 객체들이 기술적으로 변경 가능할지라도, 숫자, 불리언, 문자열과 같이 불변성을 가진 것처럼 다루어야 합니다. 객체를 변경하는 대신 교체해야 합니다.</p>
           <p>렌더링 시에 접근하려는 state 값은 읽기 전용처럼 다루어야 합니다.</p>
           <p>이러한 경우에 리렌더링을 발생시키려면, 새 객체를 생성하여 state 설정 함수로 전달하세요</p>
        </section>
         <SendPersonInfo/>
         <Scoreboard/>
         <BoxMoveSample/>
      </main>
  )
}

function MovingDot () {
   const [dotPosition, setDotPosition] = useState({x: 0, y: 0});

   return (
      <div onPointerMove={(e)=> {
         e.stopPropagation();
         setDotPosition({x:e.clientX, y:e.clientY});
      }} style={{position: 'relative', width:"100vw", height:"100vh"}} >
         <div style={
            {width: "20px", height:"20px", background: "red",
               borderRadius:"50%", position:"absolute",
               top: -10, left: -10, transform:`translate(${dotPosition.x}px, ${dotPosition.y}px)`}}></div>
      </div>
   )
}

function SendPersonInfo() {
   const [person, setPerson] = useState({
      firstName: "LImp", lastName:"bizkit", number:"33",
      // address: {city:"Los Angeles", code: "290-202", street: "duen san 227"}
   });

   function handlePersonChange(e) {
      // e.preventDefault();
      setPerson({...person, [e.target.name] : e.target.value });

   }
   function handleSubmit(e) {
      e.preventDefault();
      console.log(e.target[0].value);
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={person.firstName} onChange={handlePersonChange}/>
            <input type="text" name="lastName" value={person.lastName} onChange={handlePersonChange}/>
            <input type="text" name="number" value={person.number} onChange={handlePersonChange}/>
            <button type='submit'>제출하기</button>
         </form>
         <p>
            {person.firstName}{' '}
            {person.lastName}{' '}
            ({person.number})
         </p>
      </div>
   )
}

function Scoreboard() {
   const [player, setPlayer] = useState({
      firstName: 'Ranjani',
      lastName: 'Shettar',
      score: 10,
   });

   function handlePlusClick() {
      setPlayer({
         ...player,
         score : player.score + 1
      });
   }

   function handleFirstNameChange(e) {
      setPlayer({
         ...player,
         firstName: e.target.value,
      });
   }

   function handleLastNameChange(e) {
      setPlayer({
         ...player,
         lastName: e.target.value
      });
   }

   return (
      <>
         <label>
            Score: <b>{player.score}</b>
            {' '}
            <button onClick={handlePlusClick}> +1 </button>
         </label>
         <label>
            First name:
            <input
               value={player.firstName}
               onChange={handleFirstNameChange}
            />
         </label>
         <label>
            Last name:
            <input
               value={player.lastName}
               onChange={handleLastNameChange}
            />
         </label>
      </>
   );
}











