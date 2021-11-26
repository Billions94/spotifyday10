import { useState, useEffect } from "react";
import { fetchSongs } from "../lib";
import { connect } from "react-redux"
import { getSongsAction } from "../redux/actions/actions";
import {Link} from "react-router-dom";



const mapStateToProps = state => ({
  songs: state.data.songs,
})

const mapDispatchToProps = dispatch => ({
 getSongs: () => {
    dispatch(getSongsAction())
 },
})

const Home = ({ songs, getSongs, selectedAlbum }) => {
  console.log('i am the song', songs)
  const [data, setData] = useState([]);
  // const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`

  useEffect(() => {
    // const fetchData = async () => {
    //   const dataEndpoint = await fetchSongs(url);
    //   setData(dataEndpoint.data);
    //   console.log(dataEndpoint.data);
    // };
    getSongs();
  }, []);

  return (
    <>
      <div
        id="songs-nav"
        className="pt-3 pb-3 sticky-to pl-0 pr-0 m-0 sticky-top"
      >
        <ul className="nav m-0">
          <li className="nav-item active">
            <button
              id="btn-in-nav-1"
              type="button"
              className="active btn btn-success"
            >
              &lt;
            </button>
          </li>
          <li className="nav-item ml-3">
            <button id="btn-in-nav-1" type="button" className="btn btn-success">
              &gt;
            </button>
          </li>
          <button
            className="
                    btn btn-black
                    text-green
                    dropdown-toggle
                    username-home
                    btn-border
                    p-0
                  "
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img
              className="mr-3 roundpic"
              src="./images/alex.jpeg"
              width="25px"
              alt
            />
            <span id="alexander" className="ml-3 mr-2">
              Alexander
            </span>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Setting
            </a>
            <a className="dropdown-item" href="#">
              Log Out
            </a>
          </div>
        </ul>
      </div>
      {/* NavBar Component */}

      <h4 className="mt-3 mb-3 ml-1 text-left">Recently played</h4>
      <div id="recently" className="">
        {songs &&
          songs.map((songs) => (
            <div className="good-morning-card ml-2 mt-4 mb-3 ">
              <div className="row no-gutters">
                <div className="col-3">
                  <img
                    src={songs.album.cover_medium}
                    style={{ borderRadius: 4 }}
                    width={80}
                  />
                </div>
                <div className="col-5 ml-2">
                  <div className="card-body">
                    <Link
                      to={`/album/${songs.album.id}`}
                    >
                      <h6 className="card-title text-white">
                        {songs.album.title}
                      </h6>
                    </Link>
                    <button
                      id="btn-with-style"
                      type="button"
                      onclick="playTrack()"
                      className="btn btn-success"
                    >
                      ▶️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <h4 className="mt-3 mb-3 ml-1 text-left">Shows to try</h4>
      <div id="shows" className="d-flex justify-content-between">
        {songs &&
          songs.map((songs) => (
            <div className="Recently-card col-2 mb-3 ml-3 p-2 ">
              <img src={songs.album.cover_medium} className="card-img-top" />
              <div className="card-body mt-2">
                <Link
                  to={`/album/${songs.album.id}`}
                >
                  <h6 className="card-title text-white">{songs.album.title}</h6>
                </Link>
                <h5 className="card-text text-white">{songs.artist.title}</h5>
                <button
                  id="btn-with-style1"
                  type="button"
                  className="btn btn-success"
                >
                  ▶️
                </button>
              </div>

            </div>
          ))}
      </div>
      <h4 className="mt-3 mb-3 ml-1 text-left">Recently Downloaded</h4>
      <div id="downloaded" className="d-flex justify-content-between">
        {songs &&
          songs.map((songs) => (
            <div className="Recently-card col-2 mb-3 ml-3 p-2 ">
              <img src={songs.album.cover_medium} className="card-img-top" />
              <div className="card-body mt-2">
                <Link
                  to={`/album/${songs.album.id}`}
                >
                  <h6 className="card-title text-white">{songs.album.title}</h6>
                </Link>
                <h5 className="card-text text-white">{songs.artist.title}</h5>
                <button
                  id="btn-with-style1"
                  type="button"
                  className="btn btn-success"
                >
                  ▶️
                </button>
              </div>
            </div>
          ))}
      </div>
      <h4 className="mt-3 mb-3 ml-1 text-left">Favorite Music</h4>
      <div id="favorite" className="d-flex fuild-bottom">
        {songs &&
          songs.map((songs) => (
            <div className="Recently-card col-2 mb-3 ml-3 p-2 ">
              <img src={songs.album.cover_medium} className="card-img-top" />
              <div className="card-body mt-2">
                <h6 className="card-title text-white">{songs.album.title}</h6>
                <h5 className="card-text text-white">{songs.artist.title}</h5>
                <button
                  id="btn-with-style1"
                  type="button"
                  className="btn btn-success"
                >
                  ▶️
                </button>
              </div>

            </div>
          ))}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
