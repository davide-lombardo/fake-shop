import { useState } from 'react'

import styles from '../style/Searchbar.module.scss'
import { SearchIcon } from '@heroicons/react/solid'

import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/actions/productActions'

const Searchbar = () => {

    const [ search, setSearch ] = useState('')

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setSearch(event.target.value)
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchProducts(search))  
        setSearch('')
    }

    return (
        <>
        <section>
            <form 
                className={styles.headerSearchWrapper}
                onSubmit={handleSubmit} 
            >
                <input
                    type='text'
                    placeholder='Search a product' 
                    value={search} 
                    className={styles.headerSearchInput}
                    onChange={handleChange} 
                    required
                />
                <button 
                    type="submit"
                    className={styles.headerSearchBtn} 
                >
                    <SearchIcon className={styles.headerSearchIcon} />
                </button>
            </form>
        </section>
        </> 
    )
}

export default Searchbar
