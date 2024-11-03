export default function FormTypes (){
   return(<main>
      <h2>Web form structure : fieldset, legend</h2>
      <p> fieldset 요소는 동일한 목적을 갖는 위젯 그룹을 생성하는 편리한 방법입니다.</p>
      <section>
         <h3>fieldset, legend form</h3>
         <p>type="radio" value="small" ... name="size"</p>
         <form>
            <fieldset>
               <legend>legend : Fruit juice size</legend>
               <p>
                  <input type="radio" name="size" id="size_1" value="small"/>
                  <label htmlFor="size_1">Small</label>
               </p>
               <p>
                  <input type="radio" name="size" id="size_2" value="medium"/>
                  <label htmlFor="size_2">Medium</label>
               </p>
               <p>
                  <input type="radio" name="size" id="size_3" value="large"/>
                  <label htmlFor="size_3">Large</label>
               </p>
            </fieldset>
         </form>
         <p>이렇게 하면 screen reader에서 "Fruit juice size small" ... 을 순서대로 읽어 줌.</p>
      </section>
      <section>
         <h4>type="checkbox" value="cherry"</h4>
         <p>label의 for 값은 input의 id를 지정함(click 가능)</p>
         <form>
            <p>
               <input type="checkbox" id="taste_1" name="taste_cherry" value="cherry"/>
               <label htmlFor="taste_1">I like cherry</label>
            </p>
            <p>
               <input type="checkbox" id="taste_2" name="taste_banana" value="banana"/>
               <label htmlFor="taste_2">I like banana</label>
            </p>
         </form>
      </section>
      <section>
         <h4>Multiple labels</h4>
         <div>
            <p>Required fields are followed by <span aria-label="required">*</span>.</p>
            <label htmlFor="username">Name: <span aria-label="required">*</span></label>
            <input id="username" type="text" name="username" required/>
         </div>
      </section>
      <section>
         <form action="/sendUrl">
            <div className="inputContainer">
               <h2>Contact information</h2>
               <fieldset>
                  <legend>Title</legend>
                  <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around',
                     margin:'0',textAlign: 'left' }} >
                     <li>
                        <label htmlFor="title_1">
                           <input type="radio" id="title_1" name="title" value="A"/>
                           Ace
                        </label>
                     </li>
                     <li>
                        <label htmlFor="title_2">
                           <input type="radio" id="title_2" name="title" value="K"/>
                           King
                        </label>
                     </li>
                     <li>
                        <label htmlFor="title_3">
                           <input type="radio" id="title_3" name="title" value="Q"/>
                           Queen
                        </label>
                     </li>
                  </ul>
               </fieldset>
               <p>
                  <label htmlFor="name">
                     <span>Name: </span>
                     <strong><span aria-label="required">*</span></strong>
                  </label>
                  <input type="text" id="name" name="username" required/>
               </p>
               <p>
                  <label htmlFor="mail">
                     <span>Email: </span>
                     <strong><span aria-label="required">*</span></strong>
                  </label>
                  <input type="email" id="mail" name="usermail" required/>
               </p>
               <p>
                  <label htmlFor="pwd">
                     <span>Password: </span>
                     <strong><span aria-label="required">*</span></strong>
                  </label>
                  <input type="password" id="pwd" name="password" required/>
               </p>
               <h2>Payment information</h2>
               <p>
                  <label htmlFor="card">
                     <span>Card type:</span>
                  </label>
                  <select id="card" name="usercard">
                     <option value="visa">Visa</option>
                     <option value="mc">Mastercard</option>
                     <option value="amex">American Express</option>
                  </select>
               </p>
               <p>
                  <label htmlFor="number">
                     <span>Card number:</span>
                     <strong><span aria-label="required">*</span></strong>
                  </label>
                  <input type="tel" id="number" name="cardnumber" required/>
               </p>
               <p>
                  <label htmlFor="expiration">
                     <span>Expiration date:</span>
                     <strong><span aria-label="required">*</span></strong>
                  </label>
                  <input type="text" id="expiration" name="expiration" required placeholder="MM/YY"
                         pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"/>
               </p>
            </div>
            <div className="submitContainer">
               <p>
                  <button type="submit">Validate the payment</button>
               </p>
            </div>
         </form>
      </section>
   </main>)
}