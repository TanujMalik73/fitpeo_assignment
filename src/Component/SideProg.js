import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SideProg = ({checkmonth}) => {
  return (
    <div>
      <div  className="absolute mt-6" style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={checkmonth} />
      </div>
        <h1 className="ml-16 pt-20 relative font-bold text-xl">{checkmonth+"%"}</h1>
        <h1 className="ml-16 w-14">Total Customers</h1>
    </div>
  );
};

export default SideProg;
