import './Navbar.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faHome, faUsers, faComment } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" />
            </div>
            <div className="search">
                <input type="text" placeholder="Search Facebook" />
            </div>
            <div className="nav-icons">
                <div className="nav-icon">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="nav-icon">
                    <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="nav-icon">
                    <FontAwesomeIcon icon={faComment} />
                </div>
            </div>
        </div>
    );
}

export default Navbar;