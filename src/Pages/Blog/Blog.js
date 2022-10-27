import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
    <div className='question-container'>

        <div className='question w-75 m-auto'>
            <h1 className="text-center">Question And Anwser</h1>
            <h4>1. what is cors ?</h4>
            <strong>ans:</strong><p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>       
            <h4>2.  Why are you using firebase? What other options do you have to implement authentication?</h4>
                <strong>ans:</strong><p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <h4>3. How does the private route work?</h4>
                <strong>ans:</strong><p>
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
            </p>
            <h4>3. What is Node? How does Node work?</h4>
                <strong>ans:</strong><p>
                Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
            </p>

        </div>
    </div>
    );
};

export default Blog;