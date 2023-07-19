const Navbar = (title) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-title">{title}</h1>
            </div>
        </nav>
    ); 
}

export default Navbar;