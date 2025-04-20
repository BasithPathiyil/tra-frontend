import React, { useEffect, useState } from "react";
import Consolidations from "../components/Consolidations";
import IntradayMultiple from "../components/IntradayMultiple";
import PreopenMarket from "../components/PreopenMarket";
import api from "../utils/api";
import SettingsPage from "../components/SettingsPage";
import JSONViewer from "../components/JSONViewer";

export default function Home() {
  const [active, setActive] = useState("consolidation");
  useEffect(() => {
    // Function to call the API
    const fetchData = async () => {
      try {
        const response = await api.get("/");
        const data = await response.json();
        console.log("API Data:", data);
      } catch (error) {
        console.error("Error fetching API:", error);
      }
    };

    // Call API immediately and then every 5 minutes (300000 ms)
    fetchData();
    const interval = setInterval(fetchData, 300000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2">
      <div className="w-full md:w-1/3 flex gap-2">
        <button
          className={`px-2 border border-black ${
            active === "consolidation" ? "bg-slate-500" : "bg-slate-300"
          }`}
          onClick={() => setActive("consolidation")}
        >
          Consolidation
        </button>
        <button
          className={`px-2 border border-black ${
            active === "intradaymultiple" ? "bg-slate-500" : "bg-slate-300"
          }`}
          onClick={() => setActive("intradaymultiple")}
        >
          Intraday/Multiple
        </button>
        <button
          className={`px-2 border border-black ${
            active === "preopen" ? "bg-slate-500" : "bg-slate-300"
          }`}
          onClick={() => setActive("preopen")}
        >
          Preopen
        </button>
        <button
          className={`px-2 border border-black ${
            active === "settings" ? "bg-slate-500" : "bg-slate-300"
          }`}
          onClick={() => setActive("settings")}
        >
          S
        </button>
        <button
          className={`px-2 border border-black ${
            active === "j" ? "bg-slate-500" : "bg-slate-300"
          }`}
          onClick={() => setActive("j")}
        >
          J
        </button>
      </div>
      {active === "consolidation" ? (
        <Consolidations />
      ) : active === "intradaymultiple" ? (
        <IntradayMultiple />
      ) : active === "preopen" ? (
        <PreopenMarket />
      ) : active === "settings" ? (
        <SettingsPage />
      ) : active === "j" ? (
        <JSONViewer />
      ) : null}
    </div>
  );
}
