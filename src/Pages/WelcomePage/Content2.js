import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion"

function Content2() {
    return (
        <div>
            <div className="welcome-wrapper card--body2">
                <nav>
                    <motion.div
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                    >
                        <NavLink exact to="/aboutme" className="navLink" >
                            <div className="nav-wrapper" >
                                <span className="nav-icon iconify" data-icon="icomoon-free:cool" data-inline="false"></span>
                                <span>About Me</span>
                            </div>
                        </NavLink>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                    >
                        <NavLink exact to="/projects" className="navLink" >
                            <div className="nav-wrapper" >
                                <span className="nav-icon iconify" data-icon="simple-icons:codeproject" data-inline="false"></span>
                                <span>Projects</span>
                            </div>
                        </NavLink>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                    >
                        <NavLink exact to="/contact" className="navLink" >
                            <div className="nav-wrapper" >
                                <span className="nav-icon iconify" data-icon="ic:round-connect-without-contact" data-inline="false"></span>
                                <span>Contact Me</span>
                            </div>
                        </NavLink>
                    </motion.div>
                </nav>
            </div>
        </div>
    )
}

export default Content2
