import { Routes, Route } from "react-router-dom";
import "./App.css";
import NewsPage from "./pages/NewsPage";
import Sport from "./pages/Sport";

import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
