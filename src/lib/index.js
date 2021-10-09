import {useState, useEffect} from 'react'

// const query = 'James'

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


// btn-black
// username-home
// btn-border

{/* <img src="./images/adult-1.png" width="25px" alt />
Alexander */}

//   fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjJhYTRiYjUzZDAwMTViMTllZGUiLCJpYXQiOjE2MzM1NDE4OTAsImV4cCI6MTYzNDc1MTQ5MH0.E5iGDi_e-mdXEXn4DV7GNx_1JeAQhAkiygtOJdyhb4w"
// }
// }