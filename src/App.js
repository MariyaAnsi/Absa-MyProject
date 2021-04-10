import {BrowserRouter} from "react-router-dom";


import {I18nextProvider} from "react-i18next";

import i18n from "./translation";
import Router from "./router";
import "antd/dist/antd.css";


const  App=()=> (

    <BrowserRouter>
    <I18nextProvider i18={i18n}>
      <Router/>
    </I18nextProvider>
    </BrowserRouter>
);
  
    


export default App;
