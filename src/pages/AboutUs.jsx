import React from "react";
import "../components/css/AboutUs.css";
import diagrama from "../assets/img/diagrama.png"

function AboutUs() {
    return (
        <>
          
            <div className="container">
                <div className="row mt-4 ">
                    <div className="col d-flex justify-content-center align-self-center flex-wrap">
                        <h2 className="justify-content-center d-flex mt-5">
                            What's apparat?
                        </h2>
                        <p className="pt-3">
                        At apparat, we're dedicated to offering high-quality furniture crafted with love. We want every moment you spend sitting, lounging, or simply enjoying your space to be filled with comfort and style, knowing that what you choose for your home is not only beautiful but also thoughtfully made. We appreciate being a part of your daily life, and we take that commitment seriously. We believe that furniture can be more than just functional pieces; they can be sources of comfort, inspiration, and creativity in every corner of your home.
                        </p>
                    </div>
                    <div className="col-6 img-col d-flex justify-content-center ">
                        <img
                            src="/src/assets/logo/apparat_white-navbar-logo.svg"
                            alt=""
                            className="logo"
                        />
                    </div>
                </div>
          
            {/* <div className="container"> */}
               
                <div className="row mt-5 tech-row pt-3 text-white ">
                <h2 className="d-flex justify-content-center mt-3 mb-3">
                    Technologies & Tools
                </h2>
                    <div className="col mt-3">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Laborum atque doloribus eligendi dolor.
                            Eveniet alias quia accusantium debitis aliquam ex
                            fuga, dolores qui, placeat eum et recusandae fugit
                            nihil. Dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam blanditiis ipsum provident error repudiandae accusamus quidem alias dignissimos. Harum voluptatem, porro ullam possimus animi blanditiis beatae eaque quidem inventore.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Fuga molestiae harum nisi aperiam, repudiandae
                            magni repellendus tempora in, modi ex, nesciunt
                            maxime ad odit quibusdam cum at nobis laudantium
                            unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus facere ex obcaecati, necessitatibus neque cupiditate repudiandae autem fugiat assumenda tempore velit natus sit atque voluptates quos dolores accusantium consequuntur nesciunt!
                        </p>
                        <div className="row pb-3">
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
                <div className="row project-row pt-3 text-white mt-5">
                  <h2 className="text-black d-flex justify-content-center my-3">Project Organization</h2>
                  <img src={diagrama} alt="" />
                </div>
                <div className="row team-row pt-3 text-white mt-5 mb-5">
                          <h2 className="d-flex justify-content-center mt-3 mb-3"> Our team</h2>
                          <div className="col  d-flex justify-content-center align-self-center flex-wrap gap-4 mb-5">
                            <div className="team-pic">
                            <img src="../src/assets/our-teamPic/nick.jpg" alt="" className="rounded-circle img-team-member" />
                            <small>Vanina</small>
                            </div>
                            <div className="team-pic">
                            <img src="../src/assets/our-teamPic/howie.jpg" alt="" className="rounded-circle img-team-member" />
                            <small>Julieta</small>
                            </div>
                            <div className="team-pic">
                            <img src="../src/assets/our-teamPic/kevin.jpg" alt="" className="rounded-circle img-team-member" />
                            <small>Helmuth</small>
                            </div>
                            <div className="team-pic">
                            <img src="../src/assets/our-teamPic/brian.jpg" alt="" className="rounded-circle img-team-member" />
                            <small>Ana</small>
                            </div>
                            <div className="team-pic">
                            <img src="../src/assets/our-teamPic/aj.jpg" alt="" className="rounded-circle img-team-member" />
                            <small>Felipe</small>
                            </div>
                          </div>
                        </div>
            </div>
        </>
    );
}

export default AboutUs;
