import React from "react";
import {IMG_URL, StockData} from '../util/constants'

const ProductSell = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-lg mt-10 mb-2">
        <div className="flex justify-between mt-10 mb-5">
          <h1 className="mx-4 font-bold text-xl">Product Sell</h1>
          <div className="flex">
            <input
              className="border rounded-lg"
              type="text"
              placeholder="🔍 Search"
            ></input>
            <h1>Last 30 Days</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <h1 className="mx-4 text-zinc-500">product name</h1>
          <div className="flex">
            <div className="mx-4 w-32 text-zinc-500">Stocks</div>
            <div className="mx-4 w-24  text-zinc-500">Price</div>
            <div className="mx-4 w-20 text-zinc-500">Total sales</div>
          </div>
        </div>  
      </div>
      <div>
        {StockData.map((m)=><Product StockData={m} />)}
      </div>
    </div>
  );
};

export default ProductSell;

const Product = ({StockData}) => {

    const{name,
    short_description,
    number_of_stocks,
    price_per_stock,
    total_sales}=StockData

  return (
    <div className="p-4 bg-white">
      <div className="flex justify-between">
          <div className="mx-4 flex">
            <img className="w-16 h-16" src={IMG_URL}></img>
        <div className="ml-3">
        <h1 className=" text-basel font-bold">{name}</h1>
        <p>{short_description}</p>
        </div>
        </div>
        <div className="flex">
        <div className="mx-4 w-32 text-zinc-500">{number_of_stocks+" in stock"}</div>
            <div className="mx-4 w-24 text-base font-bold">{"$"+price_per_stock}</div>
            <div className="mx-4 w-20 text-zinc-500">{total_sales}</div>    
        </div>
      </div>    
    </div>
  );
};
