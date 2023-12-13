import React, { useEffect, useState } from "react";
import ApparatBlack from "../assets/logo/ApparatBlack.png";
import "../components/css/Navbar.css";
import axios from "axios";

function NavbarDos() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
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
    <div className="nav-container">
      <div className="container">
        <div className="navbar-body">
          <div className="brand-pages-body">
            <img src={ApparatBlack} alt="" className="nav-logo" />
            <div className="pages">
              <p>home</p>
              <p>shop</p>
              <p>about this project</p>
              <div className="dropdown">
                <button>categories</button>

                {/* <div className="dropdown-content">
                  {categories.map((category) => (
                    <a href={`/category/${category.id}`}>{category.name}</a>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
          <div className="user-body">
            <i class="bi bi-search"></i>
            <i class="bi bi-cart"></i>
            <i class="bi bi-person"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarDos;
