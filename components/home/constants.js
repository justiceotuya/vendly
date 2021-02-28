const mobileWallpapers = [
    'https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/Roughee.jpg?alt=media&token=e0ee70df-69fe-425d-b74c-06aa1a5cd07b',
    'https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/p237m1486577.jpg?alt=media&token=9d521554-9ba2-491d-a87f-533762412b3a',
    'https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/howee.jpg?alt=media&token=efa9330c-5d7c-47af-bbee-8fafe85c9324',
    'https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/p1228m2215101.jpg?alt=media&token=60220c26-4b3d-4fe1-9110-84261b10f1ec'
]

const desktopWallpapers = [
    'https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/Creo.jpg?alt=media&token=a3d41e51-2ac9-4ccb-96dd-c6d7b2ff921a',
    'https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/39965380_m.jpg?alt=media&token=0d11e688-d0f5-4551-9aef-7fc8e2648d90',
    'https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/132262320_m.jpg?alt=media&token=ae28d071-cf51-4bbf-8183-adbfb6346e53',
    'https://firebasestorage.googleapis.com/v0/b/opsonite-87ba4.appspot.com/o/15997411_m.jpg?alt=media&token=0f747c85-36c2-4f78-b4c7-ead87af5b37e'
]

export const generateRandomWallpaper = () => {
    const getWallpaper = (typeOfWallpaper) => typeOfWallpaper[Math.floor(Math.random() * (typeOfWallpaper.length))]

    return {
        desktop: getWallpaper(desktopWallpapers),
        mobile: getWallpaper(mobileWallpapers),
    }
}
