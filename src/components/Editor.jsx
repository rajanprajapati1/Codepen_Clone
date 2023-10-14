import React from "react";

const Editor = ({ language, code, setCode ,logo}) => {
  const HandleChange = (e) => {
    setCode(e.target.value)
  };
  return (
    <div className="Editor">
      <h3 className="Title"> <i class={logo}></i>{language}</h3>
      <textarea
        value={code}
        onChange={HandleChange}
        placeholder={`Enter ${language} Code Here`}
      />
    </div>
  );
};

export default Editor;
