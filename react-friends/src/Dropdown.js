import React, { Component } from 'react';

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
         showmenu: false, 
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        }

        showMenu(event) {
            event.preventDefault();
            
            this.setState({ showMenu: true }, () => {
              document.addEventListener('click', this.closeMenu);
            });
          }

        closeMenu() {
            this.setState({ showMenu: false }, () => {
              document.removeEventListener('click', this.closeMenu);
            });
          }


    render() {
        return (
          <div>
            <button onClick={this.showMenu}>Friend's List</button>
            
            {
              this.state.showMenu
                ? (
                  <div className="menu">
                    <button> Menu item 1 </button>
                    <button> Menu item 2 </button>
                    <button> Menu item 3 </button>
                    <button> Menu item 3 </button>
                  </div>
                )
                : (
                  null
                )
            }
          </div>
        );
      }
}   
export default Dropdown;