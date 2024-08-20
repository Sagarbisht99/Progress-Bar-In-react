import React, { useEffect, useState } from "react";
import ProgressBar from "./Component/ProgressBar";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-black font-bold text-2xl text-center">
        Progress Bar
      </h1>
      <ProgressBar 
      value={value}
      onComplete = {() => setSuccess(true) } />

      <span className="text-xl font-bold">{success?"Completed!":"Loading..."}</span>
    </div>
    
  );
}

export default App;
