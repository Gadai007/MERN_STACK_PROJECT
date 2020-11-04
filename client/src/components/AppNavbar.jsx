import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

const AppNavbar = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return(
        <Navbar dark expand='sm' className='mb-5 navbar' >
        <Container>
            <NavbarBrand href='/' >Shopping</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href='https://github.com/Gadai007'>
                            GitHub
                    </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
    )   
}

export default AppNavbar