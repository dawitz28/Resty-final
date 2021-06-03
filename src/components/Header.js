import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
        <header>
<h1> Resty </h1>
<nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">history</Link>History</li>
        <li><Link to="/">help</Link>Help</li>

    </ul>
</nav>
        </header>

    );
  }
}

export default Header;