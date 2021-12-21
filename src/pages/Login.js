import React from 'react'
import { useRef } from 'react'

import styles from '../style/Login.module.scss'

import logo from '../images/logo.png';

import Loading from '../components/Loading'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { logOut, logIn, signIn, useAuth } from '../firebase'

import { setLoading } from '../redux/actions/productActions'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'



function Login() {
    
    const currentUser = useAuth()

    const emailRef = useRef()
    const passwordRef = useRef()

    const { loading } = useSelector(state => ({...state.login}))

    async function handleRegister() {
        setLoading(true)
        try {
            await signIn(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert('error')
        }
        setLoading(false)
    }

    async function handleLogOut() {
        setLoading(true)
        try {
            await logOut()
        } catch {
            alert('error')
        }
        setLoading(false)    
    }

    async function handleLogIn() {
        setLoading(true)
        try {
            await logIn(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert('error')
        }
        setLoading(false)
    }



    //const navigate = useNavigate()

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleSignIn = (event) => {
    //     event.prevent.default()

    //     auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(auth => {
    //             navigate('/')
    //         })
    //         .catch(error => alert(error.message))
    // }



    // const handleRegister = (event) => {
    //     event.preventDefault();

    //     auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             if (auth) {
    //                 navigate('/')
    //             }
    //         })
    //         .catch(error => alert(error.message))
    // }

    // const handleEmail = (event) => {
    //     setEmail(event.target.value)
    // }

    // const handlePassword = (event) => {
    //     setPassword(event.target.value)
    // }

    return (
    <>
    <Header/>
    {
    loading ? <Loading/> :
    <div className="d-flex flex-row justify-content-center my-3">

    <div>Curruently logged in as: {currentUser?.email}</div>

        <div className="row">
            <div className="col-md">
                <form className={styles.formContainer}>
                    <div>
                        <div>Sign In</div>          
                        <div className="form-group my-3">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" ref={emailRef} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"></input>
                            <small id="emailHelp" className="form-text text-m.signInuted"></small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} {'\u00A0'} Forgot your password? </label>
                            <input type="password" ref={passwordRef} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                            <div className="form-group my-3">
                                <button 
                                    type="button" 
                                    onClick={handleLogIn}
                                    className={styles.productBtn}
                                >   Log In
                                </button>
                                <Link>
                                    <img 
                                        className={styles.headerLogo} 
                                        src={logo} 
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="form-check"></div>
                    <button 
                        type="button" 
                        disabled={ loading || currentUser }
                        onClick={handleRegister}
                        className={styles.productBtn}
                    >   Create your Amazon account
                    </button>

                    <button
                        type="button"
                        disabled={ loading || !currentUser }
                        onClick={handleLogOut}
                        className={styles.productBtn}
                    >   Log out
                    </button>

                </form> 
            </div>
        </div>
    </div>
    }
    <Footer/>
    </>
    )
}

export default Login


// <p>
// By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
// see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
// </p>