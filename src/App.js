import { marked } from "marked";

import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState(`
  BUGGGS

  \`npm install create-react-app -g\`

  \`\`\`
  function helloWorld() {
    console.log("Hello World");
  }
  \`\`\`
  `);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <textarea
            id="editor"
            onChange={(event) => {
              setText(event.target.value);
            }}
            value={text}
          ></textarea>
        </div>

        <div className="bottom">
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
