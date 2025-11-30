import React from "react";
import Slider from "../components/Slider";
import PopularSection from "../components/PopularSection";
import MeetOurVets from "../components/MeetOurVets";

const Homepage = () => {
  return (
    <div>
      <title>WarmPaws – Pet Care in Winter</title>
      <Slider></Slider>
      <PopularSection></PopularSection>
      <MeetOurVets></MeetOurVets>
    </div>
  );
};

export default Homepage;
