import { useState, useEffect } from 'react';
import Product from '../product/Product';
import Pagination from '../pagination/Pagination';
import Options from '../options/Options';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import './Content.css';

export default function Content(props) {
    
    const [currentProducts, setCurrentProducts] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [productOffset, setProductOffset] = useState(0)
    const [productsPerPage, setProductsPerPage] = useState(6)

    useEffect(() => {
        const endOffset = productOffset + productsPerPage
        setCurrentProducts(props.allProducts.slice(productOffset, endOffset))
        setPageCount(Math.ceil(props.allProducts.length / productsPerPage))
    }, [productOffset, productsPerPage, props.allProducts]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * productsPerPage % props.allProducts.length
        setProductOffset(newOffset)
    }

    const changeProductsPerPage = (event) => {
        setProductsPerPage(event.target.value)
    }

    const productElements = currentProducts.map(product => (
        <Col xs={12} sm={6} md={4} key={product.id}>
            <Product {...product} />
        </Col>
    ))

    return (
        <Container className='products-container'>
            <Options
                sortProducts={props.sortProducts}
                productsPerPage={productsPerPage}
                changeProductsPerPage={changeProductsPerPage}
                />
            <Row>
                {props.allProducts.length == 0 && <Spinner className='loading-spinner' animation='border' variant='primary' />}
                {productElements}
            </Row>
            <Pagination
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            />
        </Container>
    )
}