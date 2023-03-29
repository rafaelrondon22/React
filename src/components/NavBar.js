import React { useState } from 'react'
import styled from 'styled-components'
import button from './button';

function NavBar() {
    return (
        <NavContainers>  
            <h2> NavBar <span>Responsive</span></h2>
            <div>
            <a href='/'>HOME</a>
            <a href='/'>PRODUCTO</a>
            <a href='/'>CONTACTOS</a>
            </div>
            <button/>
        </NavContainers>
    );
  }
  export default NavBar;

const NavContainers = styled.nav`
   h2{
    color: white;
    font-weight: 400;
        span{
            font-weight: bold;
        }
   }
padding: 4rem;
background-color: #333;
display: flex;
align-items: center ;
justify-content: space-between;
a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
}
`