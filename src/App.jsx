import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { PortfolioPage,TerminalPage } from "@pages";

const App = () => {
 
  const [historical, setHistorical] = useState([]);
 
  return (
    <BrowserRouter>
      <Routes>
       <Route  path="/terminal"  element={<TerminalPage />} />
       <Route  path="/" element={<PortfolioPage historical={historical} setHistorical={setHistorical}  />} />
       <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
