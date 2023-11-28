import React from "react";
import Navbar from "../components/Navbar";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-6 border rounded pt-3">
            <h1>What's apparat?</h1>
            <p className="pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur laborum ratione nam, obcaecati et accusantium enim
              facere dolor, soluta in, consectetur incidunt dolorum porro
              accusamus atque vitae sapiente voluptates eos. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repellat veniam, unde rem
              ullam ipsam tenetur fuga? Ipsam eos necessitatibus consequuntur
              aliquid obcaecati. Praesentium ad sequi, et laborum aspernatur
              dolore ab. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dolore necessitatibus tempora debitis ea beatae aspernatur
              sit, quasi quae nihil corrupti. Illum eos corporis modi. Pariatur
              ipsum tempore tenetur quasi provident!
            </p>
          </div>
          <div className="col-6 bg-black d-flex justify-content-center rounded">
            <img
              src="/src/assets/apparat_white-navbar-logo.svg"
              alt=""
              className="logo"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="d-flex justify-content-center mt-4">
          Technologies & Tools
        </h2>
        <div className="row border rounded tech-row mt-3 d- ">
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              atque doloribus eligendi dolor. Eveniet alias quia accusantium
              debitis aliquam ex fuga, dolores qui, placeat eum et recusandae
              fugit nihil. Dignissimos.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              molestiae harum nisi aperiam, repudiandae magni repellendus
              tempora in, modi ex, nesciunt maxime ad odit quibusdam cum at
              nobis laudantium unde.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              velit ducimus tempora sequi repudiandae excepturi illo aspernatur,
              dignissimos praesentium suscipit dolor totam, ipsum incidunt
              consectetur, sed eius laudantium possimus cum?
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
