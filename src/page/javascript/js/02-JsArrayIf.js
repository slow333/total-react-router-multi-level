export default function JsArrayIfLoop() {
   return (<main>
      <section>
         <h3>Array 다루는 방법</h3>
         <ul>
            <li>array의 크기 : arrayData.length();</li>
            <li>array에서 데이터 추출는 arrayData[index]</li>
            <li>array를 string 으로 : arrayData.join(",")</li>
            <li>array를 string 으로 : arrayData.toString(); 기본으로 ","로 구분</li>
            <li>string을 array로 변경 : string.split(",") => string이 ","로 구분돼있을때</li>
            <li>array에 추가 제거: push(), pop() <b>끝에</b> 추가/제거</li>
            <li>array에 추가 제거: unshift(), shift() <b>맨앞</b>에 추가/제거</li>
         </ul>
      </section>
      <div id="clearDiv"></div>
      <section>
         <h3>if 문</h3>
         <label htmlFor="weather">Select the weather type today: </label>
         <select id="weather">
            <option value="">--Make a choice--</option>
            <option value="sunny">Sunny</option>
            <option value="rainy">Rainy</option>
            <option value="snowing">Snowing</option>
            <option value="overcast">Overcast</option>
         </select>
      </section>
      <label htmlFor="theme">Select theme: </label>
      <select id="theme">
         <option value="white">White</option>
         <option value="black">Black</option>
      </select>

      <div id="changeTheme">This is my website</div>
      <hr/>
      <div id="if-select"></div>
      <div id="switch-select"></div>
      <section>
         <h2>for 문</h2>
         <canvas></canvas>
         <button id="update">Update</button>
         <p className="dog"></p>
      </section>
      <section>
         <h2>list에서 이름으로 찾기</h2>
         <code>{`for(contact in contacts)
   {if(array[i].indexOf(search) !== 1) value}`}  </code>
         <div>
            <label htmlFor="search">Search by contact name</label>
            <input id="search" type="text"/>
            <button className="btnSearch">Search</button>
         </div>
      </section>
      <hr/>
      <p id="contactContainer"></p>
   </main>)
}