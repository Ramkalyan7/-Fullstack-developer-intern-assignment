import Table from "./components/Table";
import { Routes, Route } from "react-router-dom";
import User from "./components/User";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/:name" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
