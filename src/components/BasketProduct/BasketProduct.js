import { useState } from "react"

import styles from "./BasketProduct.module.scss"
import { TrashIcon } from '@heroicons/react/solid';

import { useDispatch } from "react-redux";
import { changeCardQty, removeFromBasket } from "../../redux/actions/productActions"

const BasketProduct = ({ item }) => {

  const [ input, setInput ] = useState(item.qty);

  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(removeFromBasket(item.id))
  }

  const onChangeHandler = (event) => {
    setInput(event.target.value)
    dispatch(changeCardQty(item.id, event.target.value))
  }

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItemImage}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItemDetails}>
        <p className={styles.detailsTitle}>{item.title}</p>
        <p className={styles.detailsPrice}>$ {item.price}</p>
      </div>
      <div className={styles.cartItemActions}>
        <div className={styles.cartItemQty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
          <TrashIcon 
            className={styles.TrashIcon} 
            onClick={removeFromCart}
          />
      </div>
    </div>
  );
};


export default BasketProduct;