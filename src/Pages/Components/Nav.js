import React from 'react'
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

function Nav() {
    return (
        <div className="main-nav-Container">
            <nav>
                <motion.div
                    whileHover={{
                        scale: 1.7,
                        textShadow: "0px 0px 5px #333333"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 1000,
                    }}
                >
                    <NavLink exact to="/" className="navLink">
                        <div className="main-nav-wrapper" >
                            <span className="Home-icon iconify" data-icon="mdi:home-group" data-inline="false"></span>
                        </div>
                    </NavLink>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.7,
                        textShadow: "0px 0px 5px #333333"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 1000
                    }}
                >
                    <NavLink exact to="/aboutme" className="navLink" activeClassName="active">
                        <div className="main-nav-wrapper" >
                            <span>About Me</span>
                        </div>
                    </NavLink>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.7,
                        textShadow: "0px 0px 5px #333333"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 1000
                    }}
                >
                    <NavLink exact to="/projects" className="navLink" activeClassName="active">
                        <div className="main-nav-wrapper" >
                            <span>Projects</span>
                        </div>
                    </NavLink>
                </motion.div>
                <motion.div
                    whileHover={{
                        scale: 1.7,
                        textShadow: "0px 0px 5px #333333"
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 1000
                    }}
                >
                    <NavLink exact to="/contact" className="navLink" activeClassName="active">
                        <div className="main-nav-wrapper" >
                            <span>Contact Me</span>
                        </div>
                    </NavLink>
                </motion.div>
            </nav>
        </div>
    )
}

export default Nav
