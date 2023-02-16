import Home from "./Components/home";
import Nav from "./Components/nav";
import Shop from "./Components/shop";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
