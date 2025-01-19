import React from "react";

function ProductDetails({ product, setView }) {
    console.log('product in product details',product)
    if (!product) {
        return <div>No product selected.</div>;
      }
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row no-gutters">
          
          <div className="col-md-4">
            <img
              src={product.imageUrl} /************************************* */
              className="card-img"
              alt={product.name}
            />
          </div>

          
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{product.name}</h3>  
              <p className="card-text">
                <strong>Price:</strong> ${product.price || "N/A"}
              </p>

            
              <ul className="nav nav-tabs" id="productTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    href="#description"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    href="#reviews"
                    role="tab"
                  >
                    Reviews
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="specs-tab"
                    data-bs-toggle="tab"
                    href="#specs"
                    role="tab"
                  >
                    Specifications
                  </a>
                </li>
              </ul>

            
              <div className="tab-content mt-3" id="productTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                >
                  <p>{product.description || "No description available."}</p>
                </div>
                <div className="tab-pane fade" id="reviews" role="tabpanel">
                  <p>Customer reviews go here.</p>
                </div>
                <div className="tab-pane fade" id="specs" role="tabpanel">
                  <p>Product specifications go here.</p>
                </div>
              </div>

              
              <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn btn-secondary"
                  onClick={() => setView("products")} /************************************************** */
                >
                  Back to Products
                </button>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails
