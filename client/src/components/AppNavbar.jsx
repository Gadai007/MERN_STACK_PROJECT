import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap'
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout'

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
                        <RegisterModal/>
                    </NavItem>
                    <NavItem>
                        <Logout/>
                    </NavItem>
                </Nav>
            </Collapse>
        </Container>
    </Navbar>
    )   
}

export default AppNavbar