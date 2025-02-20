import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { informationText } from '../../common/language-vi.ts'

export default function InformationPopup({ isFirstTime, onHide }) {
  return (
    <>
      <Modal show={isFirstTime} centered={true}>
        <Modal.Header>
          <Modal.Title>{informationText.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            {informationText.body}
          </div>
          <div className='mb-3'>
            {informationText.instruction}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            {informationText.startButton}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}