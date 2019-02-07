import React from 'react';

import styles from './Header.less';

const Header = () => {
    console.log('header++');
    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light bg-white`}>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarColor01'>
                <ul className='navbar-nav ml-5'>
                    <li className='nav-item active'>
                        <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#'>Settings</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
