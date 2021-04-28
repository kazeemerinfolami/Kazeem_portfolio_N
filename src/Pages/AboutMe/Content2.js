import React from 'react'
import { motion } from "framer-motion"


const animVariants = {
    visible: {
        x: [0, -1, 1],
        transition: { delay: 0, yoyo: Infinity, duration: 1 }
    },
    hover: {
        scale: 1.3
    }
}


function Content2() {
    return (
        <div>
            <div className="card-wrapper">
                <div className="aboutme-content2-link">
                    <motion.a
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                        href="https://github.com/kazeemerinfolami"
                        target="_blank"
                        rel="noreferrer">
                        <span class="iconify" data-icon="raphael:githubalt" data-inline="false"></span>
                    </motion.a>
                    <motion.a
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                        href="https://www.linkedin.com/in/kazeem-erinfolami-974739190" target="_blank" rel="noreferrer"><span class="iconify" data-icon="ant-design:linkedin-filled" data-inline="false"></span></motion.a>
                    <motion.a
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                        href="https://twitter.com/ErinKazeem" target="_blank" rel="noreferrer"><span class="iconify" data-icon="uim:twitter" data-inline="false"></span></motion.a>
                    <motion.a
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                        href="https://www.instagram.com/kazeem_erin/" target="_blank" rel="noreferrer"><span class="iconify" data-icon="ant-design:instagram-filled" data-inline="false"></span></motion.a>
                    <motion.a
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                        href="https://drive.google.com/file/d/1lmIbfD1zwxL4YqxboWUM5BWjHnsqAQVV/view?usp=sharing" target="_blank" rel="noreferrer"><span class="iconify" data-icon="ant-design:file-pdf-filled" data-inline="false"></span></motion.a>
                    <motion.a
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                        href="mailto:erinfolamibolaji2010@gmail.com?subject=msg: WEB" target="_blank" rel="noreferrer" ><span class="iconify" data-icon="mdi:gmail" data-inline="false"></span></motion.a>
                    <motion.a
                        whileHover={{
                            scale: 1.7,
                            textShadow: "0px 0px 8px #333333",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                        }}
                        href="https://wa.link/qpudym" target="_blank" rel="noopener noreferrer"><span className="iconify" data-icon="ph:whatsapp-logo-fill" data-inline="false"></span></motion.a>
                </div>
                <div className="aboutme-content">
                    <div className="aboutme-content-title">
                        <div style={{ display: "flex" }}>
                            <div>Hi, i'm Kazeem</div>
                            <motion.div
                                variants={animVariants}
                                animate="visible"
                                whileHover="hover"
                            ><span>👋</span>
                            </motion.div>
                        </div>

                    </div>
                    <div>
                        Moritz’s portfolio really gets
                        of what UX design is all about: going through a process to solve a user problem. Moritz doesn’t just show the finished product; he shares, in detail, all the methods and processes that got him there.
                    </div>
                    <div>
                        Moritz’s portfolio really gets to the heart of what UX design is all about: going through a process to solve a user problem. Moritz doesn’t just show the finished product; he shares, in detail, all the methods and processes that got him there.
                    </div>
                    <div>
                        Moritz’s portfolio really gets to the heart of what UX design is all about: going through a process to solve a user problem. Moritz doesn’t just show the finished product; he shares, in detail, all the methods and processes that got him there.
                    </div>
                </div>
                {/* <div className="dev-icon-box">
                    <span className="Devicon iconify" data-icon="fluent:window-dev-tools-24-filled" data-inline="false"></span>
                </div> */}
            </div>
        </div>
    )
}

export default Content2
