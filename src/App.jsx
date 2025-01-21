import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";
import IntradayMultiple from "./components/IntradayMultiple";
import Home from "./views/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
