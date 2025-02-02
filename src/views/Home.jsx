import React, { useState } from "react";
import Consolidations from "../components/Consolidations";
import IntradayMultiple from "../components/IntradayMultiple";
import PreopenMarket from "../components/PreopenMarket";

export default function Home() {
  const [active, setActive] = useState("consolidation");
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
      </div>
      {active === "consolidation" ? (
        <Consolidations />
      ) : active === "intradaymultiple" ? (
        <IntradayMultiple />
      ) : active === "preopen" ? (
        <PreopenMarket />
      ) : null}
    </div>
  );
}
