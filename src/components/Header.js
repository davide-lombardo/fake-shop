import { useState, useEffect } from 'react';

import styles from '../style/Header.module.scss';
import logo from '../images/logo.png';
import { TrashIcon } from '@heroicons/react/solid';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Dropdown, Nav, Badge, Button } from 'react-bootstrap'

import Searchbar from './Searchbar';

import { Link } from 'react-router-dom';

import { removeFromBasket } from '../redux/actions/productActions'
import { useSelector, useDispatch } from "react-redux";


const Header = () => {
    
    const { basket } = useSelector(state => ({ ...state.shop}))
    const { currentUser } = useSelector(state => ({ ...state.login}))
    
    const [ basketCount, setBasketCount ] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        let count = 0;
        basket.forEach((item) => { count += item.qty; });

        setBasketCount(count);
        console.log(currentUser)
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
        <header className={styles.Container}>

            <Link to="/">
                <img 
                    src={logo} 
                    alt='logo'
                    className={styles.headerLogo}
                />
            </Link>

            <Searchbar />
                
            <div className={styles.headerNav}>
                <Link to="/login" className={styles.headerOption}>
                    <div>
                        <span className={styles.headerOptionLineOne}>Hello {!currentUser ? 'Guest' : currentUser}</span><br/>
                        <span className={styles.headerOptionLineTwo}>{currentUser ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
            </div>
           
            <Nav>
                <Dropdown>
                    <Dropdown.Toggle className={styles.dropDownTogle}>
                        <ShoppingCartIcon className={styles.headerBasket}/>
                        <Badge>{basketCount}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
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
        </header>
        </> 
    )
}

export default Header


// const handleAuthenticaton = () => {
//     if (user) {
//       auth.signOut();
//     }
//   }

