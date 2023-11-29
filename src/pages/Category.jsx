import React from 'react'
import "./category.css"

function Category() {
  return (
    <>
   <div className="header"> 
      <img src="../src/assets/banner-category-sillas.jpg" alt="image1" className='img-banner-category-chairs' />
    </div>
    <div className="container">
      <div className="row mb-5 mt-5">
        <div className="col">
         <div className="image-container">
          <img src="../src/assets/alexa_chair.png" alt="image1" className='img-chair img1'  />
          <img src="../src/assets/alexia_chair_ls.webp" alt="image2" className='img-chair img2' />
          <small>Alexa chair</small>
          <small>250 $</small>
        </div>
        </div>
        <div className="col">
          <div className="image-container">
          <img src="../src/assets/charlotte_chair.png" alt="image1" className='img-chair img1' />
          <img src="../src/assets/charlotte-chair-ls.webp" alt="image2" className='img-chair img2' />
          <small>Charlotte chair</small>
          <small>999 $</small>
          </div>
        </div>
        <div className="col">
          <div className="image-container">
          <img src="../src/assets/wallie_chair.png" alt="image1" className='img-chair img1'/>
          <img src="../src/assets/wallie_chair_ls.webp" alt="image1" className='img-chair img2'/>
          <small>Wallie chair</small>
          <small>599 $</small>
        </div>
        </div>
        <div className="col">
          <div className="image-container">
          <img src="../src/assets/liam_chair.png" alt="image1" className='img-chair img1'/>
          <img src="../src/assets/liam_chair_ls.webp" alt="image1" className='img-chair img2'/>
          <small>Liam chair</small>
          <small> 499$</small>
        </div>
        </div>
      </div>
    </div>
 
    </>
  )
}

export default Category