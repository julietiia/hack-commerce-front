import React from "react";
import "../components/css/AboutUs.css";
import aboutapparatbg from "../assets/img/aboutapparatbg.jpg";
import react from "../assets/tech-icons/react.png";
import mysql from "../assets/tech-icons/mysql.png";
import redux from "../assets/tech-icons/redux.png";
import nodeJS from "../assets/tech-icons/nodeJS.png";
import bootstrap from "../assets/tech-icons/bootstrap.png";
import html from "../assets/tech-icons/html.png";
import css3 from "../assets/tech-icons/css3.png";
import figma from "../assets/tech-icons/figma.png";
import trello from "../assets/tech-icons/Trello.png";
import discord from "../assets/tech-icons/discord.png";
import express from "../assets/tech-icons/express.png";
import infostructure from "../assets/img/infostructure.png";
import sitestructure from "../assets/img/sitestructure.png";
import ScrollUpButton from "../components/ScrollUpButton";
import Ana from "../assets/team/Ana.jpg"
import Feli from "../assets/team/Feli.jpg"
import Helm from "../assets/team/Helm.jpg"
import Juli from "../assets/team/Juli.jpg"
import Vani from "../assets/team/Vani.jpg"


function AboutUs() {
  return (
    <>
      <div className="container-fluid about-bg-container">
        <h2 className="about-us-title">about this project</h2>
        <img className="about-us-bg" src={aboutapparatbg} alt="" />
      </div>
      <article className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 ">
            <div className="">
              <p className="about-us-body-text">
                Apparat is a fictitious online store that was born as a final
                proyect of a team of students from the{" "}
                <a className="ha-link" href="https://ha.dev" target="blank">
                  Hack Academy
                </a>{" "}
                coding Bootcamp over a period of three weeks.
              </p>
              <p className="about-us-body-text">
                The team is made up of five people with different skills and
                knowledge, which allowed them to develop a solid and functional
                project while striving to create a seamless and enjoyable online
                shopping experience for users.
              </p>
              <p className="about-us-body-text">
                The main objective of the project is to integrate all the
                knowledge acquired in the bootcamp into a website that displays
                a selection of designer furniture and accessories.
              </p>
            </div>
          </div>
        </div>
      </article>
      <section className="container">
        <div className="row technologies-bg">
          <div className="col">
            <p className="technologies-title">
              This website was built using these technologies and tools:
            </p>
            <div className="icons-container">
              <div className="icon-container">
                <img src={react} alt="" />
                <p className="tech-name">React.js</p>
              </div>
              <div className="icon-container">
                <img src={mysql} alt="" />
                <p className="tech-name">MySQL</p>
              </div>
              <div className="icon-container">
                <img src={redux} alt="" />
                <p className="tech-name">Redux</p>
              </div>
              <div className="icon-container">
                <img src={nodeJS} alt="" />
                <p className="tech-name">Node.js</p>
              </div>
              <div className="icon-container">
                <img src={express} alt="" />
                <p className="tech-name">Express.js</p>
              </div>
              <div className="icon-container">
                <img src={bootstrap} alt="" />
                <p className="tech-name">Bootstrap</p>
              </div>
              <div className="icon-container">
                <img src={html} alt="" />
                <p className="tech-name">HTML5</p>
              </div>
              <div className="icon-container">
                <img src={css3} alt="" />
                <p className="tech-name">CSS3</p>
              </div>
              <div className="icon-container">
                <img src={figma} alt="" />
                <p className="tech-name">Figma</p>
              </div>
              <div className="icon-container">
                <img src={trello} alt="" />
                <p className="tech-name">Trello</p>
              </div>
              <div className="icon-container">
                <img src={discord} alt="" />
                <p className="tech-name">Discord</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row site-structure-container gap-2">
          <div className="col-xl-6 col-md-12">
            <p className="site-structure-title">
              Information structure.
            </p>
            <img className="site-structure-img" src={infostructure} alt="" />
          </div>

          <div className="col-xl-6 col-md-12">
            <p className="site-structure-title">
              Site structure.
            </p>
            <img className="site-structure-img" src={sitestructure} alt="" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row team-row mb-5">
          <p className="technologies-title">
            This is us
          </p>
          <div className="col">
            <div className="team-container">
              <div className="member-card">
                <img
                  src={Vani}
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Vanina Santarnecchi</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="https://www.linkedin.com/in/vanina-santarnecchi-52113297/" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/vanina312B" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
              <div className="member-card">
                <img
                  src={Juli}
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Julieta Mautone</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="https://www.linkedin.com/in/helmuth-dyck/" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/julietiia" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
              <div className="member-card">
                <img
                  src={Helm}
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Helmuth Dyck</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="https://www.linkedin.com/in/helmuth-dyck/" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/helmdyck" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
              <div className="member-card">
                <img
                  src={Ana}
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Ana Baccaro</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="https://www.linkedin.com/in/anabaccaro/" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/AnaBaccaro" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
              <div className="member-card">
                <img
                  src={Feli}
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Felipe Baz</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="https://www.linkedin.com/in/felipe-baz/" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://github.com/Felipebaz" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollUpButton/>
    </>
  );
}

export default AboutUs;
