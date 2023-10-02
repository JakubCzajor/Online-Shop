import Content from '../content/Content';
import './Main.css';

export default function Main(props) {

    return (
        <main className='main container'>
            <Content
                allProducts={props.allProducts}
                sortProducts={props.sortProducts}
                addToCart={props.addToCart}
            />
        </main>
    )
}