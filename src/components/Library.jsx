import { withRouter } from "react-router";
import { Dropdown } from "react-bootstrap";

const Library = ({ location }) => {
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
            <li className="nav-item lib-item-nav ml-3 ">
              <button type="button" className="btn btn-secondary lib-item-btn " >
                <span className="lib-item">Playlist</span>
              </button>
            </li>
            <li className="nav-item  lib-item-nav ml-3">
              <button type="button" className="btn btn-secondary lib-item-btn">
                <span className="lib-item">Podcast</span>
              </button>
            </li>
            <li className="nav-item  lib-item-nav ml-3">
              <button type="button" className="btn btn-secondary lib-item-btn">
                <span className="lib-item">Artists</span>
              </button>
            </li>
            <li className="nav-item  lib-item-nav ml-3">
              <button type="button" className="btn btn-secondary lib-item-btn">
                <span className="lib-item">Albums</span>
              </button>
            </li>
            <Dropdown className='username-home'>
                <Dropdown.Toggle className='dropdownMenuButton' variant="success" id="dropdown-basic">
                   <img className="mr-3 ml-0 roundpic"
                    src="./images/alex.jpeg"
                    width="25px" alt/>
                  <b className='mr-3'>Alexander</b>
                </Dropdown.Toggle>

                <Dropdown.Menu className='m-1 customDropdownMenu'>
                  <Dropdown.Item  className='' href="#/action-1">Account</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Upgrade to Premium</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Private session</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
          </ul>
        </div>
        {/* NavBar Component */}

        <div className="d-flex playlisth1">
          <h1 className="text-light">Playlist</h1>
        </div>

        <div className="d-flex playlist-liked mb-4">
          <div
            className="card card-liked"
            style={{ width: "30rem", height: "20rem" }}
          >
            <div className="card-body pl-4 liked-song d-flex">
              <p className="card-text text-left pt-6">
                WizKid True Love (feat. Tay Iwar & Projexx)???Lou Bega Mambo No. 5
                (a Little Bit of...)???Leona Lewis I See You (Theme from
                Avatar)???Kanye West Hurricane.Kanye West...
              </p>
              <div>
                <h1 id="likedh1" className="text-left pt-3 ">
                  <strong>Liked Songs</strong>
                </h1>
                <h6 className="text-left">1200 liked songs</h6>
              </div>
              <button
                id="btn-with-style"
                type="button"
                className="btn btn-success likedbtn"
              >
                ??????
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default withRouter(Library);
