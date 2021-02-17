import React from 'react'
import AppHero from "../components/home/home";
import AppAbout from "../components/aboutus/about";
import AppFeatures from "../components/features/features";
import AppWorks from "../components/works/works";

function AppHome(){
    return(
        <div className="main">
            <AppHero/>
            <AppAbout/>
            <AppFeatures/>
            <AppWorks/>
        </div>

    );
}

export default AppHome;