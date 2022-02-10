import { useState, Component } from "react";
import { Link, Route } from "react-router-dom"

function App() {
  return (
     <div className="card-container">
      <img className="round" src={"/static/img/lyamashiro.jpg"} alt=""></img>
      <h2>Leonardo Tsutomu Yamashiro</h2>
      <h4>Campinas, SP - Brasil</h4>
      <p className="position">Sotware Engineer <br /> Jr,</p>
      <div className="buttons">
        <a className='icon_area' href='https://www.linkedin.com/in/leonardo-tsutomu-yamashiro/' target="_blank">
          <img className="icon" src={"/static/img/linkedin-logo.png"} ></img>
        </a>
        <a className='icon_area' href='https://github.com/leotyama' target="_blank">
          <img className="icon" src={"/static/img/github-logo.png"} ></img>
        </a>
        <a className='icon_area' href='https://mail.google.com/mail/u/0/?fs=1&to=ltyamashiro@gmail.com&tf=cm' target="_blank">
          <img className="icon" src={"static/img/email-icon.png"} ></img>
        </a>
      </div>
      <div className="skills">
        <h6>Skills</h6>
        <ul>
          <li>Drupal</li>
          <li>PHP</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>MySQL</li>
          <li>PostgreesDB</li>
          <li>Behat</li>
          <li>Cucumber</li>
        </ul>
      </div>
      <div className="learn">
        <h6>Learning</h6>
        <ul>
          <li>React</li>
          <li>Python</li>
        </ul>
      </div>
    </div >
  )
}
export default App
