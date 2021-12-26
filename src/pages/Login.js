import { useState } from 'react'

import styles from '../style/Login.module.scss'
import logo from '../images/logo.png';
import { EyeIcon } from '@heroicons/react/outline';
import { EyeOffIcon } from '@heroicons/react/outline';


import Header from '../components/Header'
import Footer from '../components/Footer'

import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'

//import { useFirebase } from "react-redux-firebase";
//import { logOut, logIn, signIn } from '../firebaseConfig'
import { loginInitiate } from '../redux/actions/authActions'



const Login = () => {

    const [ state, setState ] = useState({
        email: '',
        password: '',
    })

    const { email, password } = state

    const { currentUser } = useSelector((state) => state.login)

    const [ passwordShown, setPasswordShown ] = useState(false)

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const dispatch = useDispatch()

    // const firebase = useFirebase()

    // const emailRef = useRef()
    // const passwordRef = useRef()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if( !email || !password ) {
            return
        }
        dispatch(loginInitiate(email, password))
        setState({email: '', password: ''})
    }

    const handleChange = (event) => {
        let { name, value } = event.target
        setState({ ...state, [name]: value })

    }


    // async function handleRegister() {
        
    //     try {
    //         await signIn(emailRef.current.value, passwordRef.current.value)
    //     } catch {
    //         alert('error')
    //     }
      
    // }

    // async function handleLogOut() {
       
    //     try {
    //         await logOut()
    //     } catch {
    //         alert('error')
    //     }
     
    // }

    // async function handleLogIn() {
        
    //     try {
    //         await logIn(emailRef.current.value, passwordRef.current.value)
    //     } catch {
    //         alert('error')
    //     }
       
    // }

  


    return (
    <>
    <Header/>

    <div className="d-flex flex-row justify-content-center my-3">

        <div>Curruently logged in as: {currentUser?.email}</div>

        <div className="row">
            <div className="col-md">
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <h2 className="text-center">Log in</h2>
                    
                    <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            className="form-control my-2" 
                            id="inputEmail" 
                            aria-describedby="emailHelp" 
                            placeholder="Email Address"
                            value={email} 
                            onChange={handleChange}
                            required 
                        />
                        <small id="emailHelp" className="form-text text-m.signInuted"></small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            className="form-control my-2" 
                            id="inputPassword" 
                            placeholder="Password"
                            onChange={handleChange}
                            value={password} 
                            required
                        />
                        <i className={styles.eyeIcon} onClick={togglePasswordVisiblity}>
                            {
                                passwordShown ? <EyeIcon/> : <EyeOffIcon/>
                            }
                        </i>
                        <div className={styles.buttonContainer}>
                            <button 
                                type="submit" 
                                className={styles.productBtn}
                            >   Log In
                            </button>

                            <button
                                type="button"
                                disabled={ !currentUser }
                                className={styles.productBtn}
                            >   Log out
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
   
    <Footer/>
    </>
    )
}

export default Login


