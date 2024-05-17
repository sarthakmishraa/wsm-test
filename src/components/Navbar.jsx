import "./Navbar.css"

export const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="NavbarLeft">
                <h1>WSM</h1>
            </div>
            <div className="NavbarRight">
                <h3>Products</h3>
                <h3>Services</h3>
                <h3>Contact Us</h3>
                <h3>Media</h3>
                <h3>Gallery</h3>
            </div>
        </div>
    )
};