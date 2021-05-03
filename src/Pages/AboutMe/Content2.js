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
                I’m a self-taught Front End Developer based in Lagos, Nigeria🇳🇬. I develop interesting, accessible and responsive websites using HTML, CSS Javascript and React.js.
                        <div>
                        i am an avid advocate for diversity and intersectionality in technology also regularly volunteer at organizations geared towards the increment of minorities in the techspace.
                         <div>
                            I have worked remotely as a Front End Developer at Ivyarc, Dufuna Codecamp located in Nigeria and currently work for Turon Technologie in Lagos Nigeria and voluntarily for Tech for Good in the United States of America.
                         </div>
                    </div>


                    <div>
                        Currently, I’m focused on moving to the next stage of my career and achieving mid-level developer status.
                    </div>
                    <div>
                        Thanks for reading 😊
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
