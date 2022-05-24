import Homepage from "./Pages/Homepage/homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/shop/shop.component";
import "./App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shoppage" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
