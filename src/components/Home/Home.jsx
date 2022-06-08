import React, { useState, useEffect } from "react"
import styles from './Home.module.css'
import Header from "../Header/Header"
import Footer from '../Footer/Footer'
import homeImage from '../../assets/travelike-home-image.jpg'

function validate(input) {
    let errors = {}

    if (!input.name) {
        errors.name = 'Por favor escribe tu nombre'
    }
    if (!input.email) {
        errors.email = 'Por favor escribe tu email'
    }
    if (!input.phone) {
        errors.phone = 'Por favor escribe tu número de celular'
    }
    if (!input.age) {
        errors.age = 'Por favor escribe tu edad'
    }
    return errors
}

function validateBlur(input) {
    let errors = {}

    const RegExesName = /^[A-Za-z\s]*$/
    if (input.name && input.name.match(RegExesName) === null) {
        errors.name = 'Por favor ingresa solo letras'
    }

    const RegExesEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (input.email && input.email.match(RegExesEmail) === null) {
        errors.email = 'Por favor ingresa un email valido'
    }
    
    if (input.age < 18 || input.age > 100 ) {
        errors.age = 'Por favor escribe un número entre 18 y 100'
    }
    return errors
}

const Home = () => {
    const [ airline, setAirline ] = useState('Vivair')
    const [ errors, setErrors ] = useState({})
    const [ input, setInput ] = useState({
        name: '',
        email: '',
        phone: '',
        age: ''
    })

    function handleCallback(info) {
        setAirline(info)
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleBlur(e) {
        setErrors(validateBlur({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        for(const property in input) {
            console.log(`${property}: ${input[property]}`);
        }

        setInput({
            name: '',
            email: '',
            phone: '',
            age: ''
        })
    }

    function openModal() {
        document.getElementById("myModal").style.display = "block";
        setTimeout(function() {
            document.getElementById("myModal").style.display = "none";
        },3000)
    }

    return (
        <>
            <div className={styles.container}>
                <Header parentCallback={handleCallback} />
                <div className={styles.imgContainer}>
                    <div className={styles.imgTitle}>Sabemos que quieres viajar en {airline}</div>
                </div>
                <div id="myModal" className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p>Tu información fue enviada con éxito, estaremos en contacto contigo!</p>
                    </div>
                </div>
                
                <h2>Por favor diligencia el siguiente formulario:</h2>
                <div className={styles.form}>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className={styles.formCols}>
                            <div className={styles.formItem}>
                                <label>Nombre Completo: </label>
                                <input type='text' value={input.name} name='name' placeholder='Jon Doe' onChange={(e) => handleChange(e)} onBlur={(e) => handleBlur(e)} />
                                {errors.name && (<p>{errors.name}</p>)}
                            </div>
                            <div className={styles.formItem}>
                                <label>Email: </label>
                                <input type='email' value={input.email} name='email' placeholder='tuemail@email.com' onChange={(e) => handleChange(e)} onBlur={(e) => handleBlur(e)} />
                                {errors.email && (<p>{errors.email}</p>)}
                            </div>
                        </div>
                        <div className={styles.formCols}>
                            <div className={styles.formItem}>
                                <label>Celular: </label>
                                <input type='number' value={input.phone} name='phone' placeholder='555 555 55 55' onChange={(e) => handleChange(e)} />
                                {errors.phone && (<p>{errors.phone}</p>)}
                            </div>
                            <div className={styles.formItem}>
                                <label>Edad: </label>
                                <input type='number' value={input.age} name='age' placeholder='31' onChange={(e) => handleChange(e)} onBlur={(e) => handleBlur(e)} />
                                {errors.age && (<p>{errors.age}</p>)}
                            </div>
                        </div>
                        {Object.keys(errors).length === 0 && input.name.length >= 1 ?
                            <button type='submit' onClick={openModal}>Enviar</button> : null
                        }
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home