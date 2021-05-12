import React from 'react'
import Nav from '../Components/Nav'
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectIMG from './ProjectIMG';
import { motion } from "framer-motion"

const containerRouterAnim = {
    hidden: {
        opacity: 0,

    },
    visible: {
        opacity: 1,
        // transition: {
        //     delay: 0,
        //     duration: 1.5
        // }
    },
    exit: {
        x: "-300vh",
        transition: {
            ease: "easeInOut",
            // duration: 1.5
        }
    }
}

function Projects() {
    return (
        <motion.div
            variants={containerRouterAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="project-container">
                <Helmet>
                    <title>Kazeem | Projects</title>
                </Helmet>
                <Container>
                    <Nav />
                    <Row>
                        <Col>
                            <ProjectIMG />
                        </Col>
                    </Row>
                </Container>
            </div>
        </motion.div>
    )
}

export default Projects
