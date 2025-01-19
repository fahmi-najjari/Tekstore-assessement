import React from 'react';

function Navbar({setView}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> 
   
      <div className="container">
        <a className="navbar-brand" href="#"     style={{cursor:'pointer'}} onClick={()=>{setView('Home')}} >Tek store</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"  style={{cursor:'pointer'}} onClick={()=>{setView('Home')}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  style={{cursor:'pointer'}} onClick={()=>{setView('products')}} >Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  style={{cursor:'pointer'}} onClick={()=>{setView('contact')}} >Contact</a>
            </li>
          </ul>
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
