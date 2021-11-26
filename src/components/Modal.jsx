import { useSate, useEffect } from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

const playlistModal = ({ show, handleClose }) => {
    return (
        <>    
          <Modal className='my-auto round' show={show} onHide={handleClose}>
            <Modal.Header className='modalBody' closeButton>
              <Modal.Title className='text-light'>Edit details</Modal.Title>
            </Modal.Header>
            <Modal.Body className='modalBody px-0' >
            <div id="liked-songs" className="d-flex p-0">
                <div className="d-flex liked-songs-container">
                    <img src={"./images/Wizkid.jpeg"} width="192px" alt />
                    <div className="expert">
                    <h2 id="playlisth2" className="text-light">
                        PLAYLIST
                    </h2>
                    <h1 id="likedsongh2" >My Playlist</h1>
                    <a id="alexander" href=''>
                        Alexander Gates 
                    </a>
                    </div>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer className='modalBody'>
              <Button variant="primary" className='modalBtn text-dark' onClick={handleClose}>
                <b> Save </b>
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    )
}

export default playlistModal