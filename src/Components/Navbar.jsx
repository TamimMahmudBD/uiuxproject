import React, { Component } from "react";
import navIcon from './images/menu-icon.png'

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <nav class="bg-white  ">
        <div class="flex justify-between items-center ">
          <button 
            className='cursor-pointer text-gray-800 hover:text-gray-900'
            class={`${isOpen ? "hidden" : "block"}`}
            onClick={this.toggleMenu}>
            <h1 className="w-6 "><img src={navIcon} alt="" /></h1>
          </button>
          <button className="cursor-pointer text-gray-800 hover:text-gray-900"
            class={` ${isOpen ? "block" : "hidden"}`}
            onClick={this.closeMenu}>
            <h1 className="w-6 text-right"><img src={navIcon} alt="" /></h1>
          </button>
        </div>
        <ul className="flex-col justify-between items-center"
          class={` py-2 ${isOpen ? "block" : "hidden"}`}
        >
          <li>
            <a href="/" class="text-gray-800 hover:text-gray-900">Home</a>
          </li>
          <li>
            <a href="/Service" class="text-gray-800 hover:text-gray-900">Service</a>
          </li>
          <li>
            <a href="/" class="text-gray-800 hover:text-gray-900">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }

  closeMenu = () => {
    this.setState({
      isOpen: false,
    });
  };
}

export default Navbar;
