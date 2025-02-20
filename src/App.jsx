import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { PortfolioPage } from "./pages";
import TerminalPage from "./pages/TerminalPage";

const App = () => {
 
  const [historical, setHistorical] = useState([]);
 
  return (
    <BrowserRouter>
      <Routes>
       <Route  path="/Portfolio/terminal" element={<TerminalPage />} />
       <Route  path="/:id" element={<PortfolioPage historical={historical} setHistorical={setHistorical}  />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
