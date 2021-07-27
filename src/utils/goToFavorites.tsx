import { PicData } from "./interfaces"

export const getFavorites = () => {
    const unserialFavorites = localStorage.getItem('favorites')
    const favorites: PicData[] = unserialFavorites ? JSON.parse(unserialFavorites) : []

    return favorites
}

export const goToFavorites = (picture: PicData, like: boolean) => {
    const favorites = getFavorites()
    let newFavorites: PicData[] = [ ...favorites]

    if (like) {
        newFavorites = newFavorites.filter(pic => pic.id !== picture.id)
    } else {
        newFavorites.push(picture)
    }
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
}



