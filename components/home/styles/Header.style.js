import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px 10px 30px;
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
      visibility: ${props => props.action ? 'visible' : 'hidden'};
opacity: ${props => props.action ? 'visible' : 'hidden'};
 transition: opacity .2s ease-in-out;
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
position: relative;
visibility: ${props => props.action ? 'visible' : 'hidden'};
top: ${props => props.action ? '0px' : '10px'};
opacity: ${props => props.action ? 'visible' : 'hidden'};
 transition: opacity 1s ease-in-out, top .2s ease-in;
}
    }

    .navigation-links__desktop{
      display: flex;
    padding: 10px 10px 10px 30px;
    background: #ffffff;
    border-radius: 3px;
    font-weight: 700;
    font-size: 14px;
    opacity :0.9;
    border-radius: 4px;
    border : 1px solid rgb(23, 231, 179);

    li {
      padding: 0 20px;
      color: #001413;
    }

    li:nth-child(2){
     margin: 0 10px;
     border-right: 2px dotted rgb(0,110,114);
     border-left: 2px dotted rgb(0,110,114);
    }

    li:nth-child(3){
    font-weight: 400;
    font-size: 14px;
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
      width: 15px;
      height: 15px;
    }
    .user-avatar{
      position: relative;
      top:2px;
    }
    li>a:hover {
      opacity: .7
    }
    }

`
