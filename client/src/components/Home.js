import React from "react";
function Home({ setView }) {
    return (
      <div className="container mt-4">
        <h1>Welcome to MyStore</h1>
        <p>Discover the best products available at unbeatable prices.</p>
  
       
        <button
          className="btn btn-primary"
          onClick={() => setView('products')}
        >
          View Products
        </button>
      </div>
    );
  }
  
  export default Home;