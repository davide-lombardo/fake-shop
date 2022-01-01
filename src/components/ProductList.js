import styles from  '../style/ProductList.module.scss'

import Loading from './Loading'
import ProductCard from './ProductCard'

import { useSelector } from 'react-redux'

const ProductList = ( ) => {

  const { loading } = useSelector(state => ({...state.shop}))

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