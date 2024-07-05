import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AuthProvider from "./AuthContext";
import User from "./pages/User";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/user"
                        element={<PrivateRoute element={User} />}
                    />
                    <Route path="/" element={<Home />} />
                    <Route element={<>Not Found</>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}
