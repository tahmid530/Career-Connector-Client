

const Blog = () => {
    return (
        <div className="border-4 border-black m-8 rounded-xl p-4">
            <h3 className="text-3xl font-semibold">Q. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
            <br />
            <p className="text-lg">
                Ans: Access Token: Used for temporary authentication and resource access.
                Refresh Token: Used to renew the Access Token when it expires. Store Access Token on the client temporarily (e.g., in memory or cookies) and store Refresh Token securely on the server.
            </p>
            <br />
            <br />

            <h3 className="text-3xl font-semibold">Q. What is express js? What is Nest JS?</h3>
            <br />
            <p className="text-lg">
                Ans: Express.js: A minimal Node.js framework for web applications and APIs.
                <br />
                Nest.js: A structured Node.js framework for building scalable applications, built on top of Express.
            </p>
            <br />
            <br />

            <h3 className="text-3xl font-semibold">Q. Explain your code.</h3>
            <br />
            <p className="text-lg">
                Ans: Access Token: Used for temporary authentication and resource access.
                Refresh Token: Used to renew the Access Token when it expires. Store Access Token on the client temporarily (e.g., in memory or cookies) and store Refresh Token securely on the server.
            </p>

        </div>
    );
};

export default Blog;