import Dropdown from "react-bootstrap/Dropdown"
import { connect } from "react-redux"
import { useState, useEffect } from "react"
import { likedSongsAction, unlikedSongsAction, displayInPlayerAction } from "../redux/actions/actions"


const mapStateToProps = (state) => ({
    likes: state.likes.liked,
    playerSong: state.playerSong
})

const mapDispatchToProps = (dispatch) => ({
    likeSong: (songs) => {
        dispatch(likedSongsAction(songs))
    },
    displayInPlayer: (songs) => {
        dispatch(displayInPlayerAction(songs))
    },
    unLikeSong: (songsIndex) => {
        dispatch(unlikedSongsAction(songsIndex))
    }
})



const SingleSong = ({ displayInPlayer, likes, songs, i, likeSong, unLikeSong }) => {

    const [selected, setSelected] = useState(false)
    const [isShown, setIsShown] = useState(false)

    const like = (songs) => {
        setSelected(true)
        likeSong(songs)
    }

    const unLike = (songsIndex) => {
        setSelected(false)
        unLikeSong(songsIndex)
    }

    useEffect(() => {
        if(likes.map(l => l.id).indexOf(songs.id) !== -1){
            setSelected(true)
        }else(setSelected(false))
    },[])

    

    return(
        <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}  key={songs.id} className="row liked-hov table-body mt-3">
        <div className="d-flex hash">
            {isShown === false ? 
            <h6  className="text-light">{i}</h6>    
            : <img onClick={() => displayInPlayer(songs)}  src={'./images/playbtn.png'} width='20px' height='20px'/>
            } 
        </div>
        <div className="d-flex cover title">
          <div className="cover-son">
            <img onClick={() => displayInPlayer(songs)} src={songs.album.cover_medium} width={45} />
          </div>
          <div className="co">
            <a id="a1" >
              {songs.title}
            </a>
            <br />
            <a id="a2" href="">
              {songs.artist.name}
            </a>
          </div>
        </div>
        <div className="d-flex album">
          <a className="text-muted album ml-3">{songs.album.title}</a>
        </div>
        <div className="d-flex date-added ">
          <span className="text-muted ml-4">1 year ago</span>
          
          { selected === false ?
                <img className='ml-3' onClick={() => like(songs)} src="https://img.icons8.com/ios/50/000000/like--v1.png" width='22px'/>
               : <img className='ml-3' onClick={() => unLike(i)} src="https://img.icons8.com/fluency/50/000000/like.png" width='22px'/>
          }
        </div>
        <div className="d-flex customDropdownDiv">
            <div className="d-flex duration">
                  <span className="text-muted ml-3">
                    {("0" + Math.floor(songs.duration / 60)).slice(-2)}:{("0" + songs.duration % 60).slice(-2)}
                  </span>
                </div>
              <Dropdown className='threeDots  ml-4'>
                <Dropdown.Toggle className='customDropdown p-0' variant="success" id="dropdown-basic">
                  <b>...</b>
                </Dropdown.Toggle>

                <Dropdown.Menu className='customDropdownMenu '>
                  <Dropdown.Item className='customDropdownMenuItem' href="#/action-1">Add to playlist</Dropdown.Item>
                  <Dropdown.Item className='customDropdownMenuItem customBorder' href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item className='customDropdownMenuItem' href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </div>
  </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleSong);