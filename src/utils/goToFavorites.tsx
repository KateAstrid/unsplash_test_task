const goToFavorites = (url: string, like: boolean) => {
    const unserialFavorites = localStorage.getItem('favorites')
    const favorites: Array<string> = unserialFavorites ? JSON.parse(unserialFavorites) : []

    if (like) {
        favorites.push(url)
    } else {
        const index = favorites.indexOf(url);
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

export default goToFavorites