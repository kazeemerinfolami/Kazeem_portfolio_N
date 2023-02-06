import React from "react";
import { motion } from "framer-motion";

const animVariants = {
  visible: {
    x: [0, -1, 1],
    transition: { delay: 0, yoyo: Infinity, duration: 1 },
  },
  hover: {
    scale: 1.3,
  },
};

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
            rel="noreferrer"
          >
            <span
              class="iconify"
              data-icon="raphael:githubalt"
              data-inline="false"
            ></span>
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
            href="https://www.linkedin.com/in/kazeem-erinfolami-974739190"
            target="_blank"
            rel="noreferrer"
          >
            <span
              class="iconify"
              data-icon="ant-design:linkedin-filled"
              data-inline="false"
            ></span>
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
            href="https://twitter.com/ErinKazeem"
            target="_blank"
            rel="noreferrer"
          >
            <span
              class="iconify"
              data-icon="uim:twitter"
              data-inline="false"
            ></span>
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
            href="https://www.instagram.com/kazeemerin/"
            target="_blank"
            rel="noreferrer"
          >
            <span
              class="iconify"
              data-icon="ant-design:instagram-filled"
              data-inline="false"
            ></span>
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
            href="https://docs.google.com/document/d/1SdBO-_mOzZvYdE1QU-YSfhUcGoKZ59sjPRP4MjZLb2M/edit#heading=h.5x0d5h95i329"
            target="_blank"
            rel="noreferrer"
          >
            <span
              class="iconify"
              data-icon="ant-design:file-pdf-filled"
              data-inline="false"
            ></span>
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
            href="mailto:erinfolamibolaji2010@gmail.com?subject=msg: WEB"
            target="_blank"
            rel="noreferrer"
          >
            <span
              class="iconify"
              data-icon="mdi:gmail"
              data-inline="false"
            ></span>
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
            href="https://wa.link/qpudym"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span
              className="iconify"
              data-icon="ph:whatsapp-logo-fill"
              data-inline="false"
            ></span>
          </motion.a>
        </div>
        <div className="aboutme-content">
          <div className="aboutme-content-title">
            <div style={{ display: "flex" }}>
              <div className="welcome-text hi">Hi, i'm Kazeem</div>
              <motion.div
                variants={animVariants}
                animate="visible"
                whileHover="hover"
              >
                <span>👋</span>
              </motion.div>
            </div>
          </div>
          <div className="welcome-text">
            Hello and welcome to my portfolio! I'm a self-taught Front End
            Developer based in Sunderland, UK🇬🇧. I specialize in developing
            interesting, accessible, and responsive websites using HTML, CSS,
            JavaScript, and React.js. I am also a strong advocate for diversity
            and intersectionality in technology and regularly volunteer at
            organizations aimed at advancing minorities in the tech-space.
            Currently, I’m focused on moving to the next stage of my career and
            achieving mid-level developer status.
          </div>
          <div className="welcome-text end">Thanks for reading 😊</div>
          <div className="welcome-text end">Thanks for reading 😊</div>
        </div>
      </div>
    </div>
  );
}

export default Content2;
