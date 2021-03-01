import React, { useState, useEffect } from 'react'
import { StyledMain } from '../styles/ImageLoader.style'
import Lottie from 'react-lottie';
import loadingData from '../../../public/assets/lotties/vendly-loading.json';
// import { generateRandomWallpaper } from '../constants.js'


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export const ImageLoader = ({ isImageLoaded, handleToggleImageLoad, decodedData }) => {

    const { desktop, mobile } = decodedData

    const [currentWallPaper, setCurrentWallPaper] = useState({
        desktop: null,
        mobile: null
    })
    useEffect(() => {
        const handleGenerateWallPaper = () => {
            setCurrentWallPaper({ currentWallPaper, ...generateRandomWallpaper() })
        }

        handleGenerateWallPaper()

    }, [desktop])

    const generateRandomWallpaper = () => {
        const getWallpaper = (typeOfWallpaper) => typeOfWallpaper && typeOfWallpaper[Math.floor(Math.random() * (typeOfWallpaper.length))]

        return {
            desktop: getWallpaper(desktop),
            mobile: getWallpaper(mobile),
        }
    }

    return (
        <StyledMain isImageLoaded={isImageLoaded}>
            <img
                src={currentWallPaper.desktop}
                srcSet={`${currentWallPaper.mobile} 767w, ${currentWallPaper.desktop} 1200w`}
                alt="wallpaper"
                onLoad={handleToggleImageLoad}
                className="image-background"
            />

            {
                isImageLoaded ?
                    null
                    :
                    <div className="loader">
                        <Lottie
                            options={defaultOptions}
                            height={150}
                            width={150}
                        />
                    </div>}
        </StyledMain>

    )
}
