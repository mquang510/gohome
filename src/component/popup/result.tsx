import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { resultText } from '../../common/language-vi.ts'

export default function ResultPopup({ isCompleted, onHide, total } : any) {
  return (
    <>
      <Modal show={isCompleted} centered={true}>
        <Modal.Header>
          <Modal.Title>{resultText.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            {resultText.body}
          </div>
          <div className='mb-3'>
            {resultText.information} {total}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            {resultText.buttons.start}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}