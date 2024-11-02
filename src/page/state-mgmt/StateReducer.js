import {useReducer, useState} from "react";

export default function StateReducer() {
   return (<main>
      <h2>state 로직을 reducer로 작성하기</h2>
      <p>한 컴포넌트에서 state 업데이트가 여러 이벤트 핸들러로 분산되는 경우가 있습니다. 이 경우 컴포넌트를 관리하기 어려워집니다. 따라서, 이 문제 해결을 위해 state를 업데이트하는 모든 로직을
         reducer를 사용해 컴포넌트 외부로 단일 함수로 통합해 관리할 수 있습니다.</p>
      <section>
         <h3>reducer로 state 로직 통합하기</h3>
         <p>컴포넌트가 복잡해지면 컴포넌트의 state가 업데이트되는 다양한 경우를 한눈에 파악하기 어려워질 수 있습니다. 예를 들어, 아래의 TaskApp 컴포넌트는 state에 tasks 배열을 보유하고
            있으며, 세 가지의 이벤트 핸들러를 사용하여 task를 추가, 제거 및 수정합니다</p>
         <h3>사용하기</h3>
         <ol>
            <li>const [tasks, dispatch] = userReducer(reducerFunction, initialValue);
               <br/></li>
         </ol>
      </section>
      <section>
         <TaskApp/>
      </section>
      <section>
         <code className='cd'>{`
function TaskApp() {
   const [tasks, dispatch] = useReducer(tasksReducer, initialTasks );

   return (
   <>
      <h1>Prague itinerary</h1>
      <AddTask dispatch={dispatch} />
      <TaskList
         tasks={tasks}
         dispatch={dispatch}
      />
   </>
   );
}

function tasksReducer(tasks, action) {
   switch (action.type) {
      case 'added': {
         return [...tasks, {
            id: action.id,
            text: action.text,
            done: false
         }];
      }
      case 'changed': {
         return tasks.map(t => {
         if (t.id === action.task.id) {
           return action.task;
         } else {
           return t;
         } 
         });
      }
      case 'deleted': {
         return tasks.filter(t => t.id !== action.id);
      }
      default: {
         throw Error('Unknown action: ' + action.type);
      }
   }
}`}</code>
      </section>
      <section>
         <h3>useState와 useReducer 비교하기 </h3>
         <ul>
            <li>코드 크기: 일반적으로 useState를 사용하면, 미리 작성해야 하는 코드가 줄어듭니다. useReducer를 사용하면 reducer 함수 그리고 action을 전달하는 부분 둘 다
               작성해야 합니다.
               하지만 여러 이벤트 핸들러에서 비슷한 방식으로 state를 업데이트하는 경우, useReducer를 사용하면 코드의 양을 줄이는 데 도움이 될 수 있습니다.
            </li>
            <li>가독성: useState로 간단한 state를 업데이트하는 경우 가독성이 좋은 편입니다. 그렇지만 더 복잡한 구조의 state를 다루게 되면 컴포넌트의 코드 양이 더 많아져 한눈에 읽기
               어려워질
               수 있습니다. 이 경우 useReducer를 사용하면 업데이트 로직이 어떻게 동작하는지와 이벤트 핸들러를 통해서 무엇이 발생했는지 구현한 부분을 명확하게 구분할 수 있습니다.
            </li>
            <li>디버깅: useState를 사용하며 버그를 발견했을 때, 왜, 어디서 state가 잘못 설정됐는지 찾기 어려울 수 있습니다. useReducer를 사용하면, 콘솔 로그를 reducer에
               추가하여 state가 업데이트되는 모든 부분과 왜 해당 버그가 발생했는지(어떤 action으로 인한 것인지)를 확인할 수 있습니다.
               각 action이 올바르게 작성되어 있다면, 버그를 발생시킨 부분이 reducer 로직 자체에 있다는 것을 알 수 있을 것입니다. 그렇지만 useState를 사용하는 경우보다 더 많은
               코드를 단계별로 실행해서 디버깅 해야 하는 점이 있기도 합니다.
            </li>
            <li>테스팅: reducer는 컴포넌트에 의존하지 않는 순수 함수입니다. 이는 reducer를 독립적으로 분리해서 내보내거나 테스트할 수 있다는 것을 의미합니다. 일반적으로 더 현실적인
               환경에서 컴포넌트를 테스트하는 것이 좋지만, 복잡한 state를 업데이트하는 로직의 경우 reducer가 특정 초기 state 및 action에 대해 특정 state를 반환한다고 생각하고
               테스트하는 것이 유용할 수 있습니다.
            </li>
            <li>개인적인 취향: reducer를 좋아하는 사람도 있지만, 그렇지 않는 사람들도 있습니다. 괜찮습니다. 이건 선호도의 문제이니까요. useState와 useReducer는 동일한 방식이기
               때문에 언제나 마음대로 바꿔서 사용해도 무방합니다.
            </li>
         </ul>
      </section>
   </main>)
}

function TaskApp() {
   const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

   return (<>
         <h1>useReducer NO Context</h1>
         <AddTask dispatch={dispatch}/>
         <TaskList
            tasks={tasks}
            dispatch={dispatch}
         />
      </>);
}

function taskReducer(tasks, action) {
   switch (action.type) {
      case 'added': {
         return [...tasks, {
            id: action.id, text: action.text, done: false
         }]
      }
      case 'changed': {
         return tasks.map(t => {
            if (t.id === action.task.id) {
               return action.task;
            } else {
               return t;
            }
         });
      }
      case 'deleted': {
         return tasks.filter(t => t.id !== action.id);
      }
      default: {
         throw Error("no Type" + action.type);
      }
   }
}

function AddTask({dispatch}) {
   const [text, setText] = useState('')
   return (<div>
      <label>
         <input style={{marginRight: "20px"}}
                value={text}
                onChange={e => setText(e.target.value)}/>
         <button onClick={() => dispatch({
            type: 'added', id: nextId++, text: text,
         })}>Add
         </button>
      </label>
   </div>)
}

function TaskList({tasks, dispatch}) {

   return (<ul style={{listStyle: "none", margin: "0", padding: "0"}}>
      {tasks.map(task => (<li key={task.id}>
            <Task
               task={task}
               dispatch={dispatch}
            />
         </li>))}
   </ul>)
}

function Task({task, dispatch}) {
   const [isEditing, setIsEditing] = useState(false);
   let content;

   if (isEditing) {
      content = (<>
         <input
            value={task.text}
            onChange={e => {
               dispatch({
                  type: 'changed', task: {
                     ...task, text: e.target.value
                  }
               });
            }}/>
      </>);
   } else {
      content = <>{task.text}</>;
   }

   return (<label style={{display: "flex", gap: "10px", paddingTop: "10px"}}>
      <input
         type='checkbox'
         checked={task.done}
         onChange={e => {
            dispatch({
               type: 'changed', task: {
                  ...task, done: e.target.checked
               }
            });
         }}
      />
      {content}
      <button onClick={() => setIsEditing(edit => !edit)}>
         {isEditing ? "save" : "edit"}
      </button>
      <button onClick={() => dispatch({
         type: 'deleted', id: task.id
      })}>
         Delete
      </button>
   </label>)
}

let nextId = 3;
const initialTasks = [{id: 0, text: 'Visit Kafka Museum', done: true}, {
   id: 1,
   text: 'Watch a puppet show',
   done: false
}, {id: 2, text: 'Lennon Wall pic', done: false},];
