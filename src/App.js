// import logo from './logo.svg';
import "./App.css";
import Counter from "./component/Counter.jsx";
import { useState } from "react";
import Todo from "./component/Todo";
import CounterMain from "./component/CounterMain.jsx";
import PeopleList from "./component/PeopleList.jsx";
import CounterUseEffect from "./component/CounterUseEffect.jsx";
import TextBox from "./component/TextBox";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>{show ? "true" : "false"}</button>
      {show && <CounterUseEffect />}

      <TextBox />

    </div>
  );
}

export default App;
