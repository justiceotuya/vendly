import React, { useState, useEffect } from 'react';
import { StyledContainer, StyledHeader, StyledMain } from './styles/Home.style';
import { Header, ImageLoader, Strip } from './components';


export default function Home() {



    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [decodedData, setDecodedData] = useState({})
    const [isDataDecoded, setIsDataDecoded] = useState(false)


    useEffect(() => {
        const handleCloseMenu = () => {
            isMenuOpen && setIsMenuOpen(false)
        }

        window.addEventListener("click", handleCloseMenu);

        return () => {
            window.removeEventListener("click", handleCloseMenu);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const cleanupDecodedSiteAndSendDataToObject = () => {
            const decodedSites = handleDecodeSite()

            let newObject = {}
            decodedSites.map(item => {
                //we need to replace the first equality signs to something arbitrary and the
                //use split to split the key and value based on that arbitrary value. we are
                //doing
                //this because there is equality signs in the urls of some valus
                let newItem = item.replace("=", "@#@#").split('@#@#')

                if (Object.keys(newObject).includes(newItem[0])) {
                    if (typeof newObject[newItem[0]] === "string") {
                        newObject = { ...newObject, [newItem[0]]: [newObject[newItem[0]], newItem[1]] }
                    } else {
                        newObject = { ...newObject, [newItem[0]]: [...newObject[newItem[0]], newItem[1]] }
                    }
                }
                else {
                    newObject[newItem[0]] = newItem[1]
                }

                if (newItem[0] == "mobile" || newItem[0] == 'desktop') {
                    newObject[newItem[0]] = newItem[1].replace(/,http/g, '@@##http').split('@@##')
                }
            })

            setIsDataDecoded(true)
            setDecodedData(newObject)
        }


        setTimeout(cleanupDecodedSiteAndSendDataToObject, 3000);

        () => {
            clearTimeout(cleanupDecodedSiteAndSendDataToObject)
        }
    }, []);


    const handleDecodeSite = () => {
        let newSite = window.location.href.split('?')
        newSite.splice(0, 1)
        newSite = newSite.join('?')
        let siteToDecode = newSite.split('&&')
        return siteToDecode.map(site => decodeURIComponent(site))
    }





    const handleOpenMenu = () => {
        console.log('clicked')
        setIsMenuOpen(isMenuOpen => !isMenuOpen)
    }

    const handleToggleImageLoad = () => {
        setIsImageLoaded(true)

    }

    return (
        <StyledContainer>
            <Header
                handleOpenMenu={handleOpenMenu}
                decodedData={decodedData}
                isMenuOpen={isMenuOpen}
            />
            <ImageLoader
                isImageLoaded={isImageLoaded}
                handleToggleImageLoad={handleToggleImageLoad}
                decodedData={decodedData}
            />
        </StyledContainer>
    )
}
