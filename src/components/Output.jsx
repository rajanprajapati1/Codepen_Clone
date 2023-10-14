import React from "react";

const Output = ({ OutputContent}) => {
  
  return (
    <div className="output_box">
    <h2>Output</h2>
      <iframe
        title="Output"
        srcDoc={OutputContent}
        height="400"
        width="100%"
      />
    </div>
  );
};

export default Output;
