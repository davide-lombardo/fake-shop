import { useEffect, useState } from "react";

import styles from '../style/Checkout.module.scss'
import { Button, ListGroup } from "react-bootstrap";

import Header from '../components/Header'
import BasketProduct from "../components/BasketProduct";

import { useSelector } from "react-redux";

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
    <Header/>

    <div className={styles.home}>
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
      </div>
    </div>
  </>
  );
};

export default Checkout;

