import React from 'react'
import { motion } from "framer-motion"


function Content1() {
    return (
        <div>
            <div className="card-wrapper">
                <div>
                    <div className="about-page-name">Kazeem Bolaji Erinfolami</div>
                    <div>Frontend Developer</div>
                </div>
                <motion.div
                    className="img-img-container"
                    initial={{ y: "-200vw" }}
                    animate={{ y: 0 }}
                    transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 100,
                        mass: 0.4,
                        damping: 8
                    }}
                >
                    <img className="Profile-img" alt="profileIMG" src="./assets/images/IMG_4234.jpg" />
                </motion.div>
            </div>
        </div>
    )
}

export default Content1
