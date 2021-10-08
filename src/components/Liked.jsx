const Liked = () => {
  return (
    <>
      <div id="liked-songs" className="d-flex">
        <div className="d-flex liked-songs-container">
          <img src="./images/Wizkid.jpeg" width="192px" alt />
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
          <div className="table-header mb-4 sticky-top">
            <div className="d-flex text-light hash">#</div>
            <div className="d-flex text-light title">
              <div className="d-flex">
                <span className="text-light">TITLE</span>
              </div>
            </div>
            <div className="d-flex album">
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
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">1</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Wizkid.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Blessed (feat. Damian Marley)
                </a>
                <br />
                <a id="a2" href>
                  WizKid
                </a>
                <span className="commas">,</span>
                <a id="a3" href="http">
                  Damian Marley
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Made In Lagos</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 2-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">2</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Burna Boy.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Wetin Man Go Do
                </a>
                <br />
                <a id="a2" href>
                  Burna Boy
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">African Giant</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">1 year ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 3-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">3</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/High Tension.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Vision 2020 (feat. Olamide)
                </a>
                <br />
                <a id="a2" href>
                  Bella Shumrda
                </a>
                <span className="commas">,</span>
                <a id="a3" href="http">
                  Olamide
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">High Tension</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">8 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 4-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">4</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/A better time.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  FEM
                </a>
                <br />
                <a id="a2" href>
                  Davido
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">A Better Time</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">3 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 5-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">5</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Blacc hollywood.jpg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Blacc N Yellow
                </a>
                <br />
                <a id="a2" href>
                  Wiz Khalifa
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Blacc Hollywood</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 years ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 6-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">6</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Rather You Than Me.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Amsterdam
                </a>
                <br />
                <a id="a2" href>
                  Rick Ross
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Rather You Than Me</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">4 years ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 7-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">7</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/DS2.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  F*ck Up Some Commas
                </a>
                <br />
                <a id="a2" href>
                  Future
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">DS2</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 years ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 8-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">8</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Meek_Mill_–_Championships.png" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Championships
                </a>
                <br />
                <a id="a2" href>
                  Meek Mill
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Championships</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">3 years ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 9-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">9</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Wizkid.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Smile (feat. H.E.R)
                </a>
                <br />
                <a id="a2" href>
                  WizKid
                </a>
                <span className="commas">,</span>
                <a id="a3" href="http">
                  H.E.R
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Made In Lagos</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 10-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">10</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Wizkid.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Ginger (feat. Burna Boy)
                </a>
                <br />
                <a id="a2" href>
                  WizKid
                </a>
                <span className="commas">,</span>
                <a id="a3" href="http">
                  Burna Boy
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Made In Lagos</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 11-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">11</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Wizkid.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Longtime (feat. Skepta)
                </a>
                <br />
                <a id="a2" href>
                  WizKid
                </a>
                <span className="commas">,</span>
                <a id="a3" href="http">
                  Skepta
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Made In Lagos</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 12-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">12</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Wizkid.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Mighty Wine
                </a>
                <br />
                <a id="a2" href>
                  WizKid
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Made In Lagos</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 13-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">13</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Wizkid.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  True Love (feat. Tay Iwar &amp; projexx)
                </a>
                <br />
                <a id="a2" href>
                  WizKid
                </a>
                <span className="commas">,</span>
                <a id="a3" href="http">
                  Project
                </a>
                <span className="commas">,</span>
                <a id="a3" href="http">
                  Tay Iwar
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Made In Lagos</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 14-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">14</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Wizkid.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  Essence (feat. Tems)
                </a>
                <br />
                <a id="a2" href>
                  WizKid
                </a>
                <span className="commas">,</span>
                <a id="a3" href="http">
                  Tems
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Made In Lagos</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
          {/*-------------------------------------------table 15-------------------------------------------*/}
          <div className="table-body mt-3">
            <div className="d-flex hash">
              <h6 className="text-light">15</h6>
            </div>
            <div className="d-flex cover title">
              <div className="cover-son">
                <img src="./images/Wizkid.jpeg" width={45} />
              </div>
              <div className="co">
                <a id="a1" href>
                  No Stress
                </a>
                <br />
                <a id="a2" href>
                  WizKid
                </a>
              </div>
            </div>
            <div className="d-flex album">
              <span className="text-light album">Made In Lagos</span>
            </div>
            <div className="d-flex date-added">
              <span className="text-light">9 Months ago</span>
            </div>
            <div className="d-flex duration">
              <span className="text-light">4:07</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
