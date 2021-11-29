import React from "react";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Registration/Register";
import {Route, Switch} from "react-router-dom";
import HomePage from "./Pages/HomePage.js/HomePage";
function App() {
  return (
    <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/login" component={Login}/>
      <Route path="/Register" component={Register}/>
      {/* <Route path="/form" component={form}/> */}
    </Switch>
  </div>
  );
}

export default App;
