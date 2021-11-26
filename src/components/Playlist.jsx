import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import  Dropdown  from "react-bootstrap/Dropdown";
import Modal from "./Modal"

const Playlist = ({ location }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    location.pathname !== "/home" && (
    <div>
      <div
        id="songs-nav"
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

      <div id="liked-songs" className="d-flex">
          <div className="d-flex liked-songs-container">
            <img src={"./images/Wizkid.jpeg"} width="192px" alt />
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
    
    </div>)
  );
};

export default withRouter(Playlist);
