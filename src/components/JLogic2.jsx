import React, { useEffect, useState } from "react";
import PrettyJsonViewer from "./PrettyJsonViewer";
import { preOpenMarketData, shootUpStocks } from "../utils/commonFunctions";
import api2 from "../utils/api2";
import axios from "axios";
import api from "../utils/api";

const JLogic2 = () => {
  const [data1, setData1] = useState();
  const [inputText, setInputText] = useState("");
  const [times, setTimes] = useState(2);
  const [multiplies, setMultiplies] = useState(5);
  const handleChange = async (datas, times, multiplies) => {
    const returnedValues = await shootUpStocks(datas, { times, multiplies });
    console.log("returnedValues", returnedValues);
    setData1(returnedValues);
  };
  useEffect(() => {
    handleChange(inputText, times, multiplies);
  }, [inputText, times, multiplies]);
  //   const [data, setData] = useState(null);

  return (
    <div className="bg-gray-100 px-4 py-2 w-full md:w-1/3 rounded overflow-auto text-sm font-mono">
      <div className="w-full">
        <textarea
          className="w-full"
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <input
        type="number"
        value={times}
        onChange={(e) => setTimes(e.target.value)}
      />
      <input
        type="number"
        value={multiplies}
        onChange={(e) => setMultiplies(e.target.value)}
      />
      <pre>{JSON.stringify(data1, null, 2)}</pre>
      {/* <PrettyJsonViewer data={data1} /> */}
    </div>
  );
};

export default JLogic2;
