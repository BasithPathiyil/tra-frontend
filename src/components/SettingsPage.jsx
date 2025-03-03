import React, { useEffect, useState } from "react";
import api from "../utils/api";

export default function SettingsPage() {
  const [consolidationPerc, setConsolidationPerc] = useState(0);
  const [consolidationIntervels, setConsolidationIntervels] = useState(0);

  const handleClickUpdate = async (type, value) => {
    let body = {
      type,
      value,
    };
    try {
      const { data } = await api.put("/settings/update-settings", body);
      fetchSettings();
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchSettings = async () => {
    try {
      const { data } = await api.get("/settings/get-settings");
      const consildationPercIndb = data.result.find(
        (item) => item.type === "PERC_CONSOLIDATION"
      );
      const consildationIntIndb = data.result.find(
        (item) => item.type === "INTERVEL_CONSOLIDATION"
      );
      setConsolidationPerc(Number(consildationPercIndb?.value));
      setConsolidationIntervels(Number(consildationIntIndb?.value));
    } catch (error) {
      console.log("Fetch failed");
    }
  };
  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <div className="w-full">
      <div className="flex ">Consolidation Percentage</div>
      <div className="flex ">
        <input
          type="number"
          value={consolidationPerc}
          onChange={(e) => setConsolidationPerc(e.target.value)}
        />
        <button
          onClick={() =>
            handleClickUpdate("PERC_CONSOLIDATION", consolidationPerc)
          }
        >
          Update
        </button>
      </div>
      <div className="flex ">Consolidation Intervels</div>
      <div className="flex ">
        <input
          type="number"
          value={consolidationIntervels}
          onChange={(e) => setConsolidationIntervels(e.target.value)}
        />
        <button
          onClick={() =>
            handleClickUpdate("INTERVEL_CONSOLIDATION", consolidationIntervels)
          }
        >
          Update
        </button>
      </div>
    </div>
  );
}
