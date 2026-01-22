import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./Pages/Portfolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
