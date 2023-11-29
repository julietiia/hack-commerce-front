import React from "react";
import "../components/css/Admin.css";
import apparatNavbar from "../assets/logo/apparatNavbar.png";

function Admin() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="adminH2">admin</h2>
          </div>
          <div className="col-2 sidebar">
            {/* <div >
              <img id="adminLogo" src={apparatNavbar} alt="apparatLogo" />
            </div> */}
            <ul className="adminUl">
              <li >
                <button className="adminButton btn text-white">
                  <i className="adminI bi bi-bar-chart-line"></i> dashboard
                </button>
              </li>
              <li>
                <button className="adminButton btn text-white">
                  <i className="adminI bi bi-box-seam"></i> products
                </button>
              </li>
              <li>
                <button className="adminButton btn text-white">
                  <i className="adminI bi bi-grid"></i> categories
                </button>
              </li>
              <li>
                <button className="adminButton btn text-white">
                  <i className="adminI bi bi-cart3"></i>orders
                </button>
              </li>
              <li>
                <button className="adminButton btn text-white">
                  <i className="adminI bi bi-people"></i> customers
                </button>
              </li>

              <li>
                <button className="adminButton btn text-white">
                  <i className="adminI bi bi-box-arrow-right"></i>log out
                </button>
              </li>
            </ul>
          </div>

          <div className="col-10 adminTable">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">description</th>
                  <th scope="col">images</th>
                  <th scope="col">edit/delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>silla</td>
                  <td>
                    La silla es un mueble que suele tener un respaldo,
                    generalmente cuenta con dos, cuatro o cinco apoyos y su
                    finalidad es la de servir de asiento a una persona.​
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>sillones</td>
                  <td>
                    La silla es un mueble que suele tener un respaldo,
                    generalmente cuenta con dos, cuatro o cinco apoyos y su
                    finalidad es la de servir de asiento a una persona.​
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>lamparas</td>
                  <td>
                    La silla es un mueble que suele tener un respaldo,
                    generalmente cuenta con dos, cuatro o cinco apoyos y su
                    finalidad es la de servir de asiento a una persona.​
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>mesas</td>
                  <td>
                    La silla es un mueble que suele tener un respaldo,
                    generalmente cuenta con dos, cuatro o cinco apoyos y su
                    finalidad es la de servir de asiento a una persona.​
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>storage & organisation</td>
                  <td>
                    La silla es un mueble que suele tener un respaldo,
                    generalmente cuenta con dos, cuatro o cinco apoyos y su
                    finalidad es la de servir de asiento a una persona.​
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>top rated</td>
                  <td>
                    La silla es un mueble que suele tener un respaldo,
                    generalmente cuenta con dos, cuatro o cinco apoyos y su
                    finalidad es la de servir de asiento a una persona.​
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="adminTable"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
