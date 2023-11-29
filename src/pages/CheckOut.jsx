import React from "react";
import orangelamp from "../assets/orangelamp.webp";
import plumongradiente from "../assets/plumongradiente.webp";

function CheckOut() {
  return (
    <>
      <div className="container-fluid ">
        <div className="mt-3">
          <p>These articles are not reserved until they have been completed.</p>
        </div>
        <div className="row d-flex flex-nowrap">
          <div className="col-8 shopping-list">
            <div className="shopping-list-product">
              <img src={orangelamp} alt="" />
              <p className="product-name">Ansel Glass Table Lamp</p>
              <p className="product-price">000.00UYU</p>
              <p className="product-sku">Ref.53494878</p>
            </div>
            <div className="shopping-list-product">
              <img src={plumongradiente} alt="" />
              <p className="product-name">Metallic Nylon Comforter</p>
              <p className="product-price">000.00UYU</p>
              <p className="product-sku">Ref.53494878</p>
            </div>
          </div>

          <div className="col-4 shopping-cart-details">
            <h4>2 products</h4>
            <table className="table table-borderless fl">
              <tbody>
                <tr>
                  
                  <td>Ansel Glass Table Lamp</td>
                  <td>000.00UYU</td>
                </tr>
                <tr>
                  <td>Metallic Nylon Comforter</td>
                  <td>000.00UYU</td>
                </tr>
                <tr>
                  <td className="total">TOTAL</td>
                  <td className="total">000.00UYU</td>
                </tr>
              </tbody>
            </table>
            <div className="my-3 checkout-buttons">
              <button type="button" className="btn action-button">
                Empty cart
              </button>
              <button type="button" className="btn action-button ms-2">
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
