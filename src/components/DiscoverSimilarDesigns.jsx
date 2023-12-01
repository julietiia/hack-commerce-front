import React from "react";

function DiscoverSimilarDesigns() {
  return (
    <div className="row g-3 similar-design-background mx-auto">
      <div className="col-6 col-sm-6 col-md-3 ">
        <img
          className="image-product-suggested mb-2"
          src="/src/assets/img/liam_chair.webp"
          alt=""
        />
        <p className="text-similar-design-name">Liam Chair</p>
        <p className="text-similar-design-price">999USD</p>
      </div>

      <div className="col-6 col-sm-6 col-md-3">
        <div>
          <img
            className="image-product-suggested mb-2"
            src="/src/assets/img/floria_chair.webp"
            alt=""
          />
          <p className="text-similar-design-name">Floria Chair</p>
          <p className="text-similar-design-price">999USD</p>
        </div>
      </div>

      <div className="col-6 col-sm-6 col-md-3 mb-5">
        <div>
          <img
            className="image-product-suggested mb-2"
            src="/src/assets/img/charlotte_chair.png"
            alt=""
          />
          <p className="text-similar-design-name">
            Charlotte Chair
          </p>
          <p className="text-similar-design-price">999USD</p>
        </div>
      </div>

      <div className="col-6 col-sm-6 col-md-3">
        <div>
          <img
            className="image-product-suggested mb-2"
            src="/src/assets/img/wallie_chair.png"
            alt=""
          />
          <p className="text-similar-design-name">
            Wallie curvature Chair
          </p>
          <p className="text-similar-design-price">999USD</p>
        </div>
      </div>
    </div>
  );
}

export default DiscoverSimilarDesigns;
