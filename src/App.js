import "./App.css";
import TextSpan from "./TextSpan";
function App() {
  const sentence = "Hello Assegid".split("");
  return (
    <div>
      {sentence.map((letter, index) => {
        return (
          <TextSpan key={index}>{letter === " " ? "\u00A0" : letter}</TextSpan>
        );
      })}
    </div>
  );
}

export default App;
