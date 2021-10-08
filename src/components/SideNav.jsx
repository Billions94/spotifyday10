const SideNav = () => {
  return (
    <div className="container-fluid p-0 main-body">
      <div className="row main">
        <div className="menu col-12 col-sm-4 col-md-3 col-lg-2 pt-2 ml-0 sticky-top">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <a href="https://www.spotify.com/us/" target="_blank">
              <img
                src="./images/Spotify_Logo_CMYK_Black.png"
                width={131}
                height={40}
                className="mt-2 ml-3 mb-3"
              />
            </a>
          </div>
          <div className="home-menu">
            <ul className="list-group">
              <li className="list-group-item pt-2 p-0 xxx">
                <img
                  src="./images/icons8-home-50.png"
                  width={28}
                  className="mr-3"
                  alt
                />
                <a id="liked-home" href="home.html" className="d-inline-block">
                  Home
                </a>
              </li>
              <li className="list-group-item pt-2 p-0 xxx">
                <img
                  src="./images/icons8-search-50.png"
                  width={28}
                  className="mr-3"
                  alt
                />
                <h6 className="d-inline-block">Search</h6>
              </li>
              <li className="list-group-item pt-2 p-0">
                <img
                  src="./images/icons8-music-library-50.png"
                  width={28}
                  className="mr-3"
                  alt
                />
                <a id="liked-home" href="album.html" className="d-inline-block">
                  Your Library
                </a>
              </li>
            </ul>
          </div>
          <div className="playlist">
            <ul>
              <li className="list-group-item pt-3 p-0 xxx">
                <img
                  src="./images/icons8-add-new-50.png"
                  width={28}
                  className="mr-3"
                  alt
                />
                <a
                  id="liked-home"
                  href="playlist.html"
                  className="d-inline-block"
                >
                  Playlist
                </a>
              </li>
              <li className="list-group-item pt-2 p-0">
                <img
                  src="./images/icons8-favorite-folder-50.png"
                  width={28}
                  className="mr-3"
                  alt
                />
                <h6 className="d-inline-block">Liked Songs</h6>
              </li>
            </ul>
          </div>
          <div className="row justify-content-center">
            <div className="col-11 my-1">
              <div className="divider">
                <div>
                  <strong className />
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="list-group music-group-list">
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">My Playlist</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">2Pac Mix</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">Popcaan Mix</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">Opo Mix</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">Burna Boy Mix</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">New</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">Quiet</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">Hip-Hop Mixtape</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">Pablo Escobar (Narcos)</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">XXX</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">Naiji</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted mb-1">Reggae</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">My Shazam Tracks</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">Discover Weekly</a>
              </li>
              <li className="list-group-item-1 mb-3">
                <a className="text-muted">Heavenly places</a>
              </li>
            </ul>
          </div>
          <div className="container-install-app">
            <ul className="instal-app">
              <li className="list-group-item transparent">
                <a
                  href="https://www.spotify.com/us/download/other/"
                  target="_blank"
                >
                  <button className="btn-instal-app" type="button" href>
                    <img
                      id="install-app-icon"
                      src="./images/icons8-scroll-down-50.png"
                      width={20}
                      height={20}
                      alt
                    />
                    <span className="install">Install App</span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="
              songs
              good-morning-section
              col-12 col-sm-8 col-md-9 col-lg-10
              p-0
              m-0
            "
        >
          <div id="songs-nav" className="pt-3 pb-3 sticky-to m-0">
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
                <img src="./images/adult-1.png" width="25px" alt />
                Alexander
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Setting
                </a>
                <a className="dropdown-item" href="#">
                  Log Out
                </a>
              </div>
            </ul>
          </div>


{/* // Place for the dynamic components */}
            
        
        </div>
      </div>
    </div>
  );
};

export default SideNav;
