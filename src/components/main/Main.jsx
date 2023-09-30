import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';
import './Main.css';

export default function Main(props) {

    return (
        <main className='main container'>
            <Sidebar />
            <Content
                allProducts={props.allProducts}
                sortProducts={props.sortProducts}
            />
        </main>
    )
}