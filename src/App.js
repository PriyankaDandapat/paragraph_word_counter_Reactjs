import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const wordCount = state.split(/\s+/).filter(Boolean).length;
  const handleInput = (e) => {
    setState(e.target.value);
  };
  return (
    <div className="main">
      <h4>Responsive Paragraph Word Counter</h4>
      <textarea
        placeholder="enter your input"
        onChange={handleInput}
        value={state}
      ></textarea>
      <p className="count">
        Word Count: <span className="num">{wordCount}</span>{" "}
      </p>
      
    </div>
    
  );
}

export default App;