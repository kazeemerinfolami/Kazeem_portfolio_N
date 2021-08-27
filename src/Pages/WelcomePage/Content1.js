import React from 'react'
import { motion } from "framer-motion"

const animVariants = {
    visible: {
        // x: [0, -40, 10],
        rotateZ: 100,
        transition: {
            delay: 0,
            yoyo: Infinity,
            duration: 1,
            ease: "easeOut"
        }
    },
    // hover: {
    //     scale: 3,
    //     color: "#ffffff",
    //     x: 0,
    // }
}

function Content1() {
    return (
        <div>
            <div className="welcome-wrapper">
                <motion.span
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0, duration: 1.5 }}
                >
                    <span

                        className="desktop-icon iconify"
                        data-icon="fluent:phone-laptop-24-regular"
                        data-inline="false">
                    </span>
                </motion.span>

                <div>
                    <motion.div
                        className="Dev-name"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 2 }}
                    >
                        Kazeem Erinfolami
                    </motion.div>
                    <div className="Dev-role">
                        <div style={{ display: "flex" }}>
                            <div>Frontend Developer</div>

                            <motion.div
                                variants={animVariants}
                                animate="visible"
                                whileHover="hover"
                            >
                                <span
                                    className="welcomeIcon iconify"
                                    data-icon="clarity:settings-line"
                                    data-inline="false">
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content1
