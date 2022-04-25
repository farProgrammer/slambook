import React from "react";
import Story from "../Story";
import "../../StoryReel.css";
import akki from "../../assets/images/akki.jpg";
import bro from "../../assets/images/bro.jpg";
import arif from "../../assets/images/arif.jpg";
import guffi from "../../assets/images/guffi.jpg";
import car from "../../assets/images/car.jpeg";
import brob from "../../assets/images/brob.jpg";
import guffib from "../../assets/images/guffib.jpg";
import arifb from "../../assets/images/arifb.jpg";
import th1 from "../../assets/images/th1.jpg";
import th2 from "../../assets/images/th2.jpg";
import th3 from "../../assets/images/th3.jpg";
import th from "../../assets/images/th.jpg";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story image={car} profileSrc={akki} title={"Akbar"} />
      <Story image={arifb} profileSrc={arif} title={"Arif Patel"} />
      <Story image={guffib} profileSrc={guffi} title={"Gufran Ali"} />
      <Story image={brob} profileSrc={bro} title={"Ghous Khan"} />
      <Story image={th3} profileSrc={th} title={"Sabrina"} />
      <Story image={th2} profileSrc={th1} title={"zarina"} />
    </div>
  );
};

export default StoryReel;
