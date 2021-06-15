import React, { Fragment } from "react";
import InputTodo from "./components/InputTodo";
import {ListTodos} from "./components/ListTodos";
import "./App.css";
import {Login} from "./components/Login";
import {Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/Protected.route";
import {Registration} from "./components/Registration";

function App() {
  return (
    <Fragment>
      <div className="App">
     <Switch>
     <Route exact path="/" component={Login} />
    <ProtectedRoute exact path="/app" component= {ListTodos} />
    <Route exact path="/regis" component={Registration} />
    <Route path="*" component={() => "404 NOT FOUND"} />
     </Switch>
        
        {/* <Login/>
        <InputTodo />
        <ListTodos /> */}
      </div>
    </Fragment>
  );
}

export default App;
