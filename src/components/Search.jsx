import { withRouter } from "react-router";
import { useState, useEffect } from "react";
import { fetchSongs } from "../lib";

const Search = ({ location }) => {
    const [search, setSearch] = useState('')

    const [data, setData] = useState([]);
    const mystate =
      search.length > 3
        ? `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
        : `https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`;
  
    useEffect(() => {
      const fetchData = async () => {
        const dataEndpoint = await fetchSongs(mystate);
        setData(dataEndpoint.data);
        console.log(dataEndpoint.data);
      };
      fetchData();
    }, [search]);

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
            <div id="input-container">
            <img id="input-icon" src="./images/search.png"/>
            <input className="ml-3 liked-search" type="text" placeholder="Artist, songs, or podcast"
             value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button
              className="
                    btn btn-black-liked
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

        <h4 className="mt-3 mb-3 ml-1 text-left">Searched Music</h4>
      <div id="favorite" className="d-flex  fuild-bottom">
        {data.map((songs) => (
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
    )
  );
};

export default withRouter(Search);
