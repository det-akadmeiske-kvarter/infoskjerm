import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Header'>
                <img id='logo' src="https://kvarteret.no/wp-content/uploads/2016/10/pingvinlogo_pms1797_hvit_360.png"></img>
            </div>
         );
    }
}
 
export default Header;