export const GET_SONGS = 'GET_SONGS'
export const GET_ARTIST = 'GET_ARTIST'
export const GET_ALBUMS = 'GET_ALBUMS'
export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST'
export const LIKE_SONGS = 'LIKE_SONGS'
export const SET_SELECTED_ALBUM = 'SET_SELECTED_ALBUM'
export const GET_TRACKLIST = 'GET_TRACKLIST'
export const ARTIST_INFO = "ARTIST_INFO"


export const likedSongsAction = (songs) => ({
    type: LIKE_SONGS,
    payload: songs

})

export const getSongsAction = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=wizkid`)
            if(response.ok) {
                const data = await response.json()
                const newData = data.data
                console.log('i am the data from redux', data)
                dispatch({
                    type: GET_SONGS,
                    payload: newData
                })
            } else {
                console.log('alpha team we have a problem')
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const getTrackList = (albumId) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`);

            if(response.ok) {
                let data = await response.json();
                dispatch({
                    type: GET_TRACKLIST,
                    payload: data,
                })
            } else {
                // ADD MAYBE FETCH_ERR? OR SOMETHING.
            }
        } catch(error) {
            console.log(error);
        }
    }
}

export const getArtistInfo = (artistId) => {
    return async (dispatch) => {
        try {
            const artistResponse = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)

            const topTracksResponse = await fetch(
              `https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=50`
            );

            if(artistResponse.ok && topTracksResponse.ok) {
                let artistData = await artistResponse.json();
                let topTracksData = await topTracksResponse.json();

                console.log(artistData);
                console.log(topTracksData);

                const result = {artist: artistData, topTracks: topTracksData.data}

                dispatch({
                    type: GET_ARTIST,
                    payload: result
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
}