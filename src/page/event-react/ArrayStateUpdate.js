import {useState} from "react";

export default function ArrayStateUpdate() {
   return(
      <main>
         <h1>Array State Update하기</h1>
         <p>배열은 JavaScript에서는 변경이 가능하지만, state로 저장할 때에는 변경할 수 없도록 처리해야 합니다. 객체와 마찬가지로, state에 저장된 배열을 업데이트하고 싶을 때에는, 새 배열을 생성(혹은 기존 배열의 복사본을 생성)한 뒤, 이 새 배열을 state로 두어 업데이트해야 합니다.</p>
         <section>
            <h2>변경하지 않고 배열 업데이트하기</h2>
            <p>JavaScript에서 배열은 다른 종류의 객체입니다. 객체와 마찬가지로 React state에서 배열은 읽기 전용으로 처리해야 합니다. 즉 arr[0] = 'bird'처럼 배열 내부의 항목을 재할당해서는 안 되며 push()나 pop()같은 함수로 배열을 변경해서는 안됩니다.</p>
            <p>대신 배열을 업데이트할 때마다 새 배열을 state 설정 함수에 전달해야 합니다. 이를 위해 state의 원본 배열을 변경시키지 않는 filter()와 map() 같은 함수를 사용하여 원본 배열로부터 새 배열을 만들 수 있습니다. 이후 이 새 배열들을 state에 설정합니다.</p>
            <p>다음은 일반적인 배열 연산에 대한 참조 표입니다. React state 내에서 배열을 다룰 땐, 왼쪽 열에 있는 함수들의 사용을 피하는 대신, 오른쪽 열에 있는 함수들을 선호해야 합니다.</p>
            <table style={{ width: "100%"}}>
               <thead>
               <tr>
                  <th>  </th>
                  <th>비선호(배열을 변경)</th>
                  <th>선호(새 배열을 반환)</th>
               </tr>
               </thead>
               <tbody>
               <tr>
                  <td>추가</td>
                  <td><icode>push, unshift</icode></td>
                  <td><icode>concat, [...arr]</icode> 전개 연산자</td>
               </tr>
               <tr>
                  <td>제거</td>
                  <td>pop, shift, splice</td>
                  <td>filter, slice</td>
               </tr>
               <tr>
                  <td>교체</td>
                  <td>splice, arr[i] = ... 할당</td>
                  <td>map</td>
               </tr>
               <tr>
                  <td>정렬</td>
                  <td>reverse, sort</td>
                  <td>배열을 복사한 이후 처리</td>
               </tr>
               </tbody>
            </table>
         </section>
         <section>
            <h3>특정 인텍스 위치에 삽입하기</h3>
            <InsertAtList/>
         </section>
         <section>
            <h2>immer 사용하기</h2>
            <h3>package.json</h3>
<code>{`{
   "dependencies": {
      "immer": "1.7.3",
      "react": "latest",
      "react-dom": "latest",
      "react-scripts": "latest",
      "use-immer": "0.5.1"
   },
   "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject"
   },
   "devDependencies": {}
}`}</code>
            <h3>App 사용</h3>
            <code>{`let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];
function BucketList() {
  const [myList, updateMyList] = useImmer(
    initialList
  );
  const [yourArtworks, updateYourList] = useImmer(
    initialList
  );

  function handleToggleMyList(id, nextSeen) {
    updateMyList(draft => {
      const artwork = draft.find(a =>
        a.id === id
      );
      artwork.seen = nextSeen;
    });
  }

  function handleToggleYourList(artworkId, nextSeen) {
    updateYourList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourArtworks}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
} `}</code>
         </section>
      </main>
   )
}

const initialArtists=[
   { id: 0, title: 'Big Bellies', seen: false },
   { id: 1, title: 'Lunar Landscape', seen: false },
   { id: 2, title: 'Terracotta Army', seen: true },
];

function InsertAtList() {
  const [artists, setArtists] = useState(initialArtists);

  const [title, setTitle] = useState("");

  function handleAdd() {
     let insertAt = 1;
     let id = new Date().getTime();
     let newArtists = [
        ...artists.slice(0,insertAt),
        {id:id, title : title},
        ...artists.slice(insertAt),
     ];
     setArtists(newArtists);
  }
  function handleRemove(index) {
     let newArtists = artists.filter(artist => artist.id !== index);
     setArtists(newArtists);
  }
  function handleReverse() {
     const newArtists = [...artists];
     newArtists.reverse();
     setArtists(newArtists);
  }
  function handleCheck(id, isChecked){
     const newArtists = artists.map(artist =>
        (id === artist.id) ? {...artist, seen: isChecked}: artist
     );
     setArtists(newArtists);
  }
  return (
     <>
       <ul>
          {artists.map((artist, index) => (
             <li key={artist.id}>
             <label>
                <input type="checkbox"
                       checked={artist.seen}
                       onChange={e=>
                       {
                          handleCheck(artist.id, e.target.checked);
                       }
                }
                />
                <span style={{textDecoration: `${artist.seen ? "line-through" : ""}`}}>{artist.title}</span>
             </label>
                <button
                   onClick={() => handleRemove(artist.id)}>
                   delete
                </button>
             </li>
          ))}
       </ul>
        <input title="artist" onChange={e => setTitle(e.target.value)} />
        <button onClick={handleAdd}>insert Artist</button>
        <button onClick={handleReverse}>reverse Artist</button>
     </>
  )
};
















