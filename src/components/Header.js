import { useState, useEffect } from 'react';

import styles from '../style/Header.module.scss';
import logo from '../images/logo.png';
import { TrashIcon } from '@heroicons/react/solid';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Navbar, Container, Dropdown, Nav, Badge, Button } from 'react-bootstrap'

import Searchbar from './Searchbar';

import { Link } from 'react-router-dom';

import { removeFromBasket } from '../redux/actions/productActions'
import { logoutInitiate } from '../redux/actions/authActions'
import { useSelector, useDispatch } from "react-redux";


const Header = () => {
    
    const { basket } = useSelector(state => ({ ...state.shop}))
    const { currentUser } = useSelector(state => ({ ...state.user}))

    const handleAuth = () => {
        if(currentUser) {
            dispatch(logoutInitiate())
        }
    }
    
    const [ basketCount, setBasketCount ] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        let count = 0;
        basket.forEach((item) => { count += item.qty; });

        setBasketCount(count);
    }, [basket, basketCount, currentUser]);


    const basketList = basket.map((product, index) => {

        const { id, title, image, price } = product

        const removeFromCart = () => {
            dispatch(removeFromBasket(id))
        }

        return (
            <span className={styles.cartItem} key={index}>
                <img
                    src={image}
                    className={styles.cartItemImg}
                    alt={title}
                />
                <div className={styles.cartItemDetail}>
                    <span className={styles.cartItemTitle}>{title}</span>
                    <span>$ {price}</span>
                </div>
                <TrashIcon
                    className={styles.TrashIcon}
                    onClick={removeFromCart}  
                />
            </span>
        )
    })
     

    return (
        <>
        <Navbar className={styles.navBarContainer} expand="lg">
            <Container>
                <Link to="/">
                    <img 
                        src={logo} 
                        alt='logo'
                        className={styles.headerLogo}
                    />
                </Link>

                

                <Searchbar />

                <Navbar.Toggle aria-controls="basic-navbar-nav" />   
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={styles.headerNav}>
                    <Dropdown title="Dropdown" id="basic-nav-dropdown">
                        <Dropdown.Toggle className={styles.dropDownToggleLogin}>
                            <Link to="/login" className={styles.headerOption}>
                                <div>
                                    <span className={styles.headerOptionLineOne}>
                                        Hello {(currentUser) ? currentUser?.displayName : 'Guest'}
                                    </span><br/>
                                    <span className={styles.headerOptionLineTwo}>
                                        {(currentUser) ? 'Sign out' : 'Sign in'}
                                    </span>
                                </div>
                            </Link>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        {
                            currentUser && 
                            (
                                <Button style={{ width: "90%", margin: "0 10px" }} onClick={handleAuth}>
                                    Log out
                                </Button>
                            )
                        }   
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                
            
                <Nav>
                    <Dropdown title="Dropdown" id="basic-nav-dropdown">
                        <Dropdown.Toggle className={styles.dropDownToggleBasket}>
                            <ShoppingCartIcon className={styles.headerBasket}/>
                            <Badge>{basketCount}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu fluid align={{ lg: 'end' }}>
                        {
                            basket.length > 0 ? (
                                <>
                                    {basketList}
                                    <Link to="/checkout">
                                        <Button style={{ width: "90%", margin: "0 10px" }}>
                                            Go To Checkout
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span className='p-3'>Cart is empty</span>
                            )
                        }   
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>                       
        </Navbar>
        </> 
    )
}

export default Header




