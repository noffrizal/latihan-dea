const Navbar = (props) => {
    return(
        <div>
            <h1>{props.navHeading}</h1>
        <ul>
            <li>
                <a href="google.com">Home</a>
            </li>
            <li>
                <a href="google.com">About</a>
            </li>
            <li>
                <a href="google.com">Contact</a>
            </li>
            <li>
                <a href="google.com">{props.test}</a>
            </li>
        </ul>
    </div>
    )
    
}

export default Navbar