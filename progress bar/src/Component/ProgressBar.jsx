import React, { useEffect, useState } from "react";
import { MAX,MIN } from "../Constants/value";

const ProgressBar = ({ value , onComplete = () => {} }) => {
  const [perecnt, setPerecnt] = useState(value);
  

  useEffect(() => {
    setPerecnt(Math.min(MAX, Math.max(value, MIN)));
    if(value >= MAX){
         onComplete();
    }
  }, [value]);

  return (
    <div className="relative overflow-hidden flex items-center justify-center w-[500px] h-[30px] rounded-[10px] bg-slate-400 border-[2px] border-black">
      <span
       style={{color : perecnt>49?"white":"black"}}
       className="font-semibold z-[2] text-xl text-center">
        {perecnt.toFixed()}%
      </span>
      <div
        style={{ width: `${perecnt}%`, transition: "width 0.1s ease-in-out" }}
        className={`h-full   bg-green-600 absolute left-0`}
      />
    </div>
  );
};

export default ProgressBar;
