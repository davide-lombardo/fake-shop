import styles from  '../style/ProductList.module.scss'

import Loading from './Loading'
import ProductCard from './ProductCard'

import { useSelector } from 'react-redux'

const ProductList = ( ) => {

  const { products } = useSelector(state => ({...state.shop}))
  const { loading } = useSelector(state => ({...state.shop}))

  if (!products.length === 0 && typeof products === 'string') {
      return (
          <div className={styles.emptySearch}>
            <h3>Unfortunately no products matched your search,</h3>
            <h3>please try another input</h3>
          </div>
      )
  } 

  return (
  <>
    {
      (loading) ? <Loading/> :
      <div className={styles.cardContainer}>
        <ProductCard/>
      </div>
    }
  </>
  )     
}


export default ProductList