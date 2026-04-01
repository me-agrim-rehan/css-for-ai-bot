import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatSpace from "./pages/techsupport/ChatSpace";
import Login from "./pages/OpenPages/Login";
import CreateUser from "./pages/OpenPages/admin/CreateUser";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./pages/OpenPages/admin/Dashboard";
import Compose from "./pages/techsupport/Compose";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/dashboard" element={<Dashboard />}  />
        <Route path="/Compose" element={<Compose />}  />
        <Route path="/chat" element={<ChatSpace />}  />
      </Routes>
    </Router>
  );
}

        export default App;
