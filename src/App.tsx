import React from 'react';
import './App.css';
import {Todolists} from "./components/todolists/Todolists";
import {useSelector} from "react-redux";
import {rootReducerType} from "./reducers/Store";

function App() {
    console.log(useSelector<rootReducerType,rootReducerType>(state => state))
  return (
    <div className="App">
        <Todolists />
    </div>
  );
}

export default App;
