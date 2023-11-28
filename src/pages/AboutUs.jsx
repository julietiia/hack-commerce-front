import React from "react";
import Navbar from "../components/Navbar";
import "./AboutUs.css";

function AboutUs() {
<<<<<<< Updated upstream
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
=======
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row mt-4 bg-black text-white">
                    <div className="col-6 rounded pt-5 ">
                        <h2 className="justify-content-center d-flex mt-5">
                            What's apparat?
                        </h2>
                        <p className="pt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur laborum ratione nam, obcaecati et
                            accusantium enim facere dolor, soluta in,
                            consectetur incidunt dolorum porro accusamus atque
                            vitae sapiente voluptates eos. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Repellat veniam,
                            unde rem ullam ipsam tenetur fuga? Ipsam eos
                            necessitatibus consequuntur aliquid obcaecati.
                            Praesentium ad sequi, et laborum aspernatur dolore
                            ab. Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Dolore necessitatibus tempora
                            debitis ea beatae aspernatur sit, quasi quae nihil
                            corrupti. Illum eos corporis modi. Pariatur ipsum
                            tempore tenetur quasi provident!
                        </p>
                    </div>
                    <div className="col-6 img-col bg-black d-flex justify-content-center rounded">
                        <img
                            src="/src/assets/apparat_white-navbar-logo.svg"
                            alt=""
                            className="logo"
                        />
                    </div>
                </div>
          
            {/* <div className="container"> */}
               
                <div className="row rounded tech-row pt-3 text-white ">
                <h2 className="d-flex justify-content-center mt-3 mb-3">
                    Technologies & Tools
                </h2>
                    <div className="col mt-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laborum atque doloribus eligendi dolor.
                            Eveniet alias quia accusantium debitis aliquam ex
                            fuga, dolores qui, placeat eum et recusandae fugit
                            nihil. Dignissimos.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fuga molestiae harum nisi aperiam, repudiandae
                            magni repellendus tempora in, modi ex, nesciunt
                            maxime ad odit quibusdam cum at nobis laudantium
                            unde.
                        </p>
                        <div className="row">
                            <div className="col d-flex justify-content-center align-self-center flex-wrap gap-2">
                                <div className="iconTech">
                                    <i> <img src="../src/assets/tech-icons/bootstrap.png" alt="icon-tech" className="img-icon" /></i>
                                    <small>Bootstrap</small>
                                </div>
                                <div className="iconTech">
                                    <i>
                                        {" "}
                                        <img
                                            src="../src/assets/tech-icons/css3.png"
                                            alt="icon-tech"
                                            className="img-icon"
                                        />
                                    </i>
                                    <small>CSS3</small>
                                </div>
                                <div className="iconTech">
                                <i class="bi bi-github"></i>
                                <small>GitHub</small>
                                </div>
                                <div className="iconTech">
                                <i> <img src="../src/assets/tech-icons/figma.png" alt="icon-tech" className="img-icon" /></i>
                                    <small>Figma</small>
                                </div>
                                <div className="iconTech">
                                <i> <img src="../src/assets/tech-icons/JavaScript.png" alt="icon-tech" className="img-icon" /></i>
                                    <small>JavaScript</small>
                                </div>
                                <div className="iconTech">
                                <i> <img src="../src/assets/tech-icons/NodeJs.png" alt="icon-tech" className="img-icon" /></i>
                                    <small>NodeJS</small>
                                </div>
                                <div className="iconTech">
                                <i> <img src="../src/assets/tech-icons/Redux.png" alt="icon-tech" className="img-icon" /></i>
                                    <small>Redux</small>
                                </div>
                                <div className="iconTech">
                                <i> <img src="../src/assets/tech-icons/react.png" alt="icon-tech" className="img-icon" /></i>
                                    <small>React</small>
                                </div>
                                <div className="iconTech">
                                <i> <img src="../src/assets/tech-icons/discord.png" alt="icon-tech" className="img-icon" /></i>
                                    <small>Discord</small>
                                </div>
                                <div className="iconTech">
                                <i> <img src="../src/assets/tech-icons/Trello.png" alt="icon-tech" className="img-icon" /></i>
                                    <small>Trello</small>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row project-row pt-3 text-white">
                  <h2 className="d-flex justify-content-center mt-3 mb-3">Project Organisation</h2>
                  <img src="../src/assets/figma-mern.png" alt="" />
                </div>
            </div>
        </>
    );
>>>>>>> Stashed changes
}

export default AboutUs;
