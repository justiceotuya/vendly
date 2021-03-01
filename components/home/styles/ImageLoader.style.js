import styled from 'styled-components'

export const StyledMain = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 90px);


  .loader {
    position: relative;
    /* bottom: 90px; */
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
