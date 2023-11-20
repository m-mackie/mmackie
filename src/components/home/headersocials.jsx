//Imports
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai"

 
//Aside panal of social media icons
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/melissa-m-mackie" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/m-mackie" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.freecodecamp.org/wolfaholic" target="_blank" rel="noreferrer"><FaFreeCodeCamp /></a>
        <a href="https://twitter.com/CodeMackie" target="_blank" rel="noreferrer"><AiOutlineTwitter /></a>
    </div>
  )
}

export default HeaderSocials