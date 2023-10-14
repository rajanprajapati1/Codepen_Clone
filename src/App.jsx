import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import Output from "./components/Output";

const App = () => {
  const [Html, SetHtml] = useState("");
  const [Css, SetCss] = useState("");
  const [Js, SetJs] = useState("");
  const [OutputContent, SetOutputContent] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      SetOutputContent(
        `
          <html>
            <head>
              <style>${Css}</style>
            </head>
            <body>${Html}</body>
            <script>${Js}</script>
          </html>
        `
      );
    }, 250);
    return () => clearTimeout(delay);
  }, [Html, Css, Js]);
  return (
    <>
      <div className="Codepen">
        <Navbar />
        <div className="editor_flex">
          <Editor language="Html" logo={"ri-html5-fill"} code={Html} setCode={SetHtml} />
          <Editor language="Css" logo={"ri-css3-fill"} code={Css} setCode={SetCss} />
          <Editor language="Js" logo={"ri-javascript-line"} code={Js} setCode={SetJs} />
        </div>
        <div className="output_span" >
          <Output Html={Html} Css={Css} Js={Js} OutputContent={OutputContent} />
        </div>
      </div>
    </>
  );
};

export default App;
