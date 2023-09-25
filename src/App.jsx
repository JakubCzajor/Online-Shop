import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import MyNavbar from './components/MyNavbar'
import Main from './components/Main'
import Item from './components/Item'
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap'

export default function App() {

    const [loading, setLoading] = useState(true)
    const [allItems, setAllItems] = useState([])
    const [favourite, setFavourite] = useState([])
    const [sort, setSort] = useState("featured")

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(data => {
                const productsWithFavourite = data.map(product => ({
                    ...product,
                    isFavourite: false,
                  }));
                setAllItems(productsWithFavourite)
            })
            .then(setLoading(false))
    }, [])

    useEffect(() => {
        const newArray = []
        for(let i = 0; i < allItems.length; i++) {
            const item = allItems[i]
            item.isFavourite && newArray.push(item.id)  
        }
        setFavourite(newArray)
    }, [allItems])

    function toggleFavourite(id) {
        setAllItems(oldItems => oldItems.map(obj => {
            return obj.id === id ?
            {...obj, isFavourite: !obj.isFavourite} :
            obj
        }))
    }
    
    useEffect(() => {
        const newArray = [].concat(allItems)
        .sort((a, b) => {
            return sort === "featured" ?
                a.id - b.id :
            sort === "price-asc" ?
                a.price - b.price :
            sort === "price-desc" ?
                b.price - a.price :
            sort === "rating" ?
                b.rating.rate - a.rating.rate :
            console.log()
            
        })
        setAllItems(newArray)
    }, [sort])

    function sortItems(event) {
        setSort(event.target.value)
    }

    const itemElements = allItems.map(item => (
        <Col xs={12} sm={6} md={4} key={item.id}>
            <Item
                title={item.title}
                price={item.price}
                category={item.category}
                rating={item.rating}
                image={item.image}
                isFavourite={item.isFavourite}
                toggleFavourite={() => toggleFavourite(item.id)}
            />
        </Col>
    ))

  return (
    <>
      <MyNavbar favourite={favourite} />
      <Main itemElements={itemElements} loading={loading} sort={sort} sortItems={sortItems} />
    </>
  )
}