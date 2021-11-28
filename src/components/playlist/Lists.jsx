import { useState, useEffect } from "react"
import { connect } from "react-redux"
import Dropdown from "react-bootstrap/Dropdown"
import { likedSongsAction, unlikedSongsAction, displayInPlayerAction, removeFromPlayListAction } from "../../redux/actions/actions"

const mapStateToProps = state => ({
    likes: state.likes.liked
})

const mapDispatchToProps = (dispatch) => ({
    likeSong: (songs) => {
        dispatch(likedSongsAction(songs))
    },
    unLikeSong: (songsId) => {
        dispatch(unlikedSongsAction(songsId))
    },
    displayInPlayer: (songs) => {
        dispatch(displayInPlayerAction(songs))
    },
    removeFromPlaylist: (songsIndex) => {
        dispatch(removeFromPlayListAction(songsIndex))
    }
})

const Lists = ({ song, i, likes, likeSong, unLikeSong, displayInPlayer, removeFromPlaylist }) => {
    console.log('i am the song',song)


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
        if(likes.map(l => l.id).indexOf(song.id) !== -1){
            setSelected(true)
        }else(setSelected(false))
    },[])


    return(
        <div>
            <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}  key={song.id} className="row liked-hov table-body mt-3">
            <div className="d-flex hash">
                {isShown === false ? 
                    <h6  className="text-light">{i}</h6>    
                    : <img onClick={() => displayInPlayer(song)}  src={'./images/playbtn.png'} width='17px' height='20px'/>
                } 
            </div>
        <div className="d-flex cover title">
          <div className="cover-son">
            <img onClick={() => displayInPlayer(song)} src={song.album.cover_medium} width={45} />
          </div>
          <div className="co">
            <a id="a1" >
              {song.title}
            </a>
            <br />
            <a id="a2" href="">
              {song.artist.name}
            </a>
          </div>
        </div>
        <div className="d-flex album">
          <a className="text-muted album ml-3">{song.album.title}</a>
        </div>
        <div className="d-flex date-added ">
          <span className="text-muted ml-4">1 year ago</span>
        </div>
        <div className="d-flex customDropdownDiv">
            <div className="d-flex duration">
            { selected === false ?
                <img className='mr-2' onClick={() => like(song)} src="https://img.icons8.com/ios/50/000000/like--v1.png" width='17px'/>
               : <img className='mr-2' onClick={() => unLike(song.id)} src="https://img.icons8.com/fluency/50/000000/like.png" width='17px'/>
            }
                  <span className="text-muted ml-1">
                    {("0" + Math.floor(song.duration / 60)).slice(-2)}:{("0" + song.duration % 60).slice(-2)}
                  </span>
                </div>
              <Dropdown className='threeDots  ml-4'>
                <Dropdown.Toggle className='customDropdown p-0' variant="success" id="dropdown-basic">
                    {isShown !== false ?
                       <b >•••</b> : null
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu className='customDropdownMenu '>
                  <Dropdown.Item className='customDropdownMenuItem text-light' onClick={() => removeFromPlaylist(i)}>Remove from playlist</Dropdown.Item>
                  <Dropdown.Item className='customDropdownMenuItem customBorder text-light' href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item className='customDropdownMenuItem text-light' href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </div>
        </div>
    
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)