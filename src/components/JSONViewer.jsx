import React, { useEffect, useState } from "react";
import PrettyJsonViewer from "./PrettyJsonViewer";
import { preOpenMarketData } from "../utils/commonFunctions";
import api2 from "../utils/api2";
import axios from "axios";
import api from "../utils/api";

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
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.nseindia.com/api/market-data-pre-open?key=NIFTY"
      );
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleClickNifty = async (type) => {
    let url = `https://www.nseindia.com/api/market-data-pre-open?key=${type}`;
    try {
      const data = await api.get(`/common/fetch-api?url=${url}`);
    } catch (error) {
      console.log("error", error);
    }
    // window.open(
    //   `https://www.nseindia.com/api/market-data-pre-open?key=${type}`,
    //   "_blank"
    // );
  };
  return (
    <div className="bg-gray-100 px-4 py-2 w-full md:w-1/3 rounded overflow-auto text-sm font-mono">
      <div className="p-2 flex gap-2">
        <button
          className="bg-purple-500 px-2 py-1"
          onClick={() => handleClickNifty("NIFTY")}
        >
          NIFTY
        </button>
        <button
          className="bg-purple-500 px-2 py-1"
          onClick={() => handleClickNifty("ALL")}
        >
          ALL
        </button>
      </div>
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
      <pre>{JSON.stringify(data1, null, 2)}</pre>
      {/* <PrettyJsonViewer data={data1} /> */}
    </div>
  );
};

export default JSONViewer;
