import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
           This is our Final year project using mern stack and implementing virtual try on and visual search as our main feature.
           we are 4 group members Syed Attabik Ali Shah, Muhammad Uzair, Sheraz Hussain, Muhammad Rizwan Hameed. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
