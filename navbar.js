import React,{ useState,useEffect } from 'react';
import {Button} from '../../GlobalStyle';
import{
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from './navbarstyle'
import { ActionBarImage } from './navbarstyle';
import './Navbar.css'
import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa'


const Navbar = () => {

    const [button,setButton] = useState(true)
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const showButton = ()=> {
      if (window.innerWidth <= 960){
        setButton(false)
        }
        else {
        setButton(true)
      }
    }
    const closeMenu = () => setClick(false)
    const [color,setColor]= useState(false)
    const changeColor = () => {
      if (window.scrollY >=  90) {
        setColor(true)
      }
      else {
        setColor(false)
        }
      }
      window.addEventListener('scroll',changeColor)
    useEffect (() =>{
      showButton()
    },[])
    window.addEventListener('resize',showButton);
    const iconStyles = { color: "white", fontSize: "1.5em" };
    return (
      
                 <Nav classname = 'navbar active'>
                    <NavbarContainer>
                        <NavLogo to ='/'>
                        <ActionBarImage/>
                            Desa Bulus
                        </NavLogo>
                        <MobileIcon style={iconStyles} onClick = {handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click} >
                            <NavItem>
                                <NavLinks to = '/'>Beranda</NavLinks>
                            </NavItem>               
                            <NavItem>
                                <NavLinks to = '/ProfileDesa'>Profile Desa</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = '/Pelayanan'>Pelayanan</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = '/Anggaran'>Anggaran</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to = '/Galeri'>Galeri</NavLinks>
                            </NavItem>
                            <NavItemBtn>
                            {button ? (
                                <NavBtnLink to = '/Admin'>
                                    <Button primary> Admin </Button>
                                </NavBtnLink>
                                ) : (
                                    <NavBtnLink to = '/Admin'>
                                    <Button fontBig primary >
                                    Admin
                                    </Button>
                                    </NavBtnLink>
                                 )
                                }
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>

    )}
export default Navbar