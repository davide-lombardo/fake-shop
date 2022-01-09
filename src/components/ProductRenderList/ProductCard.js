import { useState } from 'react';

import styles from './ProductCard.module.scss';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link } from "react-router-dom";

import { addToBasket } from '../../redux/actions/productActions';
import { useDispatch } from "react-redux";


const ProductCard = ({ product }) => {

    const { id, title, image, price } = product

    const [ isAdded, setIsAdded ] = useState(false)

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addToBasket(id))
        setIsAdded(true)
    }  

    return (
        <>
          <div className={styles.product}>
                <Link to={`/${id}`} className='text-decoration-none text-muted'>
                    <img 
                        src={image} 
                        alt="thumbnail" 
                        className={styles.productThumbnail}
                    /> 
                    <div className={styles.productDetails}>
                        <p className={styles.productTitle}>
                            {title}
                        </p>
                        <p className={styles.productPrice}>
                            <small>$</small>
                            <strong>{price}</strong>
                        </p>
                    </div>                    
                </Link>
                <button 
                    type='button'
                    disabled={isAdded} 
                    onClick={addToCart}
                    className={classNames([
                        styles.productBtn,
                        isAdded && styles.isAddedBtn
                    ])}
                >   {(isAdded) ? 'Added to the basket' : 'Add to basket'}
                </button>   
                   
            </div>  
        </>
    )
}

ProductCard.defaultProps = {
    title: '',
    thumbnail: '',
    id: 0,
    price: 0,
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}

export default ProductCard
