import React from "react";
import Header from "./Header";
import MyNavBar from "./MyNavbar";

const Help = () => (
    <div>
        <Header />
        <MyNavBar />    
        <h1 className="p-5">Help</h1>
        <p className="p-5">Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
    </div>
);

export default Help;