// import logo from './logo.svg';
import "./App.css";
import Counter from "./component/Counter.jsx";
import { useState } from "react";
import Todo from "./component/Todo";
import CounterMain from "./component/CounterMain.jsx";
import PeopleList from "./component/PeopleList.jsx";
import CounterUseEffect from "./component/CounterUseEffect.jsx";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
