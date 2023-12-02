import React from "react";
import "../components/css/AboutUs.css";
// import diagrama from "../assets/img/diagrama.png";
import aboutapparatbg from "../assets/img/aboutapparatbg.jpg";
import react from "../assets/tech-icons/react.png";
import mysql from "../assets/tech-icons/mysql.png";
import redux from "../assets/tech-icons/redux.png";
import nodeJS from "../assets/tech-icons/nodeJS.png";
import bootstrap from "../assets/tech-icons/bootstrap.png";
import html from "../assets/tech-icons/html.png";
import css3 from "../assets/tech-icons/css3.png";
import figma from "../assets/tech-icons/figma.png";
import trello from "../assets/tech-icons/trello.png";
import discord from "../assets/tech-icons/discord.png";
import express from "../assets/tech-icons/express.png";

function AboutUs() {
  return (
    <>
      <div className="container-fluid about-bg-container">
        <h2 className="about-us-title">about apparat</h2>
        <img className="about-us-bg" src={aboutapparatbg} alt="" />
      </div>
      <article className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-8">
            <div className="">
              <p className="about-us-body-text">
                Apparat is a fictitious online store that was born as a final proyect of a team of
                students from the <a className="ha-link" href="https://ha.dev" target="blank">Hack Academy</a> coding Bootcamp over a period of three weeks.
              </p>
              <p className="about-us-body-text">
                 The team is made up of five people with different skills and knowledge, which allowed them to develop a solid and functional project while striving to create a seamless and enjoyable online shopping experience for users.
              </p>
              <p className="about-us-body-text">
                The main objective of the project is to integrate all the knowledge
                acquired in the bootcamp into a website that displays a
                selection of designer furniture and accessories.
              </p>
            </div>
          </div>
        </div>
      </article>
      <section className="container">
        <div className="row technologies-bg">
          <div className="col">
            <p className="technologies-title">
              This website is built with the following technologies
              and tools:
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
        <div className="row team-row text-white mb-5">
          <p className="technologies-title">
            These are the members of the team:
          </p>
          <div className="col">
            <div className="team-container">
              <div className="member-card">
                <img
                  src="../src/assets/our-teamPic/nick.jpg"
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Vanina Santarnecchi</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="#" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
              <div className="member-card">
                <img
                  src="../src/assets/our-teamPic/howie.jpg"
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Julieta Mautone</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="#" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
              <div className="member-card">
                <img
                  src="../src/assets/our-teamPic/kevin.jpg"
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Helmuth Dyck</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="#" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
              <div className="member-card">
                <img
                  src="../src/assets/our-teamPic/brian.jpg"
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Ana Baccaro</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="#" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
              <div className="member-card">
                <img
                  src="../src/assets/our-teamPic/aj.jpg"
                  alt=""
                  className="img-team-member"
                />
                <p className="team-member-name">Felipe Baz</p>
                <p className="team-member-job-position">Full Stack Developer</p>
                <div className="personal-links">
                  <a href="#" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" target="_blank">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
