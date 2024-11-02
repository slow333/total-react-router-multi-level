import {createContext, useContext, useReducer, useState} from "react";

export default function ContextUseReducer() {
   return <TaskProvider>
      <h2>Context WITH useReducer</h2>
         <AddTask/>
         <TaskList/>
      </TaskProvider>
}

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

function TaskProvider({ children }) {
   const [tasks, dispach] = useReducer(taskReducer, initialTasks);

   return (
      <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispach}>
         {children}
      </TasksDispatchContext.Provider>
   </TasksContext.Provider>);
}

function taskReducer( tasks, action ) {
   switch (action.type) {
      case 'added': {
         return [...tasks, {
            id: action.id,
            text: action.text,
            done: false,
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
}

function AddTask() {
   const dispatch = useContext(TasksDispatchContext);
   const [text, setText] = useState('');
   return (<>
      <input placeholder="Add a task..."
      value={text}
      onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => {
         setText('');
         dispatch({
            type: 'added',
            text: text,
            id: nextId++,
         });
      }}>Add task </button>
   </>)
}

function TaskList() {
   const tasks = useContext(TasksContext);
   return(
      <ul>
         {tasks.map(task => (
            <li key={task.id}>
               <Task task={task} />
            </li>
         ))}
      </ul>);
}

function Task( { task } ){
   const [isEditing, setIsEditing] = useState(false);
   const dispatch = useContext(TasksDispatchContext);
   let content;

   if(isEditing) {
      content = (<>
         <input
            value={task.text}
            onChange={e => {
               dispatch({
                  type:'changed',
                  task: {...task, text: e.target.value},
               })
            }}/>
      </>);
   } else {
      content = (<>
         {task.text}
      </>);
   }
   return <label>
     <input
        type='checkbox'
        checked={task.done}
        onChange={e => {
           dispatch({
              type:'changed',
              task: {
                  ...task,
                 done: e.target.checked
               }
            });
          }}
     />
      {content}
      <button onClick={() => setIsEditing(v => !v)}>{isEditing ? 'save': 'edit'}</button>
      <button onClick={() => {
         dispatch({
            type: 'deleted',
            id: task.id,
         })
      }}>delete</button>
   </label>

}

const initialTasks = [
   { id: 0, text: 'Philosopher’s Path', done: true },
   { id: 1, text: 'Visit the temple', done: false},
   { id: 2, text: 'Drink matcha', done: false }
];

let nextId = initialTasks.length;