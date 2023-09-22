import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import MyNavbar from './components/MyNavbar'
import Item from './components/Item'
import { Container } from 'react-bootstrap'

export default function App() {

    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    const itemElements = allItems.map(item => (
        <Item
            key={item.id}
            title={item.title}
            price={item.price}
            category={item.category}
            description={item.description}
            image={item.image}
        />
    ))

  return (
    <>
      <MyNavbar />
      <Container className='items--container'>
        {itemElements}
      </Container>
    </>
  )
}