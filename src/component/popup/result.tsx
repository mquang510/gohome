import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { failText, resultText } from '../../common/language-vi.ts'

export default function ResultPopup({ isCompleted, onHide, total, isFailed } : any) {
  let text = isFailed ? failText : resultText
  return (
    <>
      <Modal show={isCompleted} centered={true}>
        <Modal.Header>
          <Modal.Title>{text.header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            {text.body}
          </div>
          <div className='mb-3'>
            {text.information} {total}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onHide}>
            {text.buttons.start}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}