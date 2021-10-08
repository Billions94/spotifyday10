const GoodMorning = () => {
  return (
    <>
      <h4 className="mt-3 mb-3 ml-1">Recently played</h4>
      <div id="recently" className="d-flex justify-content-between"></div>
      <h4 className="mt-3 mb-3 ml-1">Shows to try</h4>
      <div id="shows" className="d-flex justify-content-between"></div>
      <h4 className="mt-3 mb-3 ml-1">Recently Downloaded</h4>
      <div id="downloaded" className="d-flex justify-content-between"></div>
      <h4 className="mt-3 mb-3 ml-1">Favorite Music</h4>
      <div id="favorite" className="d-flex  fuild-bottom"></div>
    </>
  );
};

export default GoodMorning;
