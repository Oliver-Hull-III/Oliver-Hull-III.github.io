import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function GalleryImage(props) {

    const [show, setShow] = useState(false);


        return (
           
                  <>
                    <a variant="primary" onClick={() => setShow(true)}>
                        <img src={props.src} style={{width: "100%",display: "block"}} />
                    </a>
              
                    <Modal
                      show={show}
                      onHide={() => setShow(false)}
                      dialogClassName="modal-dialog"
                    >
                        <img src={props.src} className="gallery-modal"/>
                        <p className="gallery-caption">
                          {props.caption}
                        </p>
                    </Modal>
                  </>
                );

    
}

export default GalleryImage;