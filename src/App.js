import Homepage from "./Pages/Homepage/homepage.component";
import { Routes, Route } from "react-router-dom";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
