import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtist } from "../redux/actions/actions.js";
import SingleSong from "./SingleSong.jsx";
import Dropdown from "react-bootstrap/Dropdown";

function mapStateToProps(state) {
  return {
    artistInformation: state.data.artist,
    likedSongs: state.likes.liked,
  };
}

const mapDispatchToProps = (dispatch) => ({
  getArtistInfo: (artistId) => {
    dispatch(getArtist(artistId));
  },
});

function Artist({ getArtistInfo, artistInformation, likedSongs }) {
  const { artistId } = useParams();
  console.log(artistId);

  useEffect(() => {
    getArtistInfo(artistId);
  }, []);

  useEffect(() => {
    console.log(artistInformation);
  }, [artistInformation]);

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
              <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </div>
      {artistInformation && (
        <div id="liked-songs" className="d-flex mb-5">
          <div className="d-flex liked-songs-container">
            <img src={`${artistInformation.picture_xl}`} width="192px" alt />
            <div className="expert">
              {/*  <h2 id="playlisth2" className="text-light">
              
            </h2> */}
              <h1 id="likedsongh1">{artistInformation.name}</h1>
              {/*  <a id="alexander" href>
              
            </a> */}
            </div>
          </div>
        </div>
      )}
      {/* <div className="button-flw sticky-top">
      <button
        id="btn-b4-follow"
        type="button"
        className="btn btn-success"
        onclick="togglePlay()"
      >
        <div className="follow button" />
      </button>
    </div> */}
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
                  src={"/public/images/icons8-clock-32.png"}
                  width={20}
                  height={20}
                  alt
                />
              </div>
            </div>
          </div>
          <>
            {artistInformation &&
              artistInformation.topTracks.map((songs, i) => (
                <SingleSong songs={songs} i={i} />
              ))}
          </>
        </div>
      </div>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Artist);
