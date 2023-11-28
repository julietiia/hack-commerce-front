import React from "react";
import Navbar from "../components/Navbar";
import "./AboutUs.css";

function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-6">
                        <h1>What's apparat?</h1>
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
                            ab.
                        </p>
                    </div>
                    <div className="col-6 bg-black">
                        <img
                            src="/src/assets/apparat-logo-black.png"
                            alt=""
                            className="logo"
                        />
                    </div>
                </div>
                </div>
                <div className="container">
                <h2>Technologies & Tools</h2>
                  <div className="row">
                <div className="col-2">
                  <img src="" alt="" className="border" />
                </div>
                <div className="col-2">
                  <img src="" alt="" className="border" />
                </div>
                <div className="col-2">
                  <img src="" alt="" className="border" />
                </div>
                <div className="col-2">
                  <img src="" alt="" className="border" />
                </div>
                <div className="col-2">
                  <img src="" alt="" className="border" />
                </div>
                <div className="col-2 border">
                  <img src="" alt="" className="border" />
                </div>
                </div>
                </div>
                
                
        </>
    );
}

export default AboutUs;
