import Header from "./components/Header";
import Home from "./pages/Home";
import Loguin from "./pages/Loguin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loguin" element={<Loguin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
