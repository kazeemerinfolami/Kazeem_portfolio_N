import React, { useState } from 'react'
import axios from "axios"
import { motion } from "framer-motion"

const animVariants = {
    visible: {
        x: [0, -40, 10],
        transition: {
            delay: 0,
            yoyo: Infinity,
            duration: 5,
            // type: "spring",
            // stiffness: 100,
        }
    },
    hover: {
        scale: 3,
        color: "#ffffff",
        x: 0,
    }
}

function ContactForm() {
    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
        button: "Submit",
    })
    const { email, firstname, lastname, phone, button, message } = values;

    const handleChange = (type) => (e) => {
        setValues({ ...values, [type]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        setValues({
            button: "Submitting...",
        })
        axios({
            method: "POST",
            url: "https://portfolio-backend-bj.herokuapp.com/api/contact",
            data: { email, firstname, lastname, phone, message }
        }).then((res) => {
            setValues({
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                message: "",
                colorType: false,
                button: res.data.message,
            })
            console.log('DATA SUBMITTED', res)
        }).catch((err) => {
            setValues({
                colorType: "fail",
                button: "Message Not sent",
            })
            console.log('DATA ERROR', err)
        })
    }

    return (
        <div className="Contact-me-for-container">
            <div className="Contact-kazeem-text">
                <div>Connect with Kazeem <span className="iconify" data-icon="fontelico:emo-happy" data-inline="false"></span></div>
                <motion.div
                    variants={animVariants}
                    animate="visible"
                    whileHover="hover"
                ><span className="mouse-icon iconify" data-icon="emojione-monotone:computer-mouse" data-inline="false"></span>
                </motion.div>
            </div>
            <form className="Con-Form-wrapper">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label for="firstname">First Name</label>
                            <input type="text" onChange={handleChange("firstname")} value={firstname} className="form-control" placeholder="K..........." required></input>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputEmail1">Email Address</label>
                            <input type="email" onChange={handleChange("email")} value={email} className="form-control" aria-describedby="emailHelp" placeholder="@..........." required></input>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label for="lastname">Last Name</label>
                            <input type="text" onChange={handleChange("lastname")} value={lastname} className="form-control" placeholder="E..........." required></input>
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="phone" onChange={handleChange("phone")} value={phone} className="form-control" placeholder="+ .... .... ..." required></input>
                        </div>
                    </div>
                    <small id="emailHelp" className="form-text email_note"><span className="shield-icon iconify" data-icon="dashicons:shield" data-inline="false"></span>I'll never share your email with anyone else.</small>
                    <div className="col-lg-12">
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message Kazeem...</label>
                            <textarea type="text" onChange={handleChange("message")} value={message} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <button className="contact-me-submit" onClick={submitForm}>{button} <span className="iconify" data-icon="bx:bx-mail-send" data-inline="false"></span></button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm
