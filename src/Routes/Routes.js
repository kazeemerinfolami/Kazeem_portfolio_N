import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom';
import WelcomePage from '../Pages/WelcomePage/WelcomePage';
import Projects from "../Pages/Projects/Projects"
import AboutMe from "../Pages/AboutMe/AboutMe"
import Contact from '../Pages/ContactMe/Contact';
import { AnimatePresence } from "framer-motion"
function Routes() {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Switch location={location} key={location.key}>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route exact path="/Aboutme">
                    <AboutMe />
                </Route>
                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
        </AnimatePresence>
    )
}

export default Routes
