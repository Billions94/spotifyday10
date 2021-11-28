export const GET_SONGS = 'GET_SONGS'
export const GET_ARTIST = 'GET_ARTIST'
export const GET_ALBUMS = 'GET_ALBUMS'
export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST'
export const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST'
export const LIKE_SONGS = 'LIKE_SONGS'
export const UNLIKED_SONGS = 'UNLIKED_SONGS'
export const SET_SELECTED_ALBUM = 'SET_SELECTED_ALBUM'
export const GET_TRACKLIST = 'GET_TRACKLIST'
export const PUT_IN_PLAYER = 'PUT_IN_PLAYER'


export const likedSongsAction = (songs) => ({
    type: LIKE_SONGS,
    payload: songs

})

export const unlikedSongsAction = (songsId) => ({
    type: UNLIKED_SONGS,
    payload: songsId
})


export const addToPlaylistAction = (songs) => ({
    type: ADD_TO_PLAYLIST,
    payload: songs
})

export const removeFromPlayListAction = (songsIndex) => ({
    type: REMOVE_FROM_PLAYLIST,
    payload: songsIndex
})

export const displayInPlayerAction = (songs) => ({
    type: PUT_IN_PLAYER,
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