import React, { useState } from "react";
import { data } from "../util/constants";
import DisplayInfo from "./DisplayInfo";
import ProductSell from "./ProductSell";
import SideProg from "./SideProg";
const MainContainer = () => {
  const [checkmonth, setcheckmonth] = useState(9);
  return (
    <div className="col-span-10 px-10 bg-gray-100 ml-40">
      <div className="flex justify-between my-8">
        <h1 className="font-bold text-2xl">Hello User 👋🏻</h1>
        <input
          className="border rounded-lg"
          type="text"
          placeholder="🔍 Search"
        ></input>
      </div>
      <DisplayInfo checkmonth={checkmonth} />
      <div className="flex h-[400px] mt-5">
        <div className=" bg-white mr-10 w-[60vw] rounded-lg">
          <div className="p-4">
            <h1 className="font-bold text-xl">Overview</h1>
            <h1 className="text-base">Monthly Earning</h1>
          </div>
          <div className="flex p-4">
            {data.labels.map((m) => (
              <div
                onClick={() => {
                  setcheckmonth(m.id);
                }}
              >
                <BarChart key={m.id} month={m.month} height1={m.height} />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white w-[17vw] rounded-lg px-10 pt-5">
          <h1 className="font-bold text-xl">Customers</h1>
          <h1 className="text-zinc-400">Customers that buy products</h1>
          <SideProg checkmonth={data.labels[checkmonth].totalsale} />
        </div>
      </div>
      <ProductSell />
    </div>
  );
};

export default MainContainer;

const BarChart = ({ month, height1 }) => {
  // console.log(height);
  return (
    <div>
      <div
        className="w-12 bg-purple-100 rounded-xl border border-purple-200 m-2 hover:bg-blue-500"
        style={{ height: height1 + "px", marginTop: 250 - height1 + "px" }}
      ></div>
      <h2 className="m-3">{month}</h2>
    </div>
  );
};
