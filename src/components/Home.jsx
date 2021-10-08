// import { withRouter } from "react-router";
import { useState, useEffect } from "react";
import { fetchSongs } from "../lib";

const Home = ({ search }) => {
  const [data, setData] = useState([]);
  const mystate =
    search.length > 3
      ? `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`
      : `https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`;
  // if (search.length > 3) {
  //   let endpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`;
  // }else{
  //   const baseUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`;
  // }

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
      <h4 className="mt-3 mb-3 ml-1">Recently played</h4>
      <div id="recently" className="justify-content-between">
        {data.map((songs) => (
          <div class="card">
            <img
              src={songs.album.cover_medium}
              alt="cover"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
      <h4 className="mt-3 mb-3 ml-1">Shows to try</h4>
      <div id="shows" className="d-flex justify-content-between"></div>
      <h4 className="mt-3 mb-3 ml-1">Recently Downloaded</h4>
      <div id="downloaded" className="d-flex justify-content-between"></div>
      <h4 className="mt-3 mb-3 ml-1">Favorite Music</h4>
      <div id="favorite" className="d-flex  fuild-bottom"></div>
    </>
  );
};

export default Home;
