import React from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion"

const containerRouterAnim = {
    hidden: {
        // opacity: 0,

    },
    visible: {
        // opacity: 1,
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


function WelcomePage() {
    return (
        <motion.div
            variants={containerRouterAnim}
            initial="hidden"
            animate="visible"
            exit="exit"

            className="App-header">
            <div className="Welcome-container">
                <Helmet>
                    <title>Kazeem | Wecome</title>
                </Helmet>
                <Container>
                    <Row>
                        <Col xl={6} lg={12} md={12} className="card--body" >
                            <Content1 />
                        </Col>
                        <Col xl={6} lg={12} md={12} className="card--body2"  >
                            <Content2 />
                        </Col>
                    </Row>
                </Container>

            </div>
        </motion.div>
    )
}

export default WelcomePage
