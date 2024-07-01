import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <RoutesWithNavbar />
        </BrowserRouter>
    );
}

function RoutesWithNavbar() {
    const location = useLocation();
    const isSignedIn = true; // Assuming you have a way to determine if a user is signed in

    return (
        <>
            {location.pathname !== "/not-found" && (
                <Navbar isSignedIn={isSignedIn} />
            )}
            <Routes>
                <Route path="/" element={<Home isSignedIn={isSignedIn} />} />
                <Route
                    path="/dashboard"
                    element={isSignedIn ? <Dashboard /> : <Navigate to="/" />}
                />
                <Route
                    path="/user"
                    element={isSignedIn ? <Dashboard /> : <Navigate to="/" />} //Change to User component
                />
                <Route
                    path="/new-quiz"
                    element={isSignedIn ? <Dashboard /> : <Navigate to="/" />} //Change to NewQuiz component
                />
                {/* Redirect to not-found for any unknown routes */}
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
        </>
    );
}

export default App;
