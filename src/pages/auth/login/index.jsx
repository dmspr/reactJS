import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { FormFeedback, Input, Button } from 'reactstrap'
import './style.scss'
import axios from 'axios'

const validationSchema = yup.object().shape({
    email: yup.string().email().required('Email Salah'),
    password: yup.string().min(8).max(16).required()
})

export default function Login() {
    const [handlelogin, setHandlelogin] = useState('');
    useEffect(() => {
        setHandlelogin('');
    }, [])
    const handleLogin = async () => {
        const data = formik.values

        await axios.post('http://localhost:8080/login', data)
            .then(res => {
                localStorage.setItem('access_token', res.data.accessToken)
                window.location = "/dashboard"
            })
            .catch(err => {
                if (err.response.status === 400)
                    setHandlelogin('Login Failed, please check your email or password and try again.');


            })
    }
    const formik = useFormik({
        initialValues: {
            'email': '',
            'password': ''
        },
        validationSchema: validationSchema,
        onSubmit: () => handleLogin()
    })

    console.log(formik.initialValues)
    return (
        <div className="login-page">
            
            <form className='form-container' onSubmit={formik.handleSubmit}>
                <h1 className='title'>Login</h1>
                <p className='dec'>Welcome to Login Page</p>
                {
                    Object.keys(formik.initialValues).map((key, idx) => (
                        <div key={idx} className="row-input">
                            <Input
                                type={key === "password" ? "password" : "text"}
                                id={key}
                                name={key}
                                placeholder={key}
                                value={formik.values[key]}
                                onChange={formik.handleChange}
                                invalid={formik.touched[key] && Boolean(formik.errors[key])}
                            />

                            {
                                formik.touched[key] && Boolean(formik.errors[key]) &&
                                <FormFeedback className='error-feedback'>{formik.errors[key]}</FormFeedback>
                            }
                        </div>
                    ))
                }
                <Button className="btn-submit" type="submit">Login</Button>
                <p className="handlelogin">{handlelogin}</p>
                <p className='signup' margin-top="20px">
                    Dont have an account? <a href='/register' color='blue'>Sign Up</a></p>
                <p margin-top="5px">or see <a href='/catalog' color='blue'>Catalog</a></p>
            </form>
        </div>
    )
}