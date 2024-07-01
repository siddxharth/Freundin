import propTypes from "prop-types";

Home.propTypes = {
    isSignedIn: propTypes.bool,
};

export default function Home({ isSignedIn }) {
    return (
        <div className="container">
            {isSignedIn ? (
                <>
                    <p className="has-text-centered">
                        Hi User! You are logged in!!
                    </p>
                    <div className="container">
                        <a className="button is-primary is-light centered">
                            Logout
                        </a>
                    </div>
                </>
            ) : (
                <>
                    <h1 className="title is-1 is-capitalized has-text-centered">
                        Welcome to Quiz App!
                    </h1>
                    <p className="has-text-centered">
                        Please login to your account to be able to create new
                        quiz dashboards.
                    </p>
                </>
            )}
        </div>
    );
}
