import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link className="nav-link active" aria-current="page" to="/"  href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">About</a> */}
                                <Link to="../about" className="nav-link" href="#">About</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Users</a> */}
                                <Link to="../users" className="nav-link"  href="#">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="use-context-example" className="nav-link">Usecontext</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="use-reducer-example" className="nav-link">Usereducer</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li>
                                        {/* <a className="dropdown-item" href="#">Mobiles</a> */}
                                        <Link to="../mobiles" className="dropdown-item"  href="#">Mobiles</Link>
                                        
                                    </li>
                                    <li><a className="dropdown-item" href="#">Laptops</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Users</a> */}
                                <Link to="../cart" className="nav-link"  href="#">Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="login" className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;