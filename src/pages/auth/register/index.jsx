import React from "react";
import * as yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import { Button, FormFeedback, Input } from 'reactstrap'
import "./style.scss"


const validationSchema = yup.object().shape({
    email: yup.string().email().required('Email Salah'),
    name: yup.string().min(3).max(20).required(),
    address: yup.string().required(),
    phone: yup.number().typeError("That doesn't look like a phone number").positive("A phone number can't start with a minus").integer("A phone number can't include a decimal point").min(8).required('A phone number is required'),
    password: yup.string().min(8).max(16).required(),
    retypePassword: yup.string().oneOf([yup.ref('password'), null], 'Password doesnt match'),
    createdAt: yup.date().default(function () {
        return new Date();
    })
})

export default function Register() {
    let formik = useFormik({
        initialValues: {
            'email': '',
            'name': '',
            'address': '',
            'phone': '',
            'password': '',
            'retypePassword': ''
        },
        validationSchema: validationSchema,
        onSubmit: () => handleRegister()

    })
    const handleRegister = async () => {
        const { email, name, password, createdAt, address } = formik.values
        await axios.post(`http://localhost:8080/register`, {
            email,
            name,
            createdAt,
            address,
            password
        })
            .then(() => {
                window.location = "/login"
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="register">
            <form className="register-container" onSubmit={formik.handleSubmit}>
                <h1 className="title">Register</h1>
                <p className="desc">Sign up to see and add photos from your furniture</p>
                {Object.keys(formik.initialValues).map((key, idx) => (
                    <div key={idx} className="row-input">
                        <Input
                            type={key === "password" || key === "retypePassword" ? "password" : "text"}
                            id={key}
                            name={key}
                            placeholder={key}
                            value={formik.values[key]}
                            onChange={formik.handleChange}
                            invalid={formik.touched[key] && Boolean(formik.errors[key])}
                        />
                        {
                            formik.touched[key] && Boolean(formik.errors[key]) && <FormFeedback className="error-feedback">{formik.errors[key]}</FormFeedback>
                        }
                    </div>
                ))}

                <Button className="btn-submit" type="submit">Register</Button>
                <p className='signup' margin-top="20px">
                    Have an account?<a href='/login' className="signin"> Sign in</a></p>
                <p className="policy">By signing up, you agree to our Terms, Data Policy and Cookies Policy.</p>
            </form>
        </div>
    )
}