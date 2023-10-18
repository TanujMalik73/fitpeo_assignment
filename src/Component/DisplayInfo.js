import React from "react";
import { data } from "../util/constants";

const DisplayInfo = ({checkmonth}) => {
  return (
    <div>
      <div className="flex justify-evenly">
        <DisplayData
          name={"Earning"}
          diff={
            data.labels[checkmonth].earning -
            data.labels[checkmonth - 1].earning
          }
          colour={"rgb(0,172,78)"}
          path={
            "M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
          }
          checkmonth={data.labels[checkmonth].earning}
        />
        <DisplayData
          name={"Orders"}
          diff={
            data.labels[checkmonth].order - data.labels[checkmonth - 1].order
          }
          colour={"rgb(162,0,255)"}
          path={
            "M15,6H9A1,1,0,0,0,8,7v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V7A1,1,0,0,0,15,6Zm-1,4H10V8h4Zm3-8H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Zm1,17a1,1,0,0,1-1,1H6V4H17a1,1,0,0,1,1,1Z"
          }
          checkmonth={data.labels[checkmonth].order}
        />
        <DisplayData
          name={"Balance"}
          diff={
            data.labels[checkmonth].balance -
            data.labels[checkmonth - 1].balance
          }
          colour={"rgb(9,90,192)"}
          path={
            "M7,16a1,1,0,1,0,1,1A1,1,0,0,0,7,16Zm12.06-4,1.23-1.23a3,3,0,0,0,0-4.24L17.46,3.71a3,3,0,0,0-4.24,0L12,4.94A3,3,0,0,0,9,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A3,3,0,0,0,19.06,12ZM10,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H9a1,1,0,0,1,1,1ZM12,7.76l2.64-2.64a1,1,0,0,1,1.41,0L18.88,8a1,1,0,0,1,0,1.41L16,12.29h0L12,16.24ZM20,19a1,1,0,0,1-1,1H11.82a3.12,3.12,0,0,0,.17-.92L17.07,14H19a1,1,0,0,1,1,1Z"
          }
          checkmonth={data.labels[checkmonth].balance}
        />
        <DisplayData
          name={"Total Sales"}
          diff={
            data.labels[checkmonth].totalsale -
            data.labels[checkmonth - 1].totalsale
          }
          colour={"rgb(215,0,11)"}
          path={
            "M21,6H17V5a3,3,0,0,0-3-3H10A3,3,0,0,0,7,5V6H3A1,1,0,0,0,2,7v4a3,3,0,0,0,1,2.22V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V13.22A3,3,0,0,0,22,11V7A1,1,0,0,0,21,6ZM9,5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V6H9ZM19,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14H7v1a1,1,0,0,0,2,0V14h6v1a1,1,0,0,0,2,0V14h2Zm1-8a1,1,0,0,1-1,1H17V11a1,1,0,0,0-2,0v1H9V11a1,1,0,0,0-2,0v1H5a1,1,0,0,1-1-1V8H20Z"
          }
          checkmonth={data.labels[checkmonth].totalsale}
        />
      </div>
    </div>
  );
};

export default DisplayInfo;

const DisplayData = ({ name, diff, colour, path ,checkmonth }) => {
    return (
      <div>
        <div className="py-10 px-4 w-72 h-44 bg-white rounded-lg flex">
          <div className="mr-4 w-24 h-24 flex bg-green-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 34 34">
              <path fill={colour} d={path}></path>
            </svg>
          </div>
          <div>
            <h1 className="text-gray-400">{name}</h1>
            <h1 className="font-bold text-xl">{"$"+checkmonth}</h1>
            {diff>0?<span className="text-green-700 font-bold">{"⬆"+diff}</span>:
            <span className="text-red-600 font-bold">{"⬇"+diff}</span>}
            <span> this month</span>
          </div>
        </div>
      </div>
    );
  };