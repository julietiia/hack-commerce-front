import React from "react";

function Categories() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 mt-5 pt-4 category-box text-center">
            <img className="img-fluid sofa" src="/src/assets/sofa.png" alt="sofas" />
            <p>sofas</p>
          </div>
          <div className="col-4 category-box text-center">
            <img
              className="img-fluid"
              src="/src/assets/chair.png"
              alt="chairs"
            />
            <p>chairs</p>
          </div>
          <div className="col-4 category-box text-center">
            <img
              className="img-fluid"
              src="/src/assets/tables.png"
              alt="tables"
            />
            <p>tables</p>
          </div>
            <div className="col-4 category-box text-center">
              <img
                className="img-fluid"
                src="/src/assets/rack.png"
                alt="storage"
              />
              <p>storage & organization</p>
            </div>
            <div className="col-4 category-box text-center">
              <img
                className="img-fluid"
                src="/src/assets/rack.png"
                alt="storage"
              />
              <p>storage & organization</p>
            </div>
            <div className="col-4 category-box text-center">
              <img
                className="img-fluid"
                src="/src/assets/metallic_lamppng.png"
                alt="lightning"
              />
              <p>lightning</p>
            </div>
          </div>
        </div>

    </>
  );
}

export default Categories;
