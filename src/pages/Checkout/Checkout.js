import { useEffect, useState } from "react";

import styles from './Checkout.module.scss'
import { Button, ListGroup } from "react-bootstrap";

import BasketProduct from "../../components/BasketProduct/BasketProduct";

import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const Checkout = () => {

  const { basket } = useSelector(state => ({ ...state.shop}))
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ totalItems, setTotalItems ] = useState(0);

  useEffect(() => {
    let items = 0
    let price = 0

    basket.forEach((item) => {
      items += item.qty
      price += item.qty * item.price
    })

    setTotalItems(items)
    setTotalPrice(price) 
  }, [basket, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
  <>
    <div className={styles.flexContainer}>

      <div className={styles.main}>

        <div className={styles.aside}></div>
      
        <div className={styles.productContainer}>
          <ListGroup>
            {
              basket.map((item, index) => (
                <BasketProduct key={index} item={item}/>
              ))
            }
          </ListGroup>
        </div>

        <div className={styles.filters}>
          <span className={styles.subtotal}>Subtotal: ({totalItems} items)</span><br/>
          <span className={styles.total} >Total: $ {totalPrice}</span>
         
            <Button 
              className={styles.checkoutBtn} 
              type="button" 
              disabled={basket.length === 0}
            >
              Proceed to Checkout
            </Button>

            <Link to='/'>
              <Button 
                className={styles.backHomeBtn} 
                type="button" 
              >  Back Home
              </Button>
            </Link>  
       
        </div>

      </div>
    </div>
  </>
  );
};

export default Checkout;

