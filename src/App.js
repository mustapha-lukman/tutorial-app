import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="*" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
