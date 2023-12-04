import React from "react";
import "./css/Categories.css";
import { useNavigate } from "react-router-dom";
import iconchairs from "../assets/CategoryIcons/iconchairs.png";
import icontables from "../assets/CategoryIcons/icontables.png";
import iconsofas from "../assets/CategoryIcons/iconsofas.png";
import iconlightning from "../assets/CategoryIcons/iconlightning.png";
import iconstorage from "../assets/CategoryIcons/iconstorage.png";
import icondeco from "../assets/CategoryIcons/icondeco.png";

function Categories() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5">
            <h3 className="ps-2">find what you need </h3>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-4">
            <div className="category-box">
              <h3 className="category-name">sofas</h3>
              <img className="" src={iconsofas} alt="sofas" />
            </div>
          </div>
          <div className="col-4">
            <div
              className="category-box"
              onClick={() => navigate("/category/1")}
            >
              <h3 className="category-name">chairs</h3>
              <img className="" src={iconchairs} alt="chairs" />
            </div>
          </div>
          <div className="col-4">
            <div className="category-box">
              <h3 className="category-name">tables</h3>
              <img className="" src={icontables} alt="tables" />
            </div>
          </div>
          <div className="col-4">
            <div className="category-box">
              <h3 className="category-name">storage & organization</h3>
              <img className="" src={iconstorage} alt="storage" />
            </div>
          </div>
          <div className="col-4">
            <div className="category-box">
              <h3 className="category-name">deco</h3>
              <img className="" src={icondeco} alt="storage" />
            </div>
          </div>
          <div className="col-4">
            <div className="category-box">
              <h3 className="category-name">lightning</h3>
              <img className="" src={iconlightning} alt="lightning" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
