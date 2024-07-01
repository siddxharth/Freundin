import Navbar from "./components/Navbar";

function App() {
    const isSignedIn = true;

    return (
        <>
            <Navbar isSignedIn />
            <div className="container">
                <h1 className="title is-1 is-capitalized has-text-centered">
                    Welcome to Quiz App!
                </h1>
                {!isSignedIn && (
                    <p className="has-text-centered">
                        Please login to your account to be able to create new
                        quiz dashboards.
                    </p>
                )}
            </div>
        </>
    );
}

export default App;
