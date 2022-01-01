import logo from '../images/logo.png';
import styles from '../style/Register.module.scss'
import { EyeIcon } from '@heroicons/react/outline';
import { EyeOffIcon } from '@heroicons/react/outline';
import { Alert } from 'react-bootstrap'

import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerInitiate } from '../redux/actions/authActions'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { setLoading } from '../redux/actions/productActions';
 
const Register = () => {

    const [ error, setError ] = useState('')
    const [ state, setState ] = useState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const { currentUser } = useSelector(state => ({ ...state.user}))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        email,
        password,
        displayName,
        passwordConfirm,
    } = state

    const [ passwordShown, setPasswordShown ] = useState(false)

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
   
    useEffect(() => {
        if(currentUser) {
            navigate("/")   
        }
    }, [navigate, currentUser])

    

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (password !== passwordConfirm) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            dispatch(registerInitiate(email, password, displayName))
            setState({email: '', displayName: '', password: '', passwordConfirm: ''})
        } catch {
            setError('Failed to create an account')

        }
        
        setLoading(false) 
    }
    
    const handleChange = (event) => {
        let { name, value } = event.target
        setState({ ...state, [name]: value})
    }

    return (
        <>
        <Header/>

            <div className="d-flex flex-row justify-content-center my-3">

                <div className="row">
                    <div className="col-md">
                    {error && <Alert variant='danger'>{error}</Alert>}
                        <form className={styles.formContainer} onSubmit={handleSubmit}>
                         
                            <h2 className="text-center">Create account</h2>
                            <div className="form-group my-3">
                                <label htmlFor="InputName">Name</label>
                                <input 
                                    type="text" 
                                    onChange={handleChange} 
                                    className="form-control my-2 p-3" 
                                    id="displayName"  
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
                                    className="form-control my-2 p-3" 
                                    id="user-email" 
                                    placeholder="Email"
                                    name='email'
                                    value={email} 
                                    required 
                                >
                                </input>
                                <small id="emailHelp" className="form-text text-m.signInuted"></small>

                                <div className={styles.inputContainer}>
                                    <label htmlFor="Password">Password</label>
                                    <i className={styles.eyeIcon} onClick={togglePasswordVisiblity}>
                                        {
                                            passwordShown ? <EyeIcon/> : <EyeOffIcon/>
                                        }
                                    </i>
                                    <input 
                                        type={passwordShown ? "text" : "password"}
                                        onChange={handleChange}  
                                        className="form-control my-2 p-3" 
                                        id="inputPassword" 
                                        placeholder="Password"
                                        value={password}
                                        name='password'
                                        required 
                                    >
                                    </input>
                                    <small id="emailHelp" className="form-text text-m.signInuted"></small>
                                </div>
                              
                                <div className={styles.inputContainer}>
                                    <label htmlFor="Confirm password">Confirm password</label>
                                    <i className={styles.eyeIcon} onClick={togglePasswordVisiblity}>
                                        {
                                            passwordShown ? <EyeIcon/> : <EyeOffIcon/>
                                        }
                                    </i>
                                    <input 
                                        type={passwordShown ? "text" : "password"} 
                                        onChange={handleChange}  
                                        className="form-control my-2 p-3" 
                                        id="inputRePassword" 
                                        placeholder="Repeat password"
                                        value={passwordConfirm}
                                        name='passwordConfirm'
                                        required 
                                    >
                                    </input>
                                </div>                             
                            </div>

                            <div className="form-group">
                                <div className={styles.buttonContainer}>
                                    <button 
                                        type="submit" 
                                        disabled={currentUser}
                                        className={styles.productBtn}
                                    >   Sign up
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
