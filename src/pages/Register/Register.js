import logo from '../../images/logo.png';
import styles from './Register.module.scss'
import { EyeIcon } from '@heroicons/react/outline';
import { EyeOffIcon } from '@heroicons/react/outline';
import { Alert } from 'react-bootstrap'

import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { registerInitiate } from '../../redux/actions/authActions'

import { setLoading } from '../../redux/actions/productActions';
 
const Register = () => {

    const [ error, setError ] = useState('')
    const [ state, setState ] = useState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })


    const dispatch = useDispatch()

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
            <div className={styles.flexContainer}>

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
    
        </>
    )
}

export default Register
