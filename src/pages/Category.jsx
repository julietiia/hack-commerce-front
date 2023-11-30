import React from "react";
import "../components/css/Category.css";
import { useNavigate, Link } from "react-router-dom";

function Category() {
  const navigate = useNavigate();
  
  return (
    <>
   <div className="header"> 
      <img src="../src/assets/img/banner-category-sillas.jpg" alt="image1" className='img-banner-category-chairs' />
    </div>
    <div className="container">
      <div className="row mb-5 mt-5">
        <div className="col">
         <div className="image-container">
         
          <img onClick={() => navigate("/product/1")} src="../src/assets/img/alexa_chair.png" alt="image1" className='img-chair img1'   />
          <img src="../src/assets/img/alexia_chair_ls.webp" alt="image2" className='img-chair top-img' />
          <small>Alexa chair</small>
          <small>250USD</small>
        </div>
        </div>
        <div className="col">
          <div className="image-container">
          <img src="../src/assets/img/charlotte_chair.png" alt="image1" className='img-chair img1' />
          <img src="../src/assets/img/charlotte-chair-ls.webp" alt="image2" className='img-chair top-img' />
          <small>Charlotte chair</small>
          <small>999USD</small>
          </div>
        </div>
        <div className="col">
          <div className="image-container">
          <img src="../src/assets/img/wallie_chair.png" alt="image1" className='img-chair img1'/>
          <img src="../src/assets/img/wallie_chair_ls.webp" alt="image1" className='img-chair top-img'/>
          <small>Wallie chair</small>
          <small>599USD</small>
        </div>
        </div>
        <div className="col">
          <div className="image-container">
          <img src="../src/assets/img/liam_chair.png" alt="image1" className='img-chair img1'/>
          <img src="../src/assets/img/liam_chair_ls.webp" alt="image1" className='img-chair top-img'/>
          <small>Liam chair</small>
          <small> 499USD</small>
        </div>
        </div>
      </div>
      </div>
    </>
 )
}

export default Category;
