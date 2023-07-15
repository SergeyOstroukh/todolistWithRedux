import React from 'react';
import './App.css';
import {Todolists} from "./components/todolists/Todolists";
import {useSelector} from "react-redux";
import {rootReducerType} from "./reducers/Store";

function App() {

    let copyState =(useSelector<rootReducerType,rootReducerType>(state => state))
    console.log(copyState)
  return (
    <div className="App">
        <Todolists />
        {/*<Clock />*/}
    </div>
  );
}

export default App;
