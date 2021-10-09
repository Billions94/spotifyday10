// import { withRouter } from "react-router";
import { useState, useEffect } from "react";
import { fetchSongs } from "../lib";

const Home = ({ search }) => {
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
    <>
      <h4 className="mt-3 mb-3 ml-1 text-left">Recently played</h4>
      <div id="recently" className="justify-content-between">
        {data.map((songs) => (
          <div className="good-morning-card ml-2 mt-4 mb-3 active ">
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
                  <h6 className="card-title text-white">
                    {songs.album.title}
                  </h6>
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
        {data.map((songs) => (
          <div class="Recently-card col-2 mb-3 ml-3 p-2 ">
            <img src={songs.album.cover_medium} class="card-img-top" />
            <div class="card-body mt-2">
              <h6 class="card-title text-white">{songs.album.title}</h6>
              <h5 class="card-text text-white">{songs.artist.title}</h5>
              <button
                id="btn-with-style1"
                type="button"
                class="btn btn-success"
              >
                ▶️
              </button>
            </div>
          </div>
        ))}
      </div>
      <h4 className="mt-3 mb-3 ml-1 text-left">Recently Downloaded</h4>
      <div id="downloaded" className="d-flex justify-content-between">
        {data.map((songs) => (
          <div class="Recently-card col-2 mb-3 ml-3 p-2 ">
            <img src={songs.album.cover_medium} class="card-img-top" />
            <div class="card-body mt-2">
              <h6 class="card-title text-white">{songs.album.title}</h6>
              <h5 class="card-text text-white">{songs.artist.title}</h5>
              <button
                id="btn-with-style1"
                type="button"
                class="btn btn-success"
              >
                ▶️
              </button>
            </div>
          </div>
        ))}
      </div>
      <h4 className="mt-3 mb-3 ml-1 text-left">Favorite Music</h4>
      <div id="favorite" className="d-flex  fuild-bottom">
        {data.map((songs) => (
          <div class="Recently-card col-2 mb-3 ml-3 p-2 ">
            <img src={songs.album.cover_medium} class="card-img-top" />
            <div class="card-body mt-2">
              <h6 class="card-title text-white">{songs.album.title}</h6>
              <h5 class="card-text text-white">{songs.artist.title}</h5>
              <button
                id="btn-with-style1"
                type="button"
                class="btn btn-success"
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

export default Home;
