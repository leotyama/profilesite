import { useState, Component } from "react";
import { Link, Route } from "react-router-dom"

function App() {
  return (
    <div className="card-container">
      <img class="round" src="src/images/lyamashiro.jpg" alt="user"></img>
      <h2>Leonardo Tsutomu Yamashiro</h2>
      <h4>Campinas, SP - Brasil</h4>
      <p>Sotware Engineer <br /> Jr,</p>
      <div class="buttons">
        <a class='icon_area' href='https://www.linkedin.com/in/leonardo-tsutomu-yamashiro/' target="_blank">
          <img class="icon" src="src/images/linkedin-logo.png" ></img>
        </a>
        <a class='icon_area' href='https://github.com/leotyama' target="_blank">
          <img class="icon" src="src/images/github-logo.png" ></img>
        </a>
        <a class='icon_area' href='https://mail.google.com/mail/u/0/?fs=1&to=ltyamashiro@gmail.com&tf=cm' target="_blank">
          <img class="icon" src="src/images/email-icon.png" ></img>
        </a>
      </div>
      <div class="skills">
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
      <div class="learn">
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
