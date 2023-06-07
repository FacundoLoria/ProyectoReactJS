import '../src/App.css'

const ItemListContainer = () => {

    return(
        <div className="lista_productos">
            <h2>Lista de productos</h2>
            <hr/>
            <div className='productos'>
        
                 <img src="./public/productos/pote_55_natural.jpg" alt="pote 55 natural" />
                    <p>Pote 55 - Natural</p>

                <img src="./public/productos/pote_140_natural.jpg" alt="pote 140        natural" />
                    <p>Pote 140 - Natural</p>

                <img src="./public/productos/pote_230_natural.jpg" alt="pote 230 natural" />
                    <p>Pote 230 - Natural</p>

                <img src="./public/productos/pote_800_natural.jpg" alt="pote 800 natural" />
                    <p>Pote 800 - Natural</p>
            </div>
        <hr/>
        </div>
    )   
}

export default ItemListContainer