import {Link, Outlet} from "react-router-dom";

function RefAndEffect() {
  return (
      <main>
        <Outlet/>
      </main>
  )
}

function Detail1() {
  return (
      <main>
        <h2>Detail1</h2>
        <p><Link to="/">Go to the home page</Link></p>
      </main>
  );
}

function Detail2() {
  return (
      <main>
        <h2>Detail2</h2>
        <p><Link to="/">Go to the home page</Link></p>
      </main>
  );
}

function Detail3() {
  return (
      <main>
        <h2>Detail3</h2>
        <p><Link to="/">Go to the home page</Link></p>
      </main>
  );
}

export default RefAndEffect;
export {Detail1, Detail2, Detail3}