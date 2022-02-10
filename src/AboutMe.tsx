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
          margin: "0px 400px 0px 400px"
        }}
      >I Studied at UNESP (Júlio de Mesquita Filho State University) at Rio Claro, a city in the State of São Paulo. I studied abroad for 2 semesters in CSUMB
      (California State University Monterey Bay) from August, 2015 until May, 2016.And during the Summer of 2016, I was a Research Assistant in SDSU (San Diego State Univesity).
      In January 2019, I was hired as an Intern in Sercon Sistemas Automotivos and working as a Backend Developer. After 7 months in August I was hired as a Web
      Developer in the same Company. In January 2020, I started my Journey in CIandT, there I worked as a FullStack Developer</p>
    </div>

  )
}

export default AboutMe
