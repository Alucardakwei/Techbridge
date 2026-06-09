import { BrowserRouter, Route, Routes } from "react-router-dom";
import TechBridgePage from "./pages/TechBridge";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TechBridgePage />} />
      </Routes>
    </BrowserRouter>
  );
}
