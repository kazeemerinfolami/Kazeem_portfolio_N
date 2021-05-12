import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Nav from '../Components/Nav';
import ContactForm from './ContactForm';
import Content2 from './Content2';
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

function Contact() {
    return (
        <motion.div
            variants={containerRouterAnim}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="Contact-container">
                <Helmet>
                    <title>Kazeem | Contact Me</title>
                </Helmet>
                <Container>
                    <Nav />
                    <Row>
                        <Col lg={6} md={12} >
                            <ContactForm />
                        </Col>
                        <Col lg={6} md={12} >
                            <Content2 />
                        </Col>
                    </Row>
                </Container>
            </div>
        </motion.div>
    )
}

export default Contact
