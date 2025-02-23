import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { informationText } from '../../common/language-vi.ts'

export default function InformationPopup({ isFirstTime, onHide }: any) {
  return (
    <>
      <Modal className='modal-information' show={isFirstTime} centered={true}>
        <Modal.Header>
          <Modal.Title>{informationText.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            {informationText.body}
          </div>
          <div className='mb-3'>
            {informationText.instruction} 
            <img src={"image/keys.png"} className="image-keys" alt=''></img>
          </div>
          <div className='mb-3'>
            {informationText.setting}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            {informationText.buttons.start}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}