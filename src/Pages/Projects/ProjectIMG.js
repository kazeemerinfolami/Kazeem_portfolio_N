import React from 'react'
import { motion } from "framer-motion"

import { ProjectData, ProjectData2, ProjectData3, ProjectData4, ProjectData5, ProjectData6, ProjectData7 } from './ProjectData'

function ProjectIMG() {
    return (
        <div>
            <div className="project-img-wrapper">

                <div>
                    <div>Project: LMS "Cryptocurrency e-Learning Platform"</div>
                    <div
                        className="row center">
                        {ProjectData7.map((D) => (
                            <div
                                className="card" key={D.projIMG}>
                                <motion.a
                                    whileHover={{
                                        scale: 1.3,
                                        textShadow: "0px 0px 8px #333333",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 1000,
                                    }}
                                    href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </motion.a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>Project: LMS "e-Learning platform"</div>
                    <div
                        className="row center">
                        {ProjectData5.map((D) => (
                            <div
                                className="card" key={D.projIMG}>
                                <motion.a
                                    whileHover={{
                                        scale: 1.3,
                                        textShadow: "0px 0px 8px #333333",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 1000,
                                    }}
                                    href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </motion.a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>Project: T-Cooperative - Cloud Based cooperative application built to ease the management of various community cooperative societies, credit union"</div>
                    <div
                        className="row center">
                        {ProjectData6.map((D) => (
                            <div
                                className="card" key={D.projIMG}>
                                <motion.a
                                    whileHover={{
                                        scale: 1.3,
                                        textShadow: "0px 0px 8px #333333",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 1000,
                                    }}
                                    href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </motion.a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>Project: LMS "Learning Management System"</div>
                    <div
                        className="row center">
                        {ProjectData.map((D) => (
                            <div
                                className="card" key={D.projIMG}>
                                <motion.a
                                    whileHover={{
                                        scale: 1.3,
                                        textShadow: "0px 0px 8px #333333",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 1000,
                                    }}
                                    href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </motion.a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>Project: "C.R.U.D" List of Federal Ministries in Nigeria</div>
                    <div

                        className="row center">
                        {ProjectData2.map((D) => (
                            <div
                                className="card" key={D.projIMG}>
                                <motion.a
                                    whileHover={{
                                        scale: 1.3,
                                        textShadow: "0px 0px 8px #333333",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 1000,
                                    }}
                                    href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </motion.a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>Project: Data Visualization Platform</div>
                    <div

                        className="row center">
                        {ProjectData3.map((D) => (
                            <div
                                className="card" key={D.projIMG}>
                                <motion.a
                                    whileHover={{
                                        scale: 1.3,
                                        textShadow: "0px 0px 8px #333333",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 1000,
                                    }}
                                    href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </motion.a>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div>Project: Random User Profile Generato</div>
                    <div

                        className="row center">
                        {ProjectData4.map((D) => (
                            <div
                                className="card" key={D.projIMG}>
                                <motion.a
                                    whileHover={{
                                        scale: 1.3,
                                        textShadow: "0px 0px 8px #333333",
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 1000,
                                    }}
                                    href={D.url} target="_blank" rel="noopener noreferrer">
                                    <img className="medium" src={D.projIMG} alt="product img" />
                                </motion.a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectIMG
