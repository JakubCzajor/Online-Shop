import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import MyNavbar from './components/MyNavbar'
import Main from './components/Main'
import Item from './components/Item'
import Col from 'react-bootstrap/Col';

export default function App() {

    const [loading, setLoading] = useState(true)
    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=15')
            .then(res => res.json())
            .then(data => setAllItems(data))
            .then(setLoading(false))
    }, [])

    const itemElements = allItems.map(item => (
        <Col xs={12} sm={6} md={4} key={item.id} className='test'>
            <Item
                title={item.title}
                price={item.price}
               category={item.category}
                description={item.description}
                image={item.image}
            />
        </Col>
    ))

  return (
    <>
      <MyNavbar />
      <Main itemElements={itemElements} loading={loading} />
    </>
  )
}