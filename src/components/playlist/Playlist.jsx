import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import  Dropdown  from "react-bootstrap/Dropdown";
import { likedSongsAction, unlikedSongsAction, displayInPlayerAction } from "../../redux/actions/actions";
import Modal from "./Modal"
import { connect } from "react-redux"
import Lists from "./Lists";

const mapStateToProps = state => ({
  playlist: state.playlist.lists,
})



const Playlist = ({ location, playlist }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  

  return (
    location.pathname !== "/home" && (
    <div>
      <div
        id="song-nav"
        className="pt-3 pb-3 sticky-to pl-0 pr-0 m-0 sticky-top">
        <ul className="nav m-0">
          <li className="nav-item active">
            <button
              id="btn-in-nav-1"
              type="button"
              className="active btn btn-success">
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
              id="dropdown-basic">
              <img
                className="mr-3 ml-0 roundpic"
                src="./images/alex.jpeg"
                width="25px"
                alt/>
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

      <div id="liked-song" className="d-flex">
          <div className="d-flex liked-song-container">
            <img src={"https://toppng.com/uploads/preview/music-note-free-png-image-outline-of-music-notes-11562913469vlfuqfrli6.png"} width="192px" alt='' />
            <div className="expert">
              <h2 id="playlisth2" className="text-light">
                PLAYLIST
              </h2>
              <h1 id="likedsongh2" onClick={handleShow}>My Playlist</h1>
              <a id="alexander" href=''>
                Alexander Gates 
              </a>
            </div>
          </div>
        </div>

        <Modal show={show}  handleClose={handleClose}/>
          <>
            {playlist && playlist.map((song, i) => (
                <Lists song={song} i={i}/>
            ))}
          </>
    </div>)
  );
};

export default connect(mapStateToProps)(withRouter(Playlist));
