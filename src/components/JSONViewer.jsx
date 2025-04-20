import React, { useEffect, useState } from "react";
import PrettyJsonViewer from "./PrettyJsonViewer";
import { preOpenMarketData } from "../utils/commonFunctions";

const JSONViewer = () => {
  const [data1, setData1] = useState();
  const [inputText, setInputText] = useState("");
  const [times, setTimes] = useState(10);
  const handleChange = async (datas, times) => {
    const returnedValues = await preOpenMarketData(datas, { times });
    console.log("returnedValues", returnedValues);
    setData1(returnedValues);
  };
  useEffect(() => {
    handleChange(inputText, times);
  }, [inputText, times]);
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     fetchData();
  //   }, []);
  //   const fetchData = async () => {
  //     const data = await fetch(
  //       "https://www.nseindia.com/api/market-data-pre-open?key=NIFTY"
  //     );
  //     console.log("data", data);
  //   };

  return (
    <div className="bg-gray-100 p-4 w-full md:w-1/3 rounded overflow-auto text-sm font-mono">
      <div className="w-full">
        <textarea className="w-full" onChange={(e) => setInputText(e.target.value)} />
      </div>
      <input
        type="number"
        value={times}
        onChange={(e) => setTimes(e.target.value)}
      />
      <pre>{JSON.stringify(data1, null, 2)}</pre>
      {/* <PrettyJsonViewer data={data1} /> */}
    </div>
  );
};

export default JSONViewer;
