import { useState } from "react";

function AboutMe() {
  return (
    <div>
      <h1 style={
        {
          textAlign: "center",
          color: "#B3B8CD",
          padding: "10px"
        }
      }>About Me</h1>
      <p style={
        {
          textAlign: "center",
          color: "#B3B8CD",
          padding: "50px",
          margin: "20px"
        }}
      >I Studied at UNESP (Júlio de Mesquita Filho State University) at Rio Claro, a city in the State of São Paulo. I also studied for 2 semesters in CSUMB
      (California State University Monterey Bay) from August, 2015 until May, 2016. During the Summer of 2016, I was a Research Assistant in SDSU (San Diego State Univesity).
      In January 2019, I was hired as an Intern in Sercon Sistemas Automotivos and worked using PHP, HTML, CSS, JQuery and MySQL. After 7 months in August I was hired as a Web
      Developer in the same Company. In January 2020, I started my Journey in CIandT, there I worked with Drupal, PHP, CSS, JQuery, MySQL. For testing I used Behat, Cucumber and
      some Manual testing techniques. And for Deploys: Jenkins.</p>
    </div>

  )
}

export default AboutMe
