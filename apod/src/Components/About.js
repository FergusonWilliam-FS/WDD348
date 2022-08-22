import React from "react";
import Header from "./Header";
import MyNavBar from "./MyNavbar";

const About = () => (
    <div>
        <Header />
        <MyNavBar />    
        <h1 className="p-5">About</h1>
        <p className="p-5"> On June 16, 1995, when the World Wide Web was young, two gamma-ray astronomers at NASA’s Goddard Space Flight Center in Greenbelt, Maryland, launched a website with a simple aim – to post a daily astronomical image along with a brief, easily understood explanation.
        Twenty-seven years on, Astronomy Picture of the Day (known affectionately as APOD) is available in 20 languages, seen by millions each day, and is used in classrooms throughout the world. APOD has now been honored in the International Astronomical Union’s first-ever round of outreach prizes. The award will be presented at the IAU General Assembly in Busan, South Korea, in August.</p>
    </div>
);

export default About;