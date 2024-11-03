import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./css/index.css";
import Router, {Layout} from "./Router";
import App from "./App";
import OutletInput from "./page/OutletInput";
import Footer from "./page/common/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
       <BrowserRouter>
          <Router/>
          <Footer/>
       </BrowserRouter>
    </React.StrictMode>
);
