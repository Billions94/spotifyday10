import Dropdown from "react-bootstrap/Dropdown"
import { connect } from "react-redux"
import { likedSongsAction } from "../redux/actions/actions"


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    likeSong: (songs) => {
        dispatch(likedSongsAction(songs))
    },
    unLikeSong: (songs) => {
        dispatch(likedSongsAction(songs))
    }
})

const SingleSong = ({ songs, i, likeSong }) => {
    return(
        <div key={songs.id} className="row liked-hov table-body mt-3">
        <div className="d-flex hash">
          <h6 className="text-light">{i}</h6>
        </div>
        <div className="d-flex cover title">
          <div className="cover-son">
            <img src={songs.album.cover_medium} width={45} />
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
          <img className='ml-3' onClick={() => likeSong(songs)} src="https://img.icons8.com/ios/50/000000/like--v1.png" width='25px'/>
          <img className='ml-3' onClick src="https://img.icons8.com/fluency/50/000000/like.png" width='25px'/>
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