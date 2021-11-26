import { withRouter } from "react-router";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { getTrackList } from "../redux/actions/actions.js";
import {Link} from "react-router-dom";

function mapStateToProps(state) {
  return {
    albumData: state.data.trackList,
    likes: state.liked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTrackList: (albumId) => {
      dispatch(getTrackList(albumId));
    },
  };
}


function Album({ getTrackList, albumData, likes }) {
  let { albumId } = useParams();
  useEffect(() => {
    getTrackList(albumId);
  }, []);

  useEffect(() => {
    console.log(albumData);
  }, [albumData]);

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
          <Dropdown className="username-home">
            <Dropdown.Toggle
              className="dropdownMenuButton"
              variant="success"
              id="dropdown-basic"
            >
              <img
                className="mr-3 ml-0 roundpic"
                src="./images/alex.jpeg"
                width="25px"
                alt
              />
              <b className="mr-3">Alexander</b>
            </Dropdown.Toggle>

            <Dropdown.Menu className="m-1 customDropdownMenu">
              <Dropdown.Item className="" href="#/action-1">
                Account
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                Upgrade to Premium
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Private session</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>

      <div id="liked-songs" className="d-flex">
        <div className="d-flex liked-songs-container">
          <img src={albumData.cover_medium} width="192px" alt />
          <div className="expert">
            <h2 id="playlisth2" className="text-light">
              ALBUM
            </h2>
            <h1 id="likedsongh1">{albumData.title}</h1>
            <a id="alexander" href>
              Album
              <span id="alex">
                Tracks:
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="button-flw sticky-top">

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
                <span className="text-light">TRACK</span>
              </div>
            </div>
            <div className="d-flex date-added">
              <div className="d-flex">
                <span className="text-light"></span>
              </div>
            </div>
            <div className="d-flex duration">
              <div className="d-flex">
                <img
                  src={"/public/images/icons8-clock-32.png"}
                  width={20}
                  height={20}
                  alt
                />
              </div>
            </div>
          </div>

            {albumData.tracks &&
              albumData.tracks.data.map((song,i) => (
                <div key={song.id} className="row liked-hov table-body mt-3">
                  <div className="d-flex hash">
                    <h6 className="text-light">{i+1}</h6>
                  </div>
                  <div className="d-flex cover title">
                    <div className="cover-son">
                      <img src={albumData.cover_small} width={45} />
                    </div>
                    <div className="co">
                      <a id="a1">{song.title}</a>
                      <br />
                      <Link to={`/artist/${albumData.artist.id}`}>
                      <a id="a2">
                        {song.artist.name}
                      </a>
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex album">
                    <a className="text-muted album ml-3">{albumData.title}</a>
                  </div>
                  <div className="d-flex date-added ">
                    <span className="text-muted ml-4">1 year ago</span>
                  </div>
                  <div className="d-flex customDropdownDiv">
                    <div className="d-flex duration">
                      <span className="text-muted ml-3">
                        {("0" + Math.floor(song.duration / 60)).slice(-2)}:
                        {("0" + (song.duration % 60)).slice(-2)}
                      </span>
                    </div>
                    <Dropdown className="threeDots  ml-4">
                      <Dropdown.Toggle
                        className="customDropdown p-0"
                        variant="success"
                        id="dropdown-basic"
                      >
                        <b>...</b>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="customDropdownMenu ">
                        <Dropdown.Item
                          className="customDropdownMenuItem"
                          href="#/action-1"
                        >
                          Action
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="customDropdownMenuItem customBorder"
                          href="#/action-2"
                        >
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="customDropdownMenuItem"
                          href="#/action-3"
                        >
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
);
}

export default connect(mapStateToProps, mapDispatchToProps)(Album);
