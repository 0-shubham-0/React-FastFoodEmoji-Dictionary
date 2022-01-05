import "./styles.css";
import React, { useState } from "react";
export default function App() {
  var name = "Shubham";
  var color = "red";
  var [count, setState] = useState(0);
  var [elem, setElem] = useState("");
  const library = {
    "🍕": "Pizza",
    "🍔": "Burger",
    "🍟": "Fries",
    "🌭": "HotDog"
  };
  var fastFood = Object.keys(library);
  function handleChange(event) {
    elem = library[event.target.value];
    if (elem === undefined) {
      elem = "not found";
    }
    setElem(elem);
  }
  function button() {
    count++;
    setState(count);
  }
  function inputClickHandler(i) {
    elem = library[i];
    setElem(elem);
  }
  return (
    <div className="App">
      <h1>
        Hello
        <span style={{ color: color }}> {name}</span>
      </h1>
      <div>
        <button onClick={button}>like</button> {count}
      </div>
      <input onChange={handleChange}></input>
      <div>Your input is : {elem}</div>
      <ul style={{ padding: 0 }}>
        {fastFood.map((item) => {
          return (
            <li
              key={item}
              onClick={() => inputClickHandler(item)}
              style={{ display: "inline", padding: 15, fontSize: 40 }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
