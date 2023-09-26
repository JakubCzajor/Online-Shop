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
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const [favourite, setFavourite] = useState([])
    const [sort, setSort] = useState("featured")

    // API call
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                const updatedProducts = data.map(product => ({
                    ...product,
                    isFavourite: false,
                  }));
                setAllItems(updatedProducts)
            })
            .then(setLoading(false))
    }, [])

    // Pagination
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(allItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(allItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, allItems]);

    function pageClick(event) {
        const newOffset = event.selected * itemsPerPage % allItems.length;
        setItemOffset(newOffset);
    }
    
    function changeItemsPerPage(event) {
        setItemsPerPage(event.target.value)
    }
    
    // Favourite
    useEffect(() => {
        const favouriteArray = []
        for(let i = 0; i < allItems.length; i++) {
            const item = allItems[i]
            item.isFavourite && favouriteArray.push(item.id)  
        }
        setFavourite(favouriteArray)
    }, [allItems])

    function toggleFavourite(id) {
        setAllItems(oldItems => oldItems.map(obj => {
            return obj.id === id ?
            {...obj, isFavourite: !obj.isFavourite} :
            obj
        }))
    }
    
    // Sorting
    useEffect(() => {
        const sortedArray = [].concat(allItems)
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
        setAllItems(sortedArray)
    }, [sort])

    function sortItems(event) {
        setSort(event.target.value)
    }

    // Mapping
    const itemElements = currentItems.map(item => (
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
        <Main
            itemElements={itemElements}
            pageClick={pageClick}
            pageCount={pageCount}
            itemsPerPage={itemsPerPage}
            changeItemsPerPage={changeItemsPerPage}
            loading={loading}
            sort={sort}
            sortItems={sortItems}

        />
    </>
  )
}