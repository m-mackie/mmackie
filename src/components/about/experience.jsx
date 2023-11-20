import React from 'react';
import './about.css';
import { FaNode, FaReact, FaHtml5, FaCss3, FaGithub   } from "react-icons/fa";
import { SiRedux, SiExpress  } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
 

const Experience = () => {
    return (
        <div className="skills">
            <h3>My Toolbox</h3>
            <p className="toolbox_content"> Just a few skills that I have in my toolbox. 
            </p>
            <div className="tool_icons">
            <FaHtml5 /> 
            <FaCss3 />
            <BsFiletypeScss />
            <IoLogoJavascript />
            <FaReact />
            <SiRedux />
            <FaNode />
            <SiExpress />
            <FaGithub />
            <FcGoogle />
            </div>
           
        </div>
    )
}

export default Experience;