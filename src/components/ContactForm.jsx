/* eslint-disable no-unused-vars */
import { emailjs } from "@emailjs/browser"
import { useState } from "react"
import toast from "react-hot-toast"

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email:"",
        message: "",
    })

    const [errors, setErrors] = useState({})
    const [isSending, setIsSending] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }


    const validate = () => {
        let errors = {};
        if(!formData.name) errors.name = "Name is required";
        if(!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is required";
        }
        if (!formData.message) errors.message = "Message is required";
        return errors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
                 .send(
                    "service_js24dhs",
                    "template_r3f6dlq",
                    formData,
                    "eFSQW6Q-o_y1TEL3y",
                 )
                 .then((response) => {
                    toast.success("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" })
                 })
                 .catche((error) => {
                    console.log("Failed...", error)
                    toast.error("Failed to send message. Please try again later")
                 })
                 .finally(() => {
                    setIsSending(false)
                 })
        }
    }
  return (
    <section>
        
    </section>
  )
}

export default ContactForm
