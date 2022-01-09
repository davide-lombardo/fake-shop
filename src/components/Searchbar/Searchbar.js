import { useState } from 'react'

import styles from './Searchbar.module.scss'

import { Form, Button } from 'react-bootstrap';
import { SearchIcon } from '@heroicons/react/solid'

import { useDispatch } from 'react-redux'
import { fetchProducts } from '../../redux/actions/productActions'

const Searchbar = () => {

    const [ search, setSearch ] = useState('')

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setSearch(event.target.value)
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchProducts(search.toLocaleLowerCase()))  
        setSearch('')
    }

    return (
        <>
        <section>
            <Form 
                className={styles.headerSearchWrapper}
                onSubmit={handleSubmit} 
            >
                <input
                    type='text'
                    placeholder="men's clothing, jewelery, electronics" 
                    value={search} 
                    className={styles.headerSearchInput}
                    onChange={handleChange} 
                    required
                />
                <Button 
                    type="submit"
                    className={styles.headerSearchBtn} 
                >
                    <SearchIcon className={styles.headerSearchIcon} />
                </Button>
            </Form>
        </section>
        </> 
    )
}

export default Searchbar
