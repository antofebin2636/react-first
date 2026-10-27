import React from 'react';
import './Header.css';

// class Header extends React.Component {

//     const {
//         onMenuSelect
//     } = this.props;

//     render(){
//         return(
//             <div className='app-header'>
//             <span className='header-title'>Code Malayalam</span>
//             <span onClick={}>Home</span>
//             <span>Usage</span>
//             <span>Settings</span>
//             <span>Logout</span>
//           </div>
//         )
//     }
// }

function Header(props){

    const {onMenuSelect}  = props;

    return(
            <div className='app-header'>
            <span className='header-title'>Code Malayalam</span>
          
            <span onClick={ () => onMenuSelect('home') }>Home</span>
              <span onClick={ () => onMenuSelect('usage') }>Usage</span>
              <span onClick={ () => onMenuSelect('settings') }>Settings</span>
              <span onClick={ () => onMenuSelect('logout') }>Logout</span>
          </div>
        )
}

export default Header;