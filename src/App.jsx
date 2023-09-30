import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './App.css';

export default function App() {

    const [allProducts, setAllProducts] = useState([])
    const [sort, setSort] = useState([])

    // API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then(data => setAllProducts(data))
    }, [])
           
    // Sorting
    useEffect(() => {
        const sortedArray = [].concat(allProducts)
        .sort((a, b) => {
            switch(sort) {
                case 'featured':
                    return a.id - b.id
                case 'price-asc':
                    return a.price - b.price
                case 'price-desc':
                    return b.price - a.price
                case 'rating':
                    return b.rating.rate - a.rating.rate
                default:
                    console.log()
            }
        })
        setAllProducts(sortedArray)
    }, [sort])

    const sortProducts = (event) => {
        setSort(event.target.value)
    }

  return (
    <>
        <Header />
        <Main
            allProducts={allProducts}
            sortProducts={sortProducts}
        />
    </>
  )
}