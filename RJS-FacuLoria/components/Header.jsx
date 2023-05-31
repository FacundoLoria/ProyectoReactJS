import '../src/App.css'

const Header = () => {  
    return (
        <header className="header">
            <div className="header_container">
            <h1 className="header_logo">Facu Loria</h1>

                <nav className="header_nav">
                    <a href="a" className='links'>Inicio</a>
                    <a href="b" className='links'>Productos</a>
                    <a href="c" className='links'>Contacto</a>
                </nav>

            </div>
        </header>
    )
}

export default Header