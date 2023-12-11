import { React, useEffect, useState } from "react";
import "./css/Categories.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import iconchairs from "../assets/CategoryIcons/iconchairs.png";
// import icontables from "../assets/CategoryIcons/icontables.png";
// import iconsofas from "../assets/CategoryIcons/iconsofas.png";
// import iconlightning from "../assets/CategoryIcons/iconlightning.png";
// import iconstorage from "../assets/CategoryIcons/iconstorage.png";
// import icondeco from "../assets/CategoryIcons/icondeco.png";
import Subscription from "./Subscription";

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    const getCategories = async () => {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_PORT_URL}/categories`,
      });
      setCategories(response.data.categories);
     
    };
   
    getCategories();
  }, []);
      

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mt-5">
            <h2 className="ps-2">Find what you need </h2>
          </div>
        </div>
        <div className="row my-3">
        {categories.map((category) => (
          <div className="col-xl-4 col-md-6 " key={category.id}>
          
                  <div 
                  className="category-box"
                  onClick={() => navigate(`/category/${category.id}`)}
                >
                  <h4 className="category-name">
                    {category.name}<i className="bi bi-arrow-up-right arrow"></i>
                  </h4>
    
                  <img className="" src={`${
            import.meta.env.VITE_IMAGES_URL
          }products/${category.imageIcon}`} alt="" />
                </div>
                  
           
          </div>
           ))}
        </div>
      </div>
      
    </>
  );
}

export default Categories;
