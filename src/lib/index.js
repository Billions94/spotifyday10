

export const fetchSongs = async (url) => {
    try {
        const response = await fetch(url)
        if(response.ok) {
            const data = response.json()
            console.log(`Here is your data`, data)
            return data

        } else {
            console.log(`Ooops we got an error while fetching response`)
        }
        
    } catch (error) {
        console.error(error)
    }
}


