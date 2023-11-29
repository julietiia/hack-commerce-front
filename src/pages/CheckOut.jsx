import React from "react";
import orangelamp from "../assets/orangelamp.webp";
import plumongradiente from "../assets/plumongradiente.webp";
import whitechair from "../assets/whitechair.webp";

function CheckOut() {
  return (
    <>
      <div className="container-fluid ">
        <div className="mt-3">
          <p className="checkout-warning">
            These articles are not reserved until they have been completed.
          </p>
        </div>
        <div className="row d-flex flex-nowrap">
          <div className="col-8 shopping-list">
            <div className="shopping-list-product">
              <img src={orangelamp} alt="" />
              <div className="product-info">
                <div className="quantity mb-0">
                  <p className="btn m-0">-</p>
                  <p className="m-0">1</p>
                  <p className="btn m-0">+</p>
                </div>
                <div className="product-identifier">
                  <p className="product-name">Ansel Glass Table Lamp</p>
                  <p className="product-price">000.00UYU</p>
                  <p className="product-sku">Ref.53494878</p>
                </div>
              </div>
            </div>
            <div className="shopping-list-product">
              <img src={plumongradiente} alt="" />
              <div className="product-info">
                <div className="quantity mb-0">
                  <p className="btn m-0">-</p>
                  <p className="m-0">1</p>
                  <p className="btn m-0">+</p>
                </div>
                <div className="product-identifier">
                  <p className="product-name">Metallic Nylon Comforter</p>
                  <p className="product-price">000.00UYU</p>
                  <p className="product-sku">Ref.53494878</p>
                </div>
              </div>
            </div>
            <div className="shopping-list-product">
              <img src={whitechair} alt="" />
              <div className="product-info">
                <div className="quantity mb-0">
                  <p className="btn m-0">-</p>
                  <p className="m-0">1</p>
                  <p className="btn m-0">+</p>
                </div>
                <div className="product-identifier">
                  <p className="product-name">Bubble Chair</p>
                  <p className="product-price">000.00UYU</p>
                  <p className="product-sku">Ref.53494878</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 shopping-cart-details">
            <h4>3 products</h4>
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <td>Ansel Glass Table Lamp</td>
                  <td>000.00UYU</td>
                  <td>
                    <i className="bi bi-trash3 delete-froom-chekout"></i>
                  </td>
                </tr>
                <tr>
                  <td>Metallic Nylon Comforter</td>
                  <td>000.00UYU</td>
                  <td>
                    <i className="bi bi-trash3 delete-froom-chekout"></i>
                  </td>
                </tr>
                <tr>
                  <td>Bubble Chair</td>
                  <td>000.00UYU</td>
                  <td>
                    <i className="bi bi-trash3 delete-froom-chekout"></i>
                  </td>
                </tr>
                <tr>
                  <td className="total">TOTAL</td>
                  <td className="total">000.00UYU</td>
                </tr>
              </tbody>
            </table>
            <div className="my-3 checkout-buttons">
              <button className="addtocart-button rounded btn btn-dark text-select">
                Empty cart
              </button>
              <button className="addtocart-button rounded btn btn-dark text-select ms-2">
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
