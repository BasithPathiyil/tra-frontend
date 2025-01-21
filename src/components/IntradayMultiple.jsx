import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import api from "../utils/api";

function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getFormattedHour() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0"); // Gets the current hour
  return hour;
}

function getFormattedMinute() {
  const date = new Date();
  const minute = String(date.getMinutes()).padStart(2, "0"); // Gets the current minute
  return minute;
}

const generateOptions = (start, end) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    const value = i.toString().padStart(2, "0");
    options.push(
      <option key={value} value={value}>
        {value}
      </option>
    );
  }
  return options;
};
export default function IntradayMultiple() {
  const [data, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(getFormattedDate());
  const [hour, setHour] = useState(getFormattedHour());
  const [minute, setMinute] = useState(getFormattedMinute());
  const [counter, setCounter] = useState(1);

  const fetchDatas = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(
        `/stockdata_intraday_last3multiple?time=${date}T${hour}:${minute}:00.000Z`
      );
      setDatas(data.result);
    } catch (error) {
      console.log("error", error);
      toast.error("Error occured");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (counter === 1) {
      return;
    }
    fetchDatas();
  }, [counter]);
  return (
    <div className="">
      <div className="w-full md:w-1/3">
        <div className="full flex gap-2">
          {/* <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          /> */}
          <select value={hour} onChange={(e) => setHour(e.target.value)}>
            {generateOptions(0, 23)}
          </select>
          <select value={minute} onChange={(e) => setMinute(e.target.value)}>
            {generateOptions(0, 59)}
          </select>
          <button
            className="p-1 bg-slate-300 border border-black"
            onClick={() => setCounter(counter + 1)}
          >
            Apply
          </button>
        </div>
        {loading ? (
          "loading ...."
        ) : (
          <div className="w-full">
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border">Bullish</td>
                  <td className="border">Bearish</td>
                </tr>
                <tr>
                  <td className="border align-top">
                    {data?.validStocks?.map((item, i) => (
                      <p className="" key={i}>
                        {item}
                      </p>
                    ))}
                  </td>
                  <td className="border align-top">
                    {data?.validBearishStocks?.map((item, i) => (
                      <p className="" key={i}>
                        {item}
                      </p>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
