import React from "react"
import {Link} from 'react-router-dom';
import './Headers.css'
 const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/Posts"> Posts</Link></li>
                    <li><Link to="/NewPost"> New Posts</Link></li>
                </ul>

            </nav>
        </header>

    )


}

export default Header
