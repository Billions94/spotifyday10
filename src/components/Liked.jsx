import { withRouter } from "react-router";
import { useState, useEffect } from "react";
import { fetchSongs } from "../lib";

const Liked = ({ location }) => {
  const [data, setData] = useState([]);
  const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`;

  useEffect(() => {
    const fetchData = async () => {
      const dataEndpoint = await fetchSongs(url);
      setData(dataEndpoint.data);
      console.log(dataEndpoint.data);
    };
    fetchData();
  }, []);

  return (
    location.pathname !== "/home" && (
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
              <button
                id="btn-in-nav-1"
                type="button"
                className="btn btn-success"
              >
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

        <div id="liked-songs" className="d-flex">
          <div className="d-flex liked-songs-container">
            <img src={"./images/Wizkid.jpeg"} width="192px" alt />
            <div className="expert">
              <h2 id="playlisth2" className="text-light">
                PLAYLIST
              </h2>
              <h1 id="likedsongh1">Liked Songs</h1>
              <a id="alexander" href>
                Alexander <span id="alex">.1,200 songs</span>
              </a>
            </div>
          </div>
        </div>
        <div className="button-flw sticky-top">
          {/*-----------button with js---------*/}
          <button
            id="btn-b4-follow"
            type="button"
            className="btn btn-success"
            onclick="togglePlay()"
          >
            <div className="follow button" />
          </button>
        </div>
        <div className="song-body col-12">
          <div className="song-content">
            <div className="table-header stickydiv mb-4 sticky-top">
              <div className="d-flex text-light hash">#</div>
              <div className="d-flex text-light title">
                <div className="d-flex">
                  <span className="text-light">TITLE</span>
                </div>
              </div>
              <div className="d-flex album ml-4">
                <div className="d-flex">
                  <span className="text-light">ALBUM</span>
                </div>
              </div>
              <div className="d-flex date-added">
                <div className="d-flex">
                  <span className="text-light">DATE ADDED</span>
                </div>
              </div>
              <div className="d-flex duration">
                <div className="d-flex">
                  <img
                    src="./images/icons8-clock-32.png"
                    width={20}
                    height={20}
                    alt
                  />
                </div>
              </div>
            </div>
            {/*-------------------------------------------table 1-------------------------------------------*/}
              <>
              {data.map((songs) => (
            <div key={songs.id} className="row liked-hov table-body mt-3">
                  <div className="d-flex hash">
                    <h6 className="text-light">2</h6>
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
                  </div>
                  <div className="d-flex duration">
                    <span className="text-muted ml-4">4:07</span>
                  </div>
                  <span className="dots">...</span>
            </div>
              ))}
                </>

          </div>
        </div>
      </>
    )
  );
};

export default withRouter(Liked);
