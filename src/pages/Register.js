import logo from '../images/logo.png';
import styles from '../style/Register.module.scss'

import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerInitiate } from '../redux/actions/authActions'

import Header from '../components/Header'
import Footer from '../components/Footer'
 
const Register = () => {
    const [ state, setState ] = useState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const { currentUser } = useSelector((state) => state.login)

    

    const {
        email,
        password,
        displayName,
        passwordConfirm,
    } = state



    const navigate = useNavigate()

    useEffect(() => {
        if(currentUser) {
            navigate(-1)
            //history.push('/')
        }
    }, [currentUser, navigate])

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (password !== passwordConfirm) {
            return
        }
        dispatch(registerInitiate(email, password, displayName))
        setState({email: '', displayName: '', password: '', passwordConfirm: ''})
    }
    
    const handleChange = (event) => {
        let { name, value } = event.target
        setState({...state, [name]: value})
    }

    return (
        <>
        <Header/>

            <div className="d-flex flex-row justify-content-center my-3">

                <div className="row">
                    <div className="col-md">
                        <form className={styles.formContainer} onSubmit={handleSubmit}>
                         
                                <h2 className="text-center">Create account</h2>
                                <div className="form-group my-3">
                                    <label htmlFor="InputName">Name</label>
                                        <input 
                                            type="text" 
                                            onChange={handleChange} 
                                            className="form-control my-2" 
                                            id="displayName" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Full Name"
                                            name='displayName'
                                            value={displayName} 
                                            required 
                                        >
                                        </input>
                                    <small id="emailHelp" className="form-text text-m.signInuted"></small>

                                    <label htmlFor="InputEmail">Email</label>
                                    <input 
                                        type="email" 
                                        onChange={handleChange} 
                                        className="form-control my-2" 
                                        id="user-email" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Email"
                                        name='email'
                                        value={email} 
                                        required 
                                    >
                                    </input>
                                    <small id="emailHelp" className="form-text text-m.signInuted"></small>

                                    <label htmlFor="Password">Password</label>
                                    <input 
                                        type="password" 
                                        onChange={handleChange}  
                                        className="form-control my-2" 
                                        id="inputPassword" 
                                        placeholder="Password"
                                        value={password}
                                        name='password'
                                        required 
                                    >
                                    </input>

                                    <label htmlFor="Confirm password">Confirm password</label>
                                    <input 
                                        type="password" 
                                        onChange={handleChange}  
                                        className="form-control my-2" 
                                        id="inputRePassword" 
                                        placeholder="Repeat password"
                                        value={passwordConfirm}
                                        name='passwordConfirm'
                                        required 
                                    >
                                    </input>
                                </div>

                                <div className="form-group">
                                    <div className={styles.buttonContainer}>
                                        <button 
                                            type="submit" 
                                            disabled={ currentUser }
                                            className={styles.productBtn}
                                        >   Sign in
                                        </button>                          

                                        <Link to={'/'}>
                                            <img 
                                                className={styles.formLogo} 
                                                src={logo} 
                                                alt="logo"
                                            />
                                        </Link>
                                    </div>
                                </div>
                        
                        </form> 
                    </div>
                </div>
            </div>

        <Footer/>        
        </>
    )
}

export default Register
