import styles from './Login.module.scss'
import logo from '../../images/logo.png';
import { EyeIcon } from '@heroicons/react/outline'
import { EyeOffIcon } from '@heroicons/react/outline'
import { Alert } from 'react-bootstrap'


import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginInitiate } from '../../redux/actions/authActions'
import { setLoading } from '../../redux/actions/productActions';


const Login = () => {

    const [ error, setError ] = useState('')
    const [ state, setState ] = useState({
        email: '',
        password: '',
    })

    const { email, password } = state

    const { currentUser } = useSelector(state => ({ ...state.user}))
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        
        try {
            setError('')
            setLoading(true)

            dispatch(loginInitiate(email, password))
            
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)
        setState({email: '', password: ''})
    }

    const handleChange = (event) => {
        let { name, value } = event.target
        setState({ ...state, [name]: value })
    }


    return (
    <>
   
    <div className={styles.flexContainer}>

        <div className="row">
            <div className="col-md">
                {error && <Alert variant='danger'>{error}</Alert>}
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <h2 className="text-center">Log in</h2>
                    
                    <div className="form-group my-3">
                        <label htmlFor="InputEmail">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            className="form-control my-2 p-3" 
                            id="inputEmail" 
                            placeholder="Email Address"
                            value={email} 
                            onChange={handleChange}
                            required 
                        >
                        </input>
                        <small id="emailHelp" className="form-text text-m.signInuted"></small>
                    

                        <div className={styles.inputContainer}>
                            <i className={styles.eyeIcon} onClick={togglePasswordVisiblity}>
                                {
                                    passwordShown ? <EyeIcon/> : <EyeOffIcon/>
                                }
                            </i>
                            <label htmlFor="InputPassword">Password</label>
                            <input 
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                className="form-control my-2 p-3" 
                                id="inputPassword" 
                                placeholder="Password"
                                onChange={handleChange}
                                value={password} 
                                required
                            >
                            </input>
                        </div>
            
                   
                        <div className={styles.buttonContainer}>
                            <button 
                                type="submit"
                                className={styles.productBtn}
                            >   Log In
                            </button>                       
                        </div>
                        <div className={styles.registerContainer}>
                        <hr />
                            <p className='text-center'>Don't have an accout?</p>
                            <Link to='/register'>
                                <button 
                                    type="button" 
                                    disabled={ currentUser }
                                    className={styles.registerBtn}
                                >   Create a new account
                                </button>
                            </Link>

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

export default Login


