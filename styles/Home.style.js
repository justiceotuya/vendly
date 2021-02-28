import styled from 'styled-components'
import { ReactComponent as Logo } from '../assets/icons/logo.svg'

export const StyledContainer = styled.main`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(198, 246, 242);
  overflow-x: hidden;
`

export const StyledMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 90px);


  .loader {
    position: relative;
    bottom: 90px;
  }

    .image-background {
        position: fixed;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    object-fit: cover;
    z-index: 0;
    transform:${props => props.isImageLoaded ? 'scale(1) translateZ(0)' : 'scale(0.9)'};
    opacity: ${props => props.isImageLoaded ? '1' : '0'};
    transition: opacity 1.5s ease-out, transform 0.04s ease-in;
  }
`

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    z-index:1;

    nav {
      position: relative;
    }
    .navigation-links {
      position: absolute;
      background-color: #000000;
      width: 200px;
      right:  ${props => props.isMenuOpen ? '-28px' : '-500px'};
      top: -3px;
      transition: right .2s ease-in-out;

    li > a{
      padding: 10px;
      font-size: 17px;
      color: #17e7b3;
      font-weight: 700;
      width: 100%;
      height: 100%;
      display: block;
    }


    }

    .nav-mobile{
      display: block;
@media screen and (min-width: 768px){
display: none;
}}



  .hamburger-container{
    padding:0;
    width: 35px;
    height: 25px;
    border: none;
    background-color: transparent;
    display: grid;
    place-items: center;
    cursor:pointer;
  }

  .hamburger {
    width: 100%;
    height: 100%;
  }

      .nav-desktop{
      display: none;
@media screen and (min-width: 768px){
display: flex;
}
    }

    .navigation-links__desktop{
      display: flex;
    padding: 10px 20px;
    background: #ffffff;
    border: 1px solid #8EEED8;
    border-radius: 3px;
    font-weight: 500;
    font-size: 17px;

    li {
      padding: 0 20px;
      color: #001413;
    }

    li:nth-child(2){
     margin: 0 10px;
     border-right: 1px dotted #157A7E;
     border-left: 1px dotted #157A7E;
    }

    .user-details{
    color: #005F64;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    a {
      padding: 0 10px;
    }
    }
   .user-more-details, .user-avatar{
      width: 20px;
    height: 20px;
    }
    .user-more-details{

    }
    li>a:hover {
      opacity: .7
    }
    }

`
